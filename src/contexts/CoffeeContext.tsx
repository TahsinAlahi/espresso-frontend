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
      return {
        status: "error",
        message: error.message || "Something went wrong",
      };
    }
  }

  async function handleEditCoffee(
    updatedCoffee: NewCoffeeType,
    oldCoffee: CoffeeType,
    id: string
  ): Promise<FuncReturnType> {
    try {
      const updatedKeys = Object.keys(updatedCoffee).reduce((acc, key) => {
        const value = updatedCoffee[key as keyof NewCoffeeType];
        if (value !== oldCoffee[key as keyof CoffeeType]) {
          acc[key as keyof NewCoffeeType] = value;
        }
        return acc;
      }, {} as Partial<NewCoffeeType>);

      if (!Object.keys(updatedKeys).length)
        throw new Error("No keys to update");

      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/coffees/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedKeys),
        }
      );

      if (!res.ok) throw new Error(await res.json());

      setAllCoffee((prev) =>
        prev.map((coffee) =>
          coffee._id === id ? { ...coffee, ...updatedCoffee } : coffee
        )
      );

      return { status: "success", message: "Coffee updated successfully" };
    } catch (error: any) {
      console.log(error);
      return {
        status: "error",
        message: error.message || "Something went wrong",
      };
    }
  }

  async function handleDeleteCoffee(id: string): Promise<FuncReturnType> {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/coffees/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error);
      }

      setAllCoffee((prev) => prev.filter((coffee) => coffee._id !== id));
      return { status: "success", message: "Coffee deleted successfully" };
    } catch (error: any) {
      console.log(error);
      alert(error.message);
      return {
        status: "error",
        message: error.message || "Something went wrong",
      };
    }
  }

  const value = {
    allCoffee,
    handleAddCoffee,
    handleEditCoffee,
    handleDeleteCoffee,
  };

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
