import { useEffect, useState } from "react";

function useSingleCoffee(id: string) {
  const [coffee, setCoffee] = useState<CoffeeType | null>(null);

  useEffect(() => {
    if (!id) return;

    async function getCoffee() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/coffees/${id}`
        );

        if (!res.ok) throw new Error(await res.json());

        const coffee = await res.json();
        setCoffee(coffee);
      } catch (error) {
        console.log(error);
      }
    }

    getCoffee();
  }, []);

  return coffee;
}

export default useSingleCoffee;
