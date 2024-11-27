import { FormEvent, useRef } from "react";
import bg from "../assets/more/11.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSingleCoffee from "../hooks/useSingleCoffee";
import { useCoffeeContext } from "../contexts/CoffeeContext";

const inputFieldArr = [
  { title: "Name", placeholder: "Enter coffee name" },
  { title: "Chef", placeholder: "Enter coffee chef" },
  { title: "Supplier", placeholder: "Enter coffee supplier" },
  { title: "Taste", placeholder: "Enter coffee taste" },
  { title: "Category", placeholder: "Enter coffee category" },
  { title: "Details", placeholder: "Enter coffee details" },
  { title: "Price", placeholder: "Enter coffee price" },
  { title: "Image", placeholder: "Enter coffee image" },
];

function EditCoffeePage() {
  const navigate = useNavigate();
  const { handleEditCoffee } = useCoffeeContext();
  const formRef = useRef<HTMLFormElement>(null);
  const { id } = useParams();

  const coffee = useSingleCoffee(id!);

  function getDefaultValue(key: string) {
    if (!coffee) return;

    return coffee[key as keyof CoffeeType];
  }

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formRef.current === null) return;
    const formData = new FormData(formRef.current as HTMLFormElement);
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as NewCoffeeType;

    const res = await handleEditCoffee(data, coffee!, id!);
    if (res.status === "success") navigate("/");
  }

  return (
    <main
      className="py-16 w-full min-h-[calc(100svh-91.6px)] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="md:max-w-screen-lg mx-auto font-raleway px-3 md:px-6 lg:px-0 w-full">
        <Link
          to="/"
          className="px-4 py-2 bg-primary-btn hover:text-gray-800 text-gray-100 font-rancho text-xl font-semibold"
        >
          &larr; Go Back Home
        </Link>
        <div className="bg-card w-full mt-12 py-14 space-y-8 md:px-0 px-3 rounded-md">
          <h1 className="text-tertiary text-4xl font-rancho text-shadow text-center">
            Update Existing Coffee Details
          </h1>
          <p className="text-primary max-w-xl text-center mx-auto">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            className="lg:w-3/4 md:w-5/6 mx-auto grid grid-cols-1 md:grid-cols-2 w-full gap-4 text-primary"
            ref={formRef}
            onSubmit={handleFormSubmit}
          >
            {inputFieldArr.map((inputField, index) => (
              <div className="w-full space-y-2" key={index}>
                <label className="text-xl">{inputField.title}</label>
                <input
                  type="text"
                  className="w-full py-2 px-3 rounded-md outline-none text-lg"
                  placeholder={inputField.placeholder}
                  name={inputField.title.toLowerCase()}
                  defaultValue={getDefaultValue(inputField.title.toLowerCase())}
                />
              </div>
            ))}

            <button className="px-4 py-2 mt-3 bg-primary-btn hover:text-gray-800 text-gray-100 font-rancho text-xl font-semibold md:col-span-2 border-secondary border-2 duration-150 transition rounded-sm">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default EditCoffeePage;
