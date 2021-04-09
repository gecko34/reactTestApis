import "./Item.scss";
import image from "./../../public/600-600.png";


const Item = () => {
  return (
    <div class="item">
      <div class="itemImage">
        <img src={image} alt="" />
      </div>

      <div class="text">
        <div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature ars old. Richard McClintock, a  professor at Hampden-Sydnfrom 45 BC, making it over 2000 years old. Richard McClintock, a  professor at Hampden-Sydney College in Virginia
        </div>
      </div>
    </div>
  );
};

export default Item;
