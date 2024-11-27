import { useEffect, useState } from "react";

function useSingleCoffee(id: string) {
  const [coffee, setCoffee] = useState<CoffeeType>({} as CoffeeType);

  useEffect(() => {
    async function getCoffee() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/coffees/${id}`
        );
        const coffee = await res.json();
        setCoffee(coffee);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }

    getCoffee();
  }, []);

  return coffee;
}

export default useSingleCoffee;
