import { Link } from "react-scroll";

const Navlinks = () => {
  return (
    <>
      {/* <div className=""> */}
      <Link
        to="home"
        smooth
        duration={500}
        className="py-[1.85rem] opacity-70 border-opacity-0 hover:opacity-100 border-b-[1px] border-white hover:border-opacity-100"
      >
        Home
      </Link>
      <Link
        to="aboutus"
        smooth
        duration={500}
        className="opacity-70  py-[1.85rem] border-opacity-0 hover:opacity-100 border-b-[1px] border-white hover:border-opacity-100"
      >
        About Us
      </Link>
      <Link
        to="trailer"
        smooth
        duration={500}
        className="opacity-70 hover:opacity-100 py-[1.85rem] border-b-[1px] border-opacity-0 border-white hover:border-opacity-100"
      >
        Our Services
      </Link>
      <Link
        to="trailer"
        smooth
        duration={500}
        className=" hover:opacity-100 py-[1.85rem] opacity-70 border-opacity-0 border-b-[1px] border-white hover:border-opacity-100"
      >
        Our Work
      </Link>
      <Link
        to="contactus"
        smooth
        duration={900}
        className="py-[1.3rem] opacity-70 border-opacity-0 hover:opacity-100 border-b-[0.5px] border-white hover:border-opacity-100"
      >
        <div className="border-white border-[0.5px] p-2 rounded opacity-80 hover:opacity-100 px-8 mr-1">
          Contact Us
        </div>
      </Link>

      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Navlinks;
