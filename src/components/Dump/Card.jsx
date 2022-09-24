import React from "react";
import { useState } from "react";


const Card = ({ cardData }) => {
  //   console.log(menuData);
  
let bookmsg="book";
  const [pickmsg,setPickmsg]=useState("book");
  function changemsg(){
    if(pickmsg==="book")
    {
      setPickmsg('pick')
    }
    // else{
    //   setPickmsg("book")
    // }

   }
  
 
 

  return (
    <>
      <section className="main-card--cointainer">
        {cardData.map((curElem) => {
          const { id, name, category, image, description, weight } = curElem;


          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="cardes subtle">
                      {description}
                    </span>
                    <br />
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <br />
                    <button className="weight">
                      {weight}
                    </button>

                  <span className="card-tag  subtle" onClick={changemsg}>{
                    pickmsg==="book"?(
                      "pick"
                    ):(
                      "Booked Pick-up. Our agent will mail you"

                    )
                  }</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Card;