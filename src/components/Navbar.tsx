import { Link } from "react-router-dom";
import "../styles/Global.css";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">
        <h1>ARKIVE</h1>
      </div>
      <div className="navbar-clickables">
        <div className="navbar-links">
          <Link to="/" className="navlink">
            Home
          </Link>
          <Link to="/general" className="navlink">
            General
          </Link>
          <Link to="/sports" className="navlink">
            Sports
          </Link>
          <Link to="/technology" className="navlink">
            Technology
          </Link>
          <Link to="/business" className="navlink">
            Business
          </Link>
          <Link to="/entertainment" className="navlink">
            Entertainment
          </Link>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            className="search-bar"
            placeholder="looking for something?"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
