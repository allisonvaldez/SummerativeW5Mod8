// Import useState
import { useState } from "react";

// Create a function and set its initialValue as empty
function useFormInput(initialValue = "") {
    // Set initial states to initialValue
    const [value, setValue] = useState(initialValue);

    // Update the values based on user's action
    function handleChange(e) {
        setValue(e.target.value);
    }

    // Make sure to reset the variable back to its initial state
    function reset() {
        setValue(initialValue);
    }

    // Return value, change hander, and perform reset so components can utilize
    return { value, onChange: handleChange, reset };
}

// Make it globally available
export default useFormInput;