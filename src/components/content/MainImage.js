

import "./MainImage.scss";
// import image from "./../../public/Breaking-Bad.jpg";

const MainImage = (props) => {

  return (
    <div className="contentImage">
      <div>
        <img src={props.picture} alt="" />
      </div>
    </div>
  );
};

export default MainImage;
