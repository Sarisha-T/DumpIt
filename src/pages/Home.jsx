import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner/Banner'
import Dump from '../components/Dump/Dump'
import How from '../components/howitstarted/howitstarted'
import Footer from '../components/footer/Footer'
// import Loginn from "../components/login/Loginn"



function Home() {
  return (
    <div>
      {/* <Loginn/>  */}
      <Navbar/>
      <Banner/>
      <Dump/>
      <How/>
      <Footer/>
      

    </div>
   
  )
}

export default Home