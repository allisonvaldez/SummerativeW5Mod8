// Import necessary components and NavLink
import { NavLink } from "react-router-dom";
import "./NavBar.css";

// Declare a function for NavBar() make sure to provide accessible navigation 
function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/admin">Admin Portal</NavLink>
        </nav>

    );
}

// Make it globally accessible
export default NavBar;