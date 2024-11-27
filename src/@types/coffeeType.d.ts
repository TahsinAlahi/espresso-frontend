interface CoffeeType {
  _id: string;
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
  handleAddCoffee: (coffee: NewCoffeeType) => Promise<FuncReturnType>;
  handleDeleteCoffee: (id: string) => Promise<FuncReturnType>;
}

interface NewCoffeeType {
  name: string;
  chef: string;
  supplier: string;
  taste: string;
  category: string;
  details: string;
  image: string;
  price: string;
}

interface FuncReturnType {
  status: "success" | "error";
  message: string;
}
