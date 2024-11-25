import React, { createContext, useContext, useEffect, useState } from "react";

const coffeeContext = createContext<CoffeeContextType | null>(null);

function CoffeeProvider({ children }: { children: React.ReactNode }) {
  const [allCoffee, setAllCoffee] = useState<CoffeeType[]>([]);

  useEffect(() => {
    async function getAllCoffees() {
      try {
        const res = await fetch("http://localhost:5000/api/coffees");
        const data = await res.json();

        setAllCoffee(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllCoffees();
  }, []);

  const value = { allCoffee };

  return (
    <coffeeContext.Provider value={value}>{children}</coffeeContext.Provider>
  );
}

export default CoffeeProvider;

export function useCoffeeContext() {
  const context = useContext(coffeeContext);
  if (!context)
    throw new Error("useCoffeeContext must be used within a CoffeeProvider");

  return context;
}
