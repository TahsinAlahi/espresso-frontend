import { FaEye, FaPen } from "react-icons/fa";
import defaultCup from "../assets/default-coffee-cup.png";
import { MdDelete } from "react-icons/md";
import { useCoffeeContext } from "../contexts/CoffeeContext";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

function ProductCard({ coffee }: { coffee: CoffeeType }) {
  const { handleDeleteCoffee } = useCoffeeContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onDelete() {
    handleDeleteCoffee(coffee._id);
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="grid lg:grid-cols-6 py-3 bg-card bg-opacity-70 p-2 rounded-md gap-3">
        <div className="lg:col-span-2 w-full flex items-center justify-center">
          <img
            src={coffee.image || defaultCup}
            alt={coffee.name}
            onError={(e) => (e.currentTarget.src = defaultCup)}
            className="h-44 object-cover object-center"
          />
        </div>
        <div className="lg:col-span-3 font-raleway my-auto space-y-2 text-center lg:text-left">
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
        <div className="lg:col-span-1 flex items-center justify-around text-lg mt-4 gap-3 lg:flex-col my-auto mx-auto text-center text-white">
          <Link
            to={`/coffee/${coffee._id}`}
            className="p-2 bg-show-btn rounded-md cursor-pointer block"
          >
            <FaEye />
          </Link>
          <Link
            to={`/edit-coffee/${coffee._id}`}
            className="p-2 bg-edit-btn rounded-md cursor-pointer"
          >
            <FaPen />
          </Link>
          <div
            className="p-2 bg-delete-btn rounded-md cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <MdDelete />
          </div>
        </div>
      </div>
      {isModalOpen && <Modal onDelete={onDelete} />}
    </>
  );
}

export default ProductCard;
