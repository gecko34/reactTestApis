import MainImage from "./MainImage";
import Articles from "./Articles";

import "./Content.scss";

const Content = () => {
  return (
    <div className="content">
      <div className="contentScroll">
        <MainImage />
        <Articles />
      </div>
    </div>
  );
};

export default Content;
