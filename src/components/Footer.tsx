import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import footerBg from "../assets/more/13.jpg";
import logo from "../assets/more/logo1.png";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-no-repeat pt-20 pb-8 md:px-0 px-4 w-full text-primary font-raleway"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="flex items-center justify-center flex-col-reverse md:flex-row md:max-w-screen-lg mx-auto md:gap-9 gap-20 md:px-10 lg:px-0">
        <div className="text-left flex-1 space-y-6">
          <div className="space-y-5">
            <img src={logo} alt="logo" className="w-14" />
            <h1 className="font-rancho font-semibold text-3xl text-secondary text-shadow">
              Espresso Emporium
            </h1>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
          </div>
          <div className="flex items-center justify-start gap-4 text-secondary text-3xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <div className="space-y-8">
            <h2 className="font-semibold text-3xl text-secondary text-shadow font-rancho">
              Get in Touch
            </h2>
            <ul className="space-y-2">
              <li className="space-x-5">
                <FaPhoneAlt className="inline" />
                <span>+88 01533 333 333</span>
              </li>
              <li className="space-x-5">
                <IoMdMail className="inline" />
                <span>info@gmail.com</span>
              </li>
              <li className="space-x-5">
                <FaLocationDot className="inline" />
                <span>72, Wall street, King Road, Dhaka</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex-1 space-y-6">
          <h2 className="font-semibold text-3xl text-secondary text-shadow font-rancho">
            Contact with Us
          </h2>
          <form className="space-y-4 flex items-start flex-col md:w-3/4 ">
            <input
              type="text"
              className="w-full px-3 py-2 rounded-md shadow-md"
            />
            <input
              type="email"
              className="w-full px-3 py-2 rounded-md shadow-md"
            />
            <textarea
              className="w-full px-3 py-2 rounded-md shadow-md"
              rows={4}
            ></textarea>
          </form>
          <button className="text-secondary font-rancho text-xl px-3 py-1 border-2 border-secondary rounded-3xl hover:bg-secondary hover:text-white transition-all duration-100">
            Send Message
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
