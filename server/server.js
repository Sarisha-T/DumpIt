const express=require('express')
const mongoose=require("mongoose")
const cors=require('cors')

const userRouter=require('./controller/user')
const app=express();

mongoose.connect("mongodb://localhost:27017/usersdump")
.then(()=>{console.log('connected')})
.catch((err)=>{console.log(err)})

app.use(cors());
app.use(express.json());
app.use("/user",userRouter)

app.listen(3000);
