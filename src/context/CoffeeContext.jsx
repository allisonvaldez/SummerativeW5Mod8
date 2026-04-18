// Import necessary components, useState, useEffect, createContext, and react
import React, { createContext, useState, useEffect } from "react"

// Make CoffeeContext global for all components's usage in the app
export const CoffeeContext = createContext();

// Make sure CoffeeProvider wraps the app and provides the coffees and functions globally
