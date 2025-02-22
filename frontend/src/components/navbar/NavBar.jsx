import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const handleScrollToAbout = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      // If already on home page, scroll smoothly to the About Us section
      const aboutSection = document.getElementById("about-us");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home and scroll after load
      window.location.href = "/#about-us";
    }
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <a href="/#about-us" onClick={handleScrollToAbout}>About Us</a>

      {user ? (
        <>
          <Link to="/account">Account</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
