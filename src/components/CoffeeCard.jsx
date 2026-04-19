// Import useContext, useState, CoffeeContext, and styling from CoffeeCard.css 
import { useContext, useState } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
import "./CoffeeCard.css"

// Create a function for CoffeeCard
function CoffeeCard({ coffee }) {
    // Globally gather updateCoffee to get price
    const { updateCoffee } = useContext(CoffeeContext);

    // Set state of editing price to false
    const [editing, setEditing] = useState(false);

    // Set state of the price to what user provides
    const [newPrice, setNewPrice] = useState(coffee.price);

    // Create a function to update the price in the backend set the status of editing back to false
    function handlePriceUpdate() {
        updateCoffee(coffee.id, { price: parseFloat(newPrice) });
        setEditing(false);
    }

    return (
        <div className="coffee-card">
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
            <p>Origin: {coffee.origin}</p>

            {/* Provide a Toggle to display the price or editing it */}
            {editing ? (
                <div>
                    <input
                        type="number"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        step="0.01" />
                    <button onClick={handlePriceUpdate}>Save</button>
                </div>
            ) : (
                <p onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>${coffee.price}</p>
            )}
        </div>
    );
}

// Make it globally available
export default CoffeeCard;