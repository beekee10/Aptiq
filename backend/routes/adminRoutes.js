import express from 'express'
import { addDoctor,allDoctors,loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import {changeAvailability} from '../controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor/',authAdmin,upload.single('image'),addDoctor)  /// doctor ka info upload karne ke liye (only admin can do)
adminRouter.post('/login', loginAdmin)  // admin logn karega aur use tokn milega.then agar token hai, tabhi admin add-doctor kar sakta hai(bcoz it verifies he is admin).so upar me authAdmin middleware lagayenge check karne ke liye agar admiin authenticated hai tabhi wo add kar sakta hai otherwise no
adminRouter.post('/all-doctors',authAdmin,allDoctors)
adminRouter.post('/change-availability',authAdmin,changeAvailability)

export default adminRouter