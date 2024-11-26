import React, { createContext, useContext, useEffect, useState } from "react";

const coffeeContext = createContext<CoffeeContextType | null>(null);

function CoffeeProvider({ children }: { children: React.ReactNode }) {
  const [allCoffee, setAllCoffee] = useState<CoffeeType[]>([]);

  useEffect(() => {
    async function getAllCoffees() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/coffees`);
        const data = await res.json();

        setAllCoffee(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAllCoffees();
  }, []);

  async function handleAddCoffee(
    coffee: NewCoffeeType
  ): Promise<FuncReturnType> {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/coffees`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(coffee),
      });

      if (res.ok) {
        const data = await res.json();
        setAllCoffee((prev) => [...prev, data]);
        return { status: "success", message: "Coffee added successfully" };
      } else {
        const error = await res.json();
        return {
          status: "error",
          message: error.message || "Something went wrong",
        };
      }
    } catch (error: any) {
      console.error(error);
      return { status: "error", message: "Something went wrong" };
    }
  }

  const value = { allCoffee, handleAddCoffee };

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
