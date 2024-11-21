import { FaEye, FaPen } from "react-icons/fa";
import coffeeCup from "../assets/1.png";
import { MdDelete } from "react-icons/md";

function ProductCard() {
  return (
    <div className="grid grid-cols-6 bg-card bg-opacity-70 p-2 rounded-md">
      <div className="col-span-2 w-full">
        <img
          src={coffeeCup}
          alt=""
          className="h-full object-cover object-center"
        />
      </div>
      <div className="col-span-3 font-raleway my-auto space-y-2">
        <p>
          <span className="font-semibold">Name:</span>
          item.name
        </p>
        <p>
          <span className="font-semibold">Chef:</span>
          item.chef
        </p>
        <p>
          <span className="font-semibold">Price:</span>
          item.price taka
        </p>
      </div>
      <div className="col-span-1 text-lg my-auto mx-auto text-center space-y-4 text-white">
        <div className="p-2 bg-show-btn rounded-md cursor-pointer">
          <FaEye />
        </div>
        <div className="p-2 bg-edit-btn rounded-md cursor-pointer">
          <FaPen />
        </div>
        <div className="p-2 bg-delete-btn rounded-md cursor-pointer">
          <MdDelete />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
