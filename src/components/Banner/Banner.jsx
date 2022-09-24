import React from 'react'
import '../Banner/banner.css'
import {useNavigate}from "react-router-dom"


function Banner() {
  const navigate=useNavigate()
  return (
    <div className='banner'>
      <div className="bancontainer">
        <span>Free your Closet by dumping It to us.</span>
        <button onClick={()=>{navigate("/Dump")}}>TRY DUMP</button>
        
        {/* <img src="./closet.jpg" alt="" className="bannerimg" /> */}
        <div className="herotitle">
          

        </div>
        
      </div>
    </div>
  )
}

export default Banner