import express from 'express'
import { doctorList, doctorLogin, appointmentsDoctor, appointmentComplete, appointmentCancel } from '../controllers/doctorController.js';
import authDoctor from '../middlewares/authDoctor.js'

const doctorRouter = express.Router();

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',doctorLogin)
doctorRouter.get('/appointments',authDoctor, appointmentsDoctor)
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)

export default doctorRouter