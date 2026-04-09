import jwt from 'jsonwebtoken'

// admin authentication middleware
const authAdmin = async (req,res,next) => {
    try{
       const authHeader = req.headers.authorization
       if(!authHeader){
            return res.json({success: false, message: ' Not Authorized , Login Again'})
       }

       const token = authHeader.split(" ")[1]

       if(!token){
            return res.json({success: false, message: 'Token Missing'})
       }

       const decoded = jwt.verify(token,process.env.JWT_SECRET)

       if(decoded.email !== process.env.ADMIN_EMAIL){
            return res.json({ success: false, message: 'Not Authorized' })
       }

        next()
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export default authAdmin