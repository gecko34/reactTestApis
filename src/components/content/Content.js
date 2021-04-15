import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

import image1 from "./../../public/Breaking-Bad.jpg";
import image2 from "./../../public/Macaron.jpg";
import image3 from "./../../public/Amiibo.jpg";

import MainImage from "./MainImage";
import Articles from "./Articles";
import Item from "./Item";

import "./Content.scss";


const Content = (props) => {

  const location = useLocation();
  const [characterList, setCharacterList] = useState([]);

  const [pictureName, setPictureName] = useState();

  // const [itemsListMemo, setItemsListMemo] = useState([]);

  const articlesElements = (index, cardImage, cardText) => {
    const toto = (value) => {
      let apiKeyName = location.pathname.substring(1);
      props.clickHandler(index, value, cardImage, cardText, apiKeyName);
    };

    return (
      <Item
        clickHandler = {toto}
        itemImage = {cardImage}
        itemText = {cardText}
        key = {`character_${index}`}
      />
    );
  };


  useEffect(() => {

      if (location.pathname === "/bb") {

        setPictureName(image1);
        fetch("https://www.breakingbadapi.com/api/characters").then(
          (data) => data.json()
        ).then(
          (jsonData) => {
            setCharacterList(jsonData.map(
              (element, index) => {
                return articlesElements(index, element.img, element.name);
              }
            ));
          }
        );

      } else if (location.pathname === "/macaron") {

        setPictureName(image2);
        fetch("https://macronfact.antonin-dev.fr/factjson/all").then(
          (data) => data.json()
        ).then(
          (jsonData) => {
            setCharacterList(jsonData.data.map(
              (element, index) => {
                return articlesElements(index, element.img, element.fact);
              }
            ));
          }
        );

      } else if (location.pathname === "/amiibos") {

        setPictureName(image3);
        fetch("https://www.amiiboapi.com/api/amiibo").then(
          (data) => data.json()
        ).then(
          (jsonData) => {
            setCharacterList(jsonData.amiibo.map(
              (element, index) => {
                return articlesElements(index, element.image, element.character);
              }
            ));
          }
        );
      }

      else if (location.pathname === "/memo") {

        setPictureName(image1);
        setCharacterList(props.memo.map(
          (element, index) => {
            return articlesElements(index, element[3], element[4]);
          }
        ));
        ;
      }


    }, [location.pathname]);

  let child = (
    <div className= "articlesScroll">
      {characterList}
    </div>
  );

  if (!characterList.length) {
    child = "Test";
  }

  return (
    <div className="content">
      <div className="contentScroll">
        <MainImage picture = {pictureName} />
        <Articles dataContent = {child} />
      </div>
    </div>
  );
};

export default Content;
