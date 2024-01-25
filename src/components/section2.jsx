import img from "../assets/images/other/section2/Man.jpeg";

import line from "../assets/images/other/section2/Vector9.svg";

const Section2 = () => {
  return (
    <>
      <div
        className="bg-white py-40 text-black justify-between font-barlow "
        id="aboutus"
      >
        <div className="grid md:grid-cols-2 md:ml-8 ml-4 grid-cols-1">
          <div className="flex flex-col lg:space-y-4 lg:py-8 py-0 lg:mr-20 mr-8 md:items-start items:center">
            <h1
              className="lg:text-6xl lg:leading-[60px] md:text-4xl text-3xl sm:text-xl
            header-h1 font-semibold md:text-start text-center"
            >
              FOCUSING IN RECENT YEARS ON TV-DRAMA SERIES HAAGENRUD
            </h1>
            <p className="pb-4 md:text-start text-center lg:text-[1rem] text-[0.85rem]">
              Haagenrud recently finished directing photography for the third
              season of the hit Nordic TV drama series EXIT, featuring a
              star-studded cast and sold to 30 countries with high ratings. He
              also worked on "Wisting 2 and 3," "Beforeigners 2," the Netflix
              Original "Lillyhammer 3," and "Swedish Dicks" with Peter Stormare.
              Additionally, Haagenrud shot four seasons of the acclaimed series
              DAG. He won an Emmy for the 1994 Lillehammer Olympics film and a
              Gullruten award for EXIT. Haagenrud co-founded Moviebird Norway, a
              leading equipment rental company.
            </p>

            <div className="flex flex-col space-y-2 md:items-start items-center mb-4 md:text-[1.3rem] text-[1rem] lg:mt-4">
              <p className="">Recipient of Emmy and Gullruten Awards</p>

              <img src={line} className="w-[14rem] h-2" alt="" />

              {/* <p className="md:text-start text-center"> */}
              <p className="">Over 20 Years of Cinematic Excellence</p>

              <img src={line} className="w-[14rem] h-2" alt="" />
            </div>

            <div className="md:flex hidden space-x-2 ">
              <button className="text-white bg-black w-36 h-10 rounded-md">
                <a href="#">Check Portfolio</a>
              </button>
              <button className=" text-black bg-white w-36 h-10 rounded-md border-black border opacity-60">
                <a href="#">Contact Us</a>
              </button>
            </div>
          </div>

          <div className="rounded md:min-w-[90vh] max-h-[115vh]">
            <img src={img} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
