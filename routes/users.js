import express from "express"
import { v4 as uuidv4 } from 'uuid';

const router= express.Router();

let users=[]


router.get("/",(req,res)=>{
    console.log(users);
    res.send(users);
})

router.post("/",(req,res)=>{
    console.log("ROUTE REACHED HERE");
    console.log(req.body);
    const user= req.body;

    users.push({...user,id:uuidv4()});

    res.send(users);
})

router.get("/:id",(req,res)=>{
    const { id }= req.params;
    const user= users.find((element)=>element.id === id);
    res.send(user);
})

router.delete("/:id",(req,res)=>{
    const { id }= req.params;
    console.log("==============");
    console.log(users);
    let tempo=[];
   for(let user of users){ 
       if(user.id !== id)
       {
            tempo.push(user);
       }
   }
    console.log(tempo);
    users= tempo;
    res.send(`user with ${id} got dleted`);
})

export default router;