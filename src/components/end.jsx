import logo from "../assets/images/first/logoBlack.svg";
import facebook from "../assets/images/first/facebookBlack.svg";
import instagram from "../assets/images/first/instagramBlack.svg";
import twitter from "../assets/images/first/twitterBlack.svg";

const End = () => {
  return (
    <>
      <div
        className="border-b border-black border-opacity-30 bg-white pt-28 pb-16 pl-6 pr-2 font-barlow"
        id="contactus"
      >
        <div className="grid md:grid-cols-4">
          <div className="flex flex-col space-y-4  text-sm md:items-start items-center  md:col-span-1 col-span-2 pt-4">
            <img src={logo} alt="" className="h-12" />
            <p className="md:text-start text-center">
              Haagenrud´s career spans over nearly two decades starting out as
              camera assistant in the early nineties and enlisted as first
              assistant camera for legendary cinematographer Sven Nykvist.
            </p>
            <div className="flex space-x-4 opacity-50">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>

          <div className="flex flex-col mt-4 pl-4 md:space-y-6 space-y-3 w-[20vh]">
            <h1 className="font-semibold">Products</h1>
            <p>Services </p>
            <p>Pricing</p>
            <p>Integrations</p>
            <p>Features</p>
            <p>Software</p>
          </div>
          <div className="flex flex-col mt-4 items-start md:space-y-6 space-y-3 ">
            <h1 className="font-semibold">Map</h1>
            <p>Home</p>
            <p>About Us</p>
            <p>Tech</p>
            <p>Campaign</p>
          </div>
          <div className="flex flex-col mt-4 pl-4 md:space-y-6 space-y-3 ">
            <h1 className="font-semibold">Contact us</h1>
            <p>Latest News</p>
            <p>My Account</p>
            <p>Refund Policy</p>
            <p>FAQs</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-2 pl-6">
        <div className="flex justify-between md:flex-row flex-col items-center text-sm">
          <h1>All rights reserved by Haagenrud</h1>
          <h1>All rights reserved</h1>
        </div>
      </div>
    </>
  );
};

export default End;
