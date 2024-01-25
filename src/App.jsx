import { useState } from "react";
import { Link } from "react-scroll";

import "./App.css";
import CardSlider from "./components/cardSlider";
import Navbar from "./components/navbar";
import Section2 from "./components/section2";
import Trailer from "./components/Trailer";
import Recent from "./components/recent";
import End from "./components/end";
// import line from "./assets/images/other/Vector6.svg";
import facebook from "./assets/images/first/facebook.svg";
import instagram from "./assets/images/first/instagram.svg";
import twitter from "./assets/images/first/twitter.svg";
import address from "./assets/images/first/RectangleBg.svg";

function App() {
  const [addr, setTheAddr] = useState(address);
  const [videoAddr, setVideoAddr] = useState(
    "https://www.youtube.com/embed/Dn7HRgVEI50?si=rSgFmtrY0oGio0aa"
  );

  const classes = {
    // backgroundImage: `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%), url('${addr}')`,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${addr}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachments: "fixed",
    backgroundPosition: "center",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  };

  return (
    <>
      <section style={classes} className="bg-black" id="home">
        <Navbar />
        <div className="font-barlow">
          <div className="flex flex-col md:gap-y-6  mt-52 w-[60vw] text-white m-6">
            <h1 className="md:text-xl sm:text-[1rem] opacity-75">
              C&nbsp;&nbsp;I&nbsp;&nbsp;N&nbsp;&nbsp;E&nbsp;&nbsp;M&nbsp;&nbsp;A&nbsp;&nbsp;T&nbsp;&nbsp;O&nbsp;&nbsp;G&nbsp;&nbsp;R&nbsp;&nbsp;A&nbsp;&nbsp;P&nbsp;&nbsp;H&nbsp;&nbsp;E&nbsp;&nbsp;R
            </h1>
            <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-extrabold text-[#F9F9FB] lg:leading-[70px] md:leading-[45px]  leading-[40px] header-h1 font-barlow">
              PÅL BUGGE
            </h1>
            <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-4xl font-extrabold text-[#F9F9FB] lg:leading-[70px] md:leading-[45px] leading-[40px] header-h1 font-barlow">
              HAAGENRUD
            </h1>
            <p className="font-light text-[#F9F9FB] font-barlow opacity-70 lg:max-w-[45vw] md:max-w-[90vw] w-[90vw]">
              Haagenrud´s career spans over nearly two decades starting out as
              camera assistant in the early nineties and enlisted as first
              assistant camera for legendary cinematographer Sven Nykvist.
            </p>
            <div className="flex">
              <button className="text-black bg-white w-36 h-10 m-2 rounded-md sm:text-[1rem] text-sm">
                <Link to="trailer" smooth duration={500}>
                  Check Portfolio
                </Link>
              </button>
              <button className="text-white bg-black w-36 h-10 m-2 rounded-md sm:text-[1rem] text-sm border-white border-2 opacity-60">
                <Link to="contactus" smooth duration={500}>
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
          <div className="icons flex flex-col space-y-4 absolute top-[70%] right-2">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <CardSlider setTheAddr={setTheAddr} setVideoAddr={setVideoAddr} />
      </section>
      <div className="bg-black h-32 w-auto"></div>
      <Section2 />
      <div className="bg-black h-32 w-auto"></div>

      <Trailer videoAddr={videoAddr} />
      <Recent />
      <End />
    </>
  );
}

export default App;
