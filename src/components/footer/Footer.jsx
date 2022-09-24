import React from 'react'
import "../footer/footer.css"
function Footer() {
  return (
    <div>
        <div className="fcontainer">
            <section className="divisions">
                <div className="one">
                    <ul>
                        <li>Now only in bengaluru</li>
                        <li>Contact: +12113345698</li>
                        <li>whatsapp us anytime</li>
                    </ul>

                </div>
                <div className="two">
                    <ul>
                        <li>Help Us serve better</li>
                        <li>Warehouses all over district</li>
                        <li>Pickup from your home</li>
                    </ul>
                    
                </div>
              
                
            </section>
            <div className="end" >
                <div className="git linkitem">
                    <a class="link" href="https://github.com/Sarisha-T">
                <img src="./githubwhite.png" alt="" height="40"/>
                    </a>
                </div>
                <div className="cc linkitem">
                    &copy; 2022   ||   All rights reserved
                </div>
                <div className="mail linkitem">
                     <a class="link" href="mailto:sarisha0004@gmail.com">
                <img src="./email2.png" alt="" height="42"/>
            </a>
                </div>
               
                </div>

        </div>
    </div>
  )
}

export default Footer;