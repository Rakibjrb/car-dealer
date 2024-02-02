import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LuSend } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="py-20 xl:py-24 mt-24 lg:mt-32 bg-[#0A0A0A]">
      <div className="max-w-screen-xl mx-auto px-3 xl:px-0 font-raleway">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 lg:gap-0">
          <h2 className="capitalize text-4xl lg:text-5xl font-bold text-white text-center lg:text-left md:w-[80%] lg:w-[45%]">
            Do You Have <span className="text-red-600">Something</span> to sell
            Through Us?
          </h2>
          <div className="flex items-center">
            <button className="bg-red-600 py-5 px-10 rounded-md font-semibold text-white uppercase">
              Sell Your Car Today
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 xl:gap-5 mt-10">
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-white font-extrabold text-2xl uppercase">
              Moto<span className="text-red-600 font-extrabold">RX</span>
            </h2>
            <p className="text-xl text-[#AAA]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. earum
              eaque quisquam reiciendis error molestiae, laboriosam ipsa.
            </p>
          </div>
          <div className="space-y-4">
            <FooterTitle title={"Quick Links"} />
            <ul className=" flex flex-col gap-3 text-[#aaa]">
              <Link className="font-semibold hover:text-red-600 transition-colors">
                Dealer Locator
              </Link>
              <Link className="font-semibold hover:text-red-600 transition-colors">
                Service Locator
              </Link>
              <Link className="font-semibold hover:text-red-600 transition-colors">
                Pre - owned
              </Link>
              <Link className="font-semibold hover:text-red-600 transition-colors">
                Services
              </Link>
            </ul>
          </div>
          <div className="space-y-4">
            <FooterTitle title={"Research"} />
            <ul className=" flex flex-col gap-3 text-[#aaa]">
              <Link className="font-semibold hover:text-red-600 transition-colors">
                Warranty
              </Link>
              <Link className="font-semibold hover:text-red-600 transition-colors">
                Compare Models
              </Link>
              <Link className="font-semibold hover:text-red-600 transition-colors">
                Download
              </Link>
            </ul>
          </div>
          <div className="space-y-4">
            <FooterTitle title={"News Letter"} />
            <form className="relative">
              <input
                name="email"
                type="email"
                placeholder="Enter email address"
                className="w-full bg-[#474747] text-white placeholder:text-white p-2 rounded-md"
                required
              />
              <button className="absolute right-2 top-2 z-10">
                <LuSend className="text-white text-2xl" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row justify-between items-center text-white mt-10">
          <p className="text-xl text-[#aaa]">2023 All right reserved</p>
          <nav className="space-x-4 text-[#aaa]">
            <Link className="text-xl hover:text-red-600 transition-colors">
              Privacy & Policy
            </Link>
            <Link className="text-xl hover:text-red-600 transition-colors">
              Licensing
            </Link>
            <Link className="text-xl hover:text-red-600 transition-colors">
              Instructions
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterTitle = ({ title }) => {
  return <h2 className="text-white font-bold text-2xl uppercase">{title}</h2>;
};

FooterTitle.propTypes = {
  title: PropTypes.string,
};
