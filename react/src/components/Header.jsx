import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="brand">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg"
            alt=""
          />
          <h2>Mindstay</h2>
        </div>
        <nav>
          <Link to={`/`} className="link">
            Home
          </Link>
          <Link to={`/about`} className="link">
            About
          </Link>
          <Link to={`/contact`} className="link">
            Contact
          </Link>
          <Link to={`/projects`} className="link">
            Projects
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
