interface CoffeeType {
  id: number;
  name: string;
  chef: string;
  supplier: string;
  taste: string;
  category: string;
  details: string;
  image: string;
}

interface CoffeeContextType {
  allCoffee: CoffeeType[];
}
