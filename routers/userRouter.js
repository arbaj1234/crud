import express from 'express';
import { createuser, deleteuser, getAlluser, getAlluserbyid, updateuser } from '../controller/UserController.js';


const router=express.Router();



router.post('/createuser',createuser)

router.get('/getAlluser',getAlluser)

router.get('/getbyid/:id',getAlluserbyid)

router.put('/updateuser/:id',updateuser)

router.delete('/deleteuser/:id',deleteuser)




export default router