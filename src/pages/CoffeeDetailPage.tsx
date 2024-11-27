import { Link, useParams } from "react-router-dom";
import bg from "../assets/more/11.png";
import defaultCoffee from "../assets/default-coffee-cup.png";
import useSingleCoffee from "../hooks/useSingleCoffee";

function CoffeeDetailPage() {
  const { id } = useParams();
  const coffeeData = useSingleCoffee(id!);

  return (
    <main
      className="py-12 w-full min-h-[calc(100svh-91.6px)] flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="md:max-w-screen-lg mx-auto font-raleway px-3 md:px-6 lg:px-0 w-full flex flex-col items-center">
        <Link
          to="/"
          className="px-4 py-2 bg-primary-btn hover:text-gray-800 text-gray-100 font-rancho text-xl font-semibold self-start"
        >
          &larr; Go Back Home
        </Link>
        <div className="bg-card mt-10 md:py-8 py-4 md:px-5 px-3 rounded-md flex-1 grid md:grid-cols-5 w-3/4 gap-10 md:gap-0">
          <div className="md:col-span-2 flex items-center justify-center rounded-lg md:mx-auto max-h-56 bg-red-500">
            <img
              src={coffeeData?.image}
              alt={coffeeData?.name}
              onError={(e) => (e.currentTarget.src = defaultCoffee)}
              className="object-cover object-center h-full"
            />
          </div>
          <div className="md:col-span-3 h-full flex items-center justify-center md:w-4/5  md:ml-auto">
            <div className="space-y-1">
              <h1 className="text-4xl font-rancho text-shadow text-primary mb-4">
                {coffeeData?.name}
              </h1>
              <p>
                <span className="font-semibold">Name:</span> {coffeeData?.name}
              </p>
              <p>
                <span className="font-semibold">Chef:</span> {coffeeData?.chef}
              </p>
              <p>
                <span className="font-semibold">Supplier:</span>{" "}
                {coffeeData?.supplier}
              </p>
              <p>
                <span className="font-semibold">Taste:</span>{" "}
                {coffeeData?.taste}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {coffeeData?.category}
              </p>
              <p>
                <span className="font-semibold">Details:</span>{" "}
                {coffeeData?.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CoffeeDetailPage;
