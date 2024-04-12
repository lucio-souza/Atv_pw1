import checkExistsUserAccount from '../middlewares/checkExistsUserAccount';
import { user } from '../model/userType';
import  express  from 'express';
import {v4 as uuid} from 'uuid';

const technolgiesRouter = express.Router();

technolgiesRouter.get("/",checkExistsUserAccount,(req,res)=>{
    const userIndex = req.userIndex;
    res.status(200).json({
        technologies:user[userIndex].technologies
    })
});
technolgiesRouter.post("/",checkExistsUserAccount,(req,res)=>{
    const userIndex = req.userIndex;
    const {title,deadline}=req.body;

    const newTechnology={
        id:uuid(),
        title,
        studied:false,
        deadline:new Date(deadline),
        created_at:new Date()
    }
    user[userIndex].technologies.push(newTechnology);
    res.status(201).json({
        technolgy:newTechnology
    })
});

technolgiesRouter.put("/:id",checkExistsUserAccount,(req,res)=>{
    
})

export default technolgiesRouter;