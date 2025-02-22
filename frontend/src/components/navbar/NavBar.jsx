import { Link } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><a href="/">CapyPath</a></h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/account">Account</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
