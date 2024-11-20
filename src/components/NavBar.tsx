import navBg from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";

function NavBar() {
  return (
    <nav
      className="w-full py-3 bg-cover bg-center"
      style={{ backgroundImage: `url(${navBg})` }}
      aria-label="navbar"
    >
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" className="w-12" />
        <h1 className="font-rancho font-semibold text-3xl md:text-4xl text-white">
          Espresso Emporium
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
