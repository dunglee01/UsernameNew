import React, { createContext, useState } from "react";
import ListUser from "./components/ListUser";

// create context
// Provider
// Comsumer

// b1: create context
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ListUser />
    </ThemeContext.Provider>
  );
}

export default App;
