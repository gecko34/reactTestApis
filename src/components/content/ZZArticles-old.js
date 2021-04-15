import { useState, useEffect } from 'react';

import "./Articles.scss";

const Articles = () => {

  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
      fetch("https://www.breakingbadapi.com/api/characters").then(
        (data) => data.json()
      ).then(
        (jsonData) => {
          setCharacterList(jsonData.map(
            (element, index) => {

              return (

                <div className="item" key={`character_${index}`}>
                  <div className="itemImage">
                    <img src={element.img} alt="" ></img>
                  </div>

                  <div className="text">
                    <div>
                      {element.name}
                    </div>
                  </div>
                </div>

              );
            }
          ));
        }
      );
    }, []);

  let child = (
    <div className= "articlesScroll">
      {characterList}
    </div>
  );

  if (!characterList.length) {
    child = "Test";
  }

  return (
    <div className="articles">
        {child}
    </div>
  );
};

export default Articles;
