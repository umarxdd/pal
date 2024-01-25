import MovieSlider from "./movieSlider";
import imdb from "../assets/images/other/IMDB.svg";

const Recent = () => {
  return (
    <>
      <div className="bg-black text-white flex flex-col pt-28 pb-40 font-barlow">
        <div className="flex flex-col text-center items-center">
          <img src={imdb} alt="" className="h-4 rounded-sm mb-1" />
          <p className="font-semibold text-2xl">Recent tv-drama series</p>
          <p className="font-semibold text-2xl">Haagenrud recently completed</p>
        </div>

        <div className="">
          <MovieSlider />
        </div>
      </div>
    </>
  );
};

export default Recent;
