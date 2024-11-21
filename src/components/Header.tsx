import headerBg from "../assets/more/3.png";

function Header() {
  return (
    <header
      className="min-h-[calc(100svh-91.6px)] w-full bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="text-white lg:w-1/3 md:w-1/2 ml-auto space-y-5 md:mr-28 px-12">
        <h1 className="text-3xl md:text-5xl font-rancho">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="font-raleway">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className=" hover:bg-primary-btn px-4 py-2 bg-primary-btn text-gray-800 font-rancho text-xl font-semibold">
          Learn More{" "}
        </button>
      </div>
    </header>
  );
}

export default Header;
