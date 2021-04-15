
import "./Articles.scss";

const Articles = (props) => {

  return (
    <div className="articles">
        {props.dataContent}
    </div>
  );
};

export default Articles;
