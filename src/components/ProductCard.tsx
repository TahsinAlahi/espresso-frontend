import { FaEye, FaPen } from "react-icons/fa";
import defaultCup from "../assets/default-coffee-cup.png";
import { MdDelete } from "react-icons/md";
import { useCoffeeContext } from "../contexts/CoffeeContext";
import { Link } from "react-router-dom";

function ProductCard({ coffee }: { coffee: CoffeeType }) {
  const { handleDeleteCoffee } = useCoffeeContext();

  function onDelete() {
    handleDeleteCoffee(coffee._id);
  }

  return (
    <div className="grid grid-cols-6 bg-card bg-opacity-70 p-2 rounded-md">
      <div className="col-span-2 w-full h-44 bg-red-500 flex items-center justify-center">
        <img
          src={coffee.image || defaultCup}
          alt={coffee.name}
          onError={(e) => (e.currentTarget.src = defaultCup)}
          className="h-full object-cover object-center"
        />
      </div>
      <div className="col-span-3 font-raleway my-auto space-y-2">
        <p>
          <span className="font-semibold">Name: </span>
          {coffee.name}
        </p>
        <p>
          <span className="font-semibold">Chef: </span>
          {coffee.chef}
        </p>
        <p>
          <span className="font-semibold">Price: </span>
          {coffee.price ? `${coffee.price} taka` : "Free"}
        </p>
      </div>
      <div className="col-span-1 text-lg my-auto mx-auto text-center space-y-4 text-white">
        <Link
          to={`/coffee/${coffee._id}`}
          className="p-2 bg-show-btn rounded-md cursor-pointer block"
        >
          <FaEye />
        </Link>
        <div className="p-2 bg-edit-btn rounded-md cursor-pointer">
          <FaPen />
        </div>
        <div
          className="p-2 bg-delete-btn rounded-md cursor-pointer"
          onClick={onDelete}
        >
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
