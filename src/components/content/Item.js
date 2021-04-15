import { useState } from 'react';
import "./Item.scss";


const Item = (props) => {

  const [itemMemo, setItemMemo] = useState(false);

  const functionSelected = () => {
    setItemMemo(!itemMemo);
    props.clickHandler(!itemMemo);
  }


  return (

    <div
      className={ itemMemo === true ? "item selected" : "item" }
      onClick={() => functionSelected()}
    >
      <div className="itemImage">
        <img src={props.itemImage} alt="" ></img>
      </div>

      <div className="text">
        <div>
          {props.itemText}
        </div>
      </div>
    </div>
  );
};

export default Item;
