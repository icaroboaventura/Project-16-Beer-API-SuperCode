import { Link } from "react-router-dom";

const HomeDivLink = ({ path, linkName, imgSrc, description }) => {
  return (
    <Link to={path} className="link-div">
      <img src={imgSrc} alt={linkName} />
      <h2>{linkName}</h2>
      <p>{description}</p>
    </Link>
  );
};

export default HomeDivLink;
