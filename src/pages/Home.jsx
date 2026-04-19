// Import Link, components, and styles
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./Home.css";

// Create a function for Home component
function Home() {
    return (
        <>
            <NavBar />
            {/* Get as close to the mockup as possible with brown background */}
            <div className="hero">
                <h1>Coffee R Us</h1>
                <p>The go to store for your coffee needs</p>
                <Link to="/shop">
                    <button className="hero-btn">Browse Our Coffees</button>
                </Link>
            </div>
        </>
    );
}

// Make it globally available
export default Home;