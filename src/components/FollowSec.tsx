import bg1 from "../assets/cups/Rectangle 9.png";
import bg2 from "../assets/cups/Rectangle 10.png";
import bg3 from "../assets/cups/Rectangle 11.png";
import bg4 from "../assets/cups/Rectangle 12.png";
import bg5 from "../assets/cups/Rectangle 13.png";
import bg6 from "../assets/cups/Rectangle 14.png";
import bg7 from "../assets/cups/Rectangle 15.png";
import bg8 from "../assets/cups/Rectangle 16.png";

const bgArr = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];

function FollowSec() {
  return (
    <section className="w-full py-10 font-raleway">
      <div className="text-center space-y-4">
        <h1 className="text-xl"> ---Follow Us Now--- </h1>
        <h1
          className="text-4xl font-rancho font-bold drop-shadow-xl"
          style={{ textShadow: "#2e2d2d 1px 2px 4px" }}
        >
          Our Popular Products
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full md:max-w-screen-lg px-4 mx-auto gap-3 mt-12">
        {bgArr.map((bg, index) => (
          <img
            key={index}
            src={bg}
            alt="Coffee Cup"
            className="w-full h-full object-cover object-center"
          />
        ))}
      </div>
    </section>
  );
}

export default FollowSec;
