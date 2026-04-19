// Import useContext,  useRef, useState, components, and styles
import { useContext, useRef, useState } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
import NavBar from "../components/NavBar";
import CoffeeCard from "../components/CoffeeCard";
import "./Shop.css"

// Declare different locations
const LOCATIONS = ["Location 1", "Location 2", "Location 3", "Location 4"];

// Declare a function for Shop component
function Shop() {
    // Set coffees from global CoffeeContext
    const { coffees } = useContext(CoffeeContext);
    // Track user search input without rerendering each time set initial value to null
    const searchRef = useRef(null);
    // Set query states to initially empty
    const [query, setQuery] = useState("");
    // Set state locations to empty initially 
    const [selectedLocations, setSelectedLocations] = useState([]);

    // Declare an inner function to track user queries and update its state in real time
    function handleSearch() {
        setQuery(searchRef.current.value);
    }

    // Declare a function to toggle location off and on
    function handleLocationToggle(location) {
        setSelectedLocations(prev => prev.includes(location) ? prev.filter(1 !== location) : [...prev, location]
        );
    }

    // Filter out coffees based on user query and locations selected
    const filteredCoffees = coffees.filter(coffee => {
        const matchesSearch = coffee.name.toLowerCase().includes(query.toLowerCase());
        const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(coffee.location);
        return matchesSearch && matchesLocation;
    });

    return (
        <>
            <NavBar />
            {/* Sidebar search and location filters */}
            <aside className="sidebar">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    ref={searchRef}
                    onChange={handleSearch}
                />
                {/* Put a checkbox for each location */}
                {LOCATIONS.map(loc => (
                    <label
                        key={loc}
                        className="location-label">
                        <input
                            type="checkbox"
                            checked={selectedLocations.includes(loc)}
                            onChange={() => handleLocationToggle(loc)}
                        />
                        {loc}
                    </label>
                ))}
            </aside>

            <div className="coffee-grid">
                {filteredCoffees.map(coffee => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </div>
        </div >
        </>
    );
}

// Make it globally available
export default Shop;