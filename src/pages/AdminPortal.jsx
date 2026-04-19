// Import useId, useContext, useFormInput, components, and styles
import { useId, useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";
import { useFormInput } from "../hooks/useFormInput";
import NavBar from "../components/NavBar";
import "./AdminPortal.css"

// Declare a function for AdminPortal
function AdminPortal() {
    // Set addCoffee to CoffeeContext
    const { addCoffee } = useContext(CoffeeContext);

    // Generate special ids for labels and inputs
    const nameId = useId();
    const descId = useId();
    const originId = useId();
    const priceId = useId();

    // Generate custom hooks to track form's input values initially set them to empty
    const name = useFormInput("");
    const description = useFormInput("");
    const origin = useFormInput("");
    const price = useFormInput("");

    // Declare a function that prevent default of the form and reset it to empty when submitting coffee
    function handleSubmit(e) {
        e.preventDefault();
        addCoffee({
            name: name.value,
            description: description.value,
            origin: origin.value,
            price: parseFloat(price.value),
            location: "Location 1"
        });
        name.reset();
        description.reset();
        origin.reset();
        price.reset();
    }

    return (
        <>
            <NavBar />
            <div className="admin-page">
                <div className="admin-form-container">
                    <h2>Add New Coffee</h2>
                    <form onSubmit={handleSubmit} className="admin-form">
                        {/* Use useId for accessibility */}
                        <label htmlFor={nameId}>Coffee Name</label>
                        <input id={nameId} type="text" placeholder="Type here" value={name.value} onChange={name.onChange} required />

                        <label htmlFor={descId}>Description</label>
                        <input id={descId} type="text" placeholder="Type here" value={description.value} onChange={description.onChange} required />

                        <label htmlFor={originId}>Origin</label>
                        <input id={originId} type="text" placeholder="Type here" value={origin.value} onChange={origin.onChange} required />

                        <label htmlFor={priceId}>Price</label>
                        <input id={priceId} type="number" step="0.01" placeholder="Type here" value={price.value} onChange={price.onChange} required />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );

}

// Make it globally available
export default AdminPortal