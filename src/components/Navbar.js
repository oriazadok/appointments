import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import logo from "../images/logo.PNG"

const Navbar = () => {
  return (
    <div>
        <nav>
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <div className="search">
            <form action="#" method="get">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
        </div>
        <div className="user">
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
        </nav>
    </div>
  );
}

export default Navbar



