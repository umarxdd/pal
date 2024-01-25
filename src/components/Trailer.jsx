import "../App.css";

const Trailer = ({ videoAddr }) => {
  return (
    <>
      <div
        id="trailer"
        className="bg-black pb-20 border-b border-white border-opacity-50
      font-barlow"
      >
        <div className="sm:flex sm:flex-col sm:space-y-8 sm:mx-8 mx-3  text-white">
          <div className="text-center">
            <p className="font-semibold text-2xl">KEY MILESTONES IN MY</p>
            <p className="font-semibold text-2xl">PROFESSIONAL CAREER</p>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 space-x-4 pb-4">
            <div className="flex flex-col space-y-3 text-center max-w-[40vw] py-4">
              <h1 className=" sm:text-[45px] text-2xl">50+</h1>
              <p className="">Capturing stories with visual brilliance</p>
            </div>
            <div className="flex flex-col space-y-3 text-center max-w-[40vw] py-4">
              <h1 className=" sm:text-[45px] text-2xl">50+</h1>
              <p className="">Capturing stories with visual brilliance</p>
            </div>
            <div className="flex flex-col space-y-3 text-center max-w-[40vw] py-4">
              <h1 className=" sm:text-[45px] text-2xl">50+</h1>
              <p className="">Capturing stories with visual brilliance</p>
            </div>
            <div className="flex flex-col space-y-3 text-center max-w-[40vw] py-4">
              <h1 className=" sm:text-[45px] text-2xl">50+</h1>
              <p className="">Capturing stories with visual brilliance</p>
            </div>

            {/* <div className="text-center max-w-[40vw] py-4">
              <h1 className=" sm:text-[45px]  text-2xl">7</h1>
              <p className="">Best Cinematography Gullruten for EXIT in 2020</p>
            </div>
            <div className="text-center max-w-[40vw] py-4">
              <h1 className=" sm:text-[45px]  text-2xl">40+</h1>
              <p className="">International acclaim with 24 episodes </p>
            </div>
            <div className="text-center max-w-[40vw] py-4">
              <h1 className=" sm:text-[45px]  text-2xl">20+</h1>
              <p className="">Over 20 Years of Cinematic Expertise</p>
            </div> */}
            <div className="text-center  md:col-span-1 col-span-2 py-4">
              <h1 className=" sm:text-[45px]  text-2xl">1994</h1>
              <p className="text-sm ">
                Official Olympic Film from Lillehammer in 1994
              </p>
            </div>
          </div>

          <div className="">
            {/* <img src={img} alt="" /> */}
            <iframe
              // src="https://www.youtube.com/embed/beonR4nfWh8?si=xD87JqQzCcMucY5g"
              src={videoAddr}
              // src="https://youtu.be/ASr0n5LnWnU"
              // src="https://www.youtube.com/embed/beonR4nfWh8?si=xD87JqQzCcMucY5g"
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="sm:w-[100%]  sm:h-[40rem] h-[20rem] w-[95vw]"
            ></iframe>
            {/* <img src={playCircle} alt="" /> */}
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-3xl">Trailer</h2>
            {/* <p className="text-sm">Trailer</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trailer;
