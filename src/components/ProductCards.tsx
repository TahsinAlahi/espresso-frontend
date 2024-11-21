import { BsCupHot } from "react-icons/bs";

function ProductCards() {
  return (
    <main className="font-raleway py-16">
      <div className="text-center space-y-4">
        <h1 className="text-xl">--- Sip & Savor ---</h1>
        <h1
          className="text-4xl font-rancho font-bold drop-shadow-xl"
          style={{ textShadow: "#2e2d2d 1px 2px 4px" }}
        >
          Our Popular Products
        </h1>
        <button className="flex items-center gap-2 hover:bg-primary-btn px-4 py-2 bg-primary-btn hover:text-gray-800 text-gray-100 font-rancho text-xl font-semibold border-2 border-black mx-auto duration-150 transition rounded-md ">
          <p style={{ textShadow: "#424242 2px 2px 5px" }}>Add Coffee</p>
          <BsCupHot className="text-xl" />
        </button>
      </div>
    </main>
  );
}

export default ProductCards;
