import "./Item.scss";
import image from "./../../public/600-600.png";


const Item = () => {
  <div
    className={ itemSelected === index ? "item selected" : "item" }
    key={`character_${index}`}
    onClick={() => functionSelected(index)}
  >
    <div className="itemImage">
      <img src={imageName} alt="" ></img>
    </div>

    <div className="text">
      <div>
        {textName}
      </div>
    </div>
  </div>
  );
};

export default Item;
