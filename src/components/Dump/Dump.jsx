import React, { useState } from "react";
import "./styles.css";
import CardDesc from "./Cardesc";
import Card from "./Card";
import Navbar from "./CardNav";

const uniqueList = [
  ...new Set(
    CardDesc.map((currEl) => {
      return currEl.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const Dump = () => {
  const [cardData, setCardData] = useState(CardDesc);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
    
      setCardData(CardDesc);
     
      
      return;
    }

    const updatedList = CardDesc.filter((curElem) => {
      return curElem.category === category;
    });

    setCardData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Card cardData={cardData} />
    </>
  );
  };

export default Dump;