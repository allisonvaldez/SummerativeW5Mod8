// Import useState, heroImg, components, and style components
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoffeProvider } from "./context/CoffeeContext";
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import AdminPortal from "./pages/AdminPortal"
import './App.css'

// Create a function for the main App
function App() {
  // Utilize CoffeeProvider to deploy global states to pages

  return (
    <>
      <CoffeProvider>
        <BrowserRouter>
          <Routes>
            {/* Home page */}
            <Route path="/" element={<Home />} />
            {/* Shop page */}
            <Route path="/shop" element={<Shop />} />
            {/* AdminPortal page */}
            <Route path="/admin" element={<AdminPortal />} />
          </Routes>
        </BrowserRouter>
      </CoffeProvider>
    </>
  )
}

// Make it globally available
export default App
