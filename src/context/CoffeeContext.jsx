// Import necessary components, useState, useEffect, createContext, and react
import React, { createContext, useState, useEffect } from "react";

// Make sure CoffeeProvider wraps the app and provides the coffees and functions 
function CoffeeProvider({ children }) {
    // Store all coffees gathered from the backend and initialize their states
    const [coffees, setCoffees] = useState([]);

    // Get all coffee from backend on component initial mount
    useEffect(() => {
        fetch("http://localhost:4000/coffees")
            .then(response => response.json())
            .then(data => setCoffees(data))
            .catch(error => console.error("Error fetching coffees: ", error));
    }, []);

    // Create a function to POST new coffees to the backend and gather its state
    function addCoffee(newCoffee) {
        fetch("http://localhost:4000/coffees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCoffee)
        })
            .then(response => response.json())
            .then(data => setCoffees(data))
            .catch(error => console.error("Error fetching coffees: ", error));
    }

    // Create a function to PATCH coffees already in the backend and update its state
    function updateCoffee(id, updates) {
        fetch("http://localhost:4000/coffees/${id}", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updates)
        })
            .then(response => response.json())
            .then(updated => setCoffees(coffees.map(c => c.id === updated.id ? updated : c)))
            .catch(error => console.error("Error updating coffees: ", error));
    }

    // Provide coffees, addCoffee, and updateCoffee to children
    return (
        <CoffeeContext.Provider value={{ coffees, addCoffee, updateCoffee }}>
            {children}
        </CoffeeContext.Provider>
    );

}

// Make it globally available
export default CoffeeProvider;
export const CoffeeContext = createContext();