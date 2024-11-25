import React, { createContext, useContext } from "react";

const coffeeContext = createContext(null);

function CoffeeProvider({ children }: { children: React.ReactNode }) {
  return (
    <coffeeContext.Provider value={null}>{children}</coffeeContext.Provider>
  );
}

export default CoffeeProvider;

export function useCoffeeContext() {
  const context = useContext(coffeeContext);
  if (!context)
    throw new Error("useCoffeeContext must be used within a CoffeeProvider");

  return context;
}
