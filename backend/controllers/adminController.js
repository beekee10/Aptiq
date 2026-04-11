import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary } from 'cloudinary'
import { json } from 'express'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentModel.js'
import userModel from '../models/userModel.js'

// API for calling doctor
const addDoctor = async (req,res) => {
    try {
        
        const { name, email, password, speciality, degree, experience, about, fees, address} = req.body
        const imageFILE = req.file  // multer uploaded image ko req.file me convert kar diya(taki server iko use kar sake)

        
        // checking for all data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json({success:false, message:"Data is Missing"})
        }

        // validating email
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Please enter a valid email"})
        }

        // validating strong password
        if(password.length<8){
            return res.json({success:false, message:"Please enter a strong password"})
        }
        
        // hashing doctor password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        // upload image to cloudinary                   ( filename , type of file )
        const imageUpload = cloudinary.uploader.upload(imageFILE.path,{resource_type:"image"})
        const imageUrl = (await imageUpload).secure_url;  
                        // getting link of the uploaded image

        // now we have to save all the data into database
        const doctorData={
            name,
            email,
            image:imageUrl,
            password:hashPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            available: true,
            address: JSON.parse(address),
            date:Date.now()
        }

        // now saving the doctor properties intothe doctor model
        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({success:true, message:"Doctor Added"});

    } catch(error) {
    console.log( error)
    res.json({success:false, message:error.message})
}
}

// API for Admin login 
const loginAdmin = async (req,res) => {
    try{
        
        const {email,password} = req.body

        if( email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD ){
            
            const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn : '1h'})  // token will be created
            res.json({success:true,token})  // token will be sent as response
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API to get all doctors list for admin panel
const allDoctors = async (req,res) => {
    try{

        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API to get all appointments list
const appointmentsAdmin = async(req,res) => {
    try{

        const appointments = await appointmentModel.find({})
        res.json({success:true,appointments})

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API for  appointment cancellation
const appointmentCancelAdmin = async (req,res) => {

    try{
        
        const { appointmentId } = req.body

        if (!appointmentId) {
            return res.json({ success: false, message: 'Appointment id required' })
        }

        const appointmentData = await appointmentModel.findById(appointmentId)

        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})
        // when booking is cancelled that slot of doctor will be again open/released

        const {docId, slotDate, slotTime} = appointmentData

        const doctorData = await doctorModel.findById(docId)

        let slots_booked = doctorData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e=>e !== slotTime)

        await doctorModel.findByIdAndUpdate(docId, {slots_booked})

        res.json({success:true, message:"Appointment cancelled"})

    }catch(error){
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data for admin panel
const adminDashboard = async (req,res) => {

    try{

        const doctors = await doctorModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            doctors: doctors.length,
            appointments: appointments.length,
            patients: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success:true,dashData})

    }catch(error){
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export {addDoctor, loginAdmin, allDoctors, appointmentsAdmin, appointmentCancelAdmin, adminDashboard}