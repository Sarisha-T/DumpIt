const express=require('express')
// const mongoose=require('mongoose')
const bcryptjs=require("bcryptjs");
const jsonwebtoken=require("jsonwebtoken")
const verifyToken=require("../verifytoken")

const userModel=require("../model/usermodel");



const router=express.Router();

router.post("/reg",(req,res)=>{
    let user=req.body;
    bcryptjs.genSalt(10,(err,salt)=>{
        bcryptjs.hash(user.password,salt,(err,en_pwrd)=>{
            if(err===null){
                user.password=en_pwrd;
                let userOBJ=new userModel(user);
                userOBJ.save()
                .then(()=>{
                    res.send({message:"created"})
                })
                .catch((err)=>{
                    console.log(err)
                    res.send({message:"not connected"})
                })
            }
        })
    })
})

router.post("/login",(req,res)=>{
    let userCred=req.body;
    userModel.findOne({name:userCred.name})
    .then((user)=>{
        if(user!==null){
            bcryptjs.compare(userCred.password,user.password,(err,login)=>{
                
                    if(login===true){
                        jsonwebtoken.sign(userCred,"code",(err,token)=>{
                            if(err===null){
                                res.send({success:true,token:token})
                            }
                        })

                    }else{
                        res.send({success:false,message:"incorrect password"})
                       
                    }
                
            })

        }
        else{
            res.send({success:false,message:"username incorrect"})
        }
    })
    .catch((err)=>{
    console.log(err);
    res.send("cant login")
})


})

router.get("/sample",verifyToken,(req,res)=>{
    res.send("hello");
})



module.exports=router;
