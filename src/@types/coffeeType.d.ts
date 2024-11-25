interface CoffeeType {
  _id: number;
  name: string;
  chef: string;
  supplier: string;
  taste: string;
  category: string;
  details: string;
  image: string;
  price: number | string;
}

interface CoffeeContextType {
  allCoffee: CoffeeType[];
}
