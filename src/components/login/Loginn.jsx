import React from 'react'
import "../login/login.css"
import {useState} from "react"
import {useNavigate} from 'react-router-dom'; 

function Loginn() {
   let [login,SetLogin]=useState("register");
   let [msg,setMsg]=useState(null);
   const nav=useNavigate();
   let user={};
   function changeLogin(){
    if(login==="register")
    {
      SetLogin('login')
    }else{
      SetLogin("register")
    }

   }

   function readVal(property,value){
    user[property]=value;

   }


   function register(){
    fetch("http://localhost:3000/user/reg",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"

      },
      body:JSON.stringify(user)

    })
    .then((res)=>res.json())
    .then((data)=>{setMsg(data.message)
      user={};
      setTimeout(()=>{
        setMsg(null);
      },3000)
    })
    .catch((err)=>{
      console.log(err)})
    }

    
   function signin(){
    fetch("http://localhost:3000/user/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"

      },
      body:JSON.stringify(user)

    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.success===true){
        localStorage.setItem("token",data.token);
        nav("/Home")
      }else{
        setMsg(data.message)
        setTimeout(()=>{
          setMsg(null);
        },3000)

      }
    })
    .catch((err)=>{
      console.log(err)})
    }
   
  return (
   

   
    <div className='outer'>
       {
      msg!==null?(
      
        <div className="message">
         {msg}
        </div>
       ):null
      }


        <div className="logincontainer"><h1>DumpIt</h1>
            <div className="inner">
           
                
                <p className="signin" onClick={changeLogin}>
                  {
                    login==="register"?(
                      "Login"
                    ):(
                      "Register"
                    )
                  }
                </p> <h2 className='titlee'>Sign Up</h2>
                
                <br />
                {
                  login==='register'?
                
                (<div className="form">
                    <input type="text" placeholder="Enter name" onChange={(event)=>{
                      readVal("name",event.target.value)
                    }}/>
                    <input type="email" placeholder="Enter email" onChange={(event)=>{
                      readVal("email",event.target.value)}}/>
                    <input type="password" placeholder="Enter password" onChange={(event)=>{
                      readVal("password",event.target.value)}}/>
                    <button className="reg" onClick={register}>Register</button>
                  </div> 
                ):
                    (
                      <div className="form2">
                    <input type="text" placeholder="Enter name" onChange={(event)=>{
                      readVal("name",event.target.value)}} />
                    {/* <input type="email" placeholder="Enter email" /> */}
                    <input type="password" placeholder="Enter password" onChange={(event)=>{
                      readVal("password",event.target.value)}} />
                    <button className="reg" onClick={signin}>Login</button>
                    </div>

                    )
                }

                   
                </div>

            </div>

        </div>


   
  )
}

export default Loginn