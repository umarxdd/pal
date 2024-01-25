import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/first/logo.svg";
import vector1 from "../assets/images/first/menuLogo/Vector1.svg";

import Navlinks from "./navlinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        style={{
          color: "white",
          position: "fixed",
          background: isVisible ? "rgba(80, 80, 80, 0.45)" : "transparent",
          // top: 0,
          width: "100%",
          zIndex: 1000,
          transition: "top 0.3s ease-in-out",
          top: isVisible ? 0 : "-100px",
        }}
        className="flex flex-wrap justify-between items-center  absolute w-full text-white mb-[10rem] border-b-[0.5px] border-white border-opacity-50
      font-barlow"
        // className=""
      >
        <div className="flex items-center space-x-4">
          <img src={logo} alt="" className=" h-16 mb-2 p-2" />
        </div>

        <div
          className="hidden justify-center md:flex 
        items-center space-x-8 text-white "
        >
          <Navlinks />
        </div>
        <button
          className="flex flex-col justify-between pr-4 p-1 md:hidden"
          onClick={toggleNavbar}
        >
          <img src={vector1} className="m-1"></img>
          <img src={vector1} className="m-1"></img>
          <img src={vector1} className="m-1"></img>
        </button>
        {isOpen && (
          <div className="flex basis-full flex-col items-center">
            <Link
              to="home"
              smooth
              duration={500}
              className=" opacity-80 hover:opacity-100"
            >
              Home
            </Link>
            <Link
              to="aboutus"
              smooth
              duration={500}
              className="opacity-80  hover:opacity-100  "
            >
              About Us
            </Link>
            <Link
              to="trailer"
              smooth
              duration={500}
              className="opacity-80  hover:opacity-100"
            >
              Our Services
            </Link>
            <Link
              to="trailer"
              smooth
              duration={500}
              className=" hover:opacity-100   opacity-80 "
            >
              Our Work
            </Link>
            {/* <div className=" opacity-80 border-opacity-0 hover:opacity-100 "> */}
            <div className=" opacity-80 hover:opacity-100 px-8">
              <Link to="contactus" smooth duration={500}>
                Contact Us
              </Link>
            </div>
            {/* </div> */}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

///////////////////////////////////////////////////
