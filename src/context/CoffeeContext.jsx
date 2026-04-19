// Import necessary components, useState, useEffect, createContext, and react
import React, { createContext, useState, useEffect } from "react";

// Create context object first so CoffeeProvider can reference it
export const CoffeeContext = createContext();

// Make sure CoffeeProvider wraps the app and provides coffees and functions globally
export function CoffeeProvider({ children }) {
    // Store all coffees gathered from the backend and initialize their states
    const [coffees, setCoffees] = useState([]);

    // Get all coffees from backend on component initial mount
    useEffect(() => {
        fetch("http://localhost:4000/coffees")
            .then(response => response.json())
            .then(data => setCoffees(data))
            .catch(error => console.error("Error fetching coffees: ", error));
    }, []);

    // Create a function to POST new coffees to the backend and add to state
    function addCoffee(newCoffee) {
        fetch("http://localhost:4000/coffees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newCoffee)
        })
            .then(response => response.json())
            .then(data => setCoffees([...coffees, data]))
            .catch(error => console.error("Error adding coffee: ", error));
    }

    // Create a function to PATCH coffees already in the backend and update state
    function updateCoffee(id, updates) {
        fetch(`http://localhost:4000/coffees/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updates)
        })
            .then(response => response.json())
            .then(updated => setCoffees(coffees.map(c => c.id === updated.id ? updated : c)))
            .catch(error => console.error("Error updating coffee: ", error));
    }

    // Provide coffees, addCoffee, and updateCoffee to all children
    return (
        <CoffeeContext.Provider value={{ coffees, addCoffee, updateCoffee }}>
            {children}
        </CoffeeContext.Provider>
    );
}