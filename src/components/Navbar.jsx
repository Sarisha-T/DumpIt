import React from 'react'
import '../components/navbar.css'
import {useNavigate} from 'react-router-dom'


function Navbar() {
  const navigate=useNavigate()
  return (
   
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>DumpIt</span>
          <div className='navlink'>
            <ul className='navul'>
              <li><a className='nava' onClick={()=>{navigate("/Dump")}}>Dump</a></li>
              <li><a className='nava' onClick={()=>{navigate("/How")}}>How it started</a></li>
            </ul>
          </div>
            <div className='items'>
                {/* <button className="logins">Login</button> */}
                
                <button className="signUp" onClick={()=>{navigate("/")}}>Sign Out</button>
            </div>

        </div>

        

    </div>
  )
}

export default Navbar;