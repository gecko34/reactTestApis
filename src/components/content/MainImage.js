
import "./MainImage.scss";
import image from "./../../public/600-600.png";

const MainImage = () => {
  return (
    <div className="contentImage">
      <div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default MainImage;
