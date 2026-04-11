import jwt from 'jsonwebtoken'

// DOCTOR authentication middleware
const authDoctor = async (req,res,next) => {
    try{
        // Express normalizes header names to lowercase.
        // Support both custom `dtoken` header and Bearer token.
        const dToken = req.headers.dtoken 
        if(!dToken){
            return res.json({success: false, message: ' Not Authorized Login Again'})
        }

        const token_decode = jwt.verify(dToken,process.env.JWT_SECRET)

        req.docId = token_decode.id

        next()
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export default authDoctor
