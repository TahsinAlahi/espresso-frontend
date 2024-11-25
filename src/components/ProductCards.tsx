import { BsCupHot } from "react-icons/bs";
import cupBg from "../assets/more/4.png";
import coffeeHouseBg from "../assets/more/5.png";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useCoffeeContext } from "../contexts/CoffeeContext";

function ProductCards() {
  const { allCoffee } = useCoffeeContext();

  return (
    <main className="font-raleway py-16 relative min-h-svh">
      {/* Background */}
      <img
        src={cupBg}
        className="absolute md:top-24 top-48 left-0 md:w-1/5 w-1/3 z-[-1]"
      />
      <img
        src={coffeeHouseBg}
        className="absolute bottom-6 right-0 md:w-1/4 w-1/2 z-[-1]"
      />

      <div className="text-center space-y-4">
        <h1 className="text-xl">--- Sip & Savor ---</h1>
        <h1 className="text-4xl font-rancho font-bold drop-shadow-xl text-shadow text-secondary">
          Our Popular Products
        </h1>
        <Link
          to="/add-coffee"
          className="flex items-center gap-2 hover:bg-primary-btn px-4 py-2 bg-primary-btn hover:text-gray-800 text-gray-100 font-rancho text-xl font-semibold border-2 border-black mx-auto duration-150 transition rounded-md w-fit"
        >
          <p style={{ textShadow: "#424242 2px 2px 5px" }}>Add Coffee</p>
          <BsCupHot className="text-xl" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto gap-5 mt-10">
        {allCoffee.map((coffee) => (
          <ProductCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </main>
  );
}

export default ProductCards;
