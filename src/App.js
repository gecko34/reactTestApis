import React from "react";
import { useState } from 'react';
import Header from "./components/Header";
import Content from "./components/content/Content";
import Footer from "./components/Footer";


import "./App.scss";



const App = () => {

  const [memoCards, setMemoCards] = useState([]);

  const titi = (index, value, cardImage, cardText, apiName) => {
    console.log("Add item callback App => ", index, value, apiName);

    const tempDatas = [];
    tempDatas.push(apiName, index, value, cardImage, cardText);

    memoCards.push(tempDatas);
    setMemoCards(memoCards);
    console.log("Tableau cards : ", memoCards);
  };


  return (
    <div className="container">
      <Header />
      <Content
        clickHandler = {titi}
        memo = {memoCards}
       />
      <Footer />
    </div>
  );
};

export default App;
