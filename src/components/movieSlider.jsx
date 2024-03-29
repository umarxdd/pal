// src/components/CardSlider.js
import "../App.css";
import { useState, useEffect } from "react";
import img1 from "../assets/images/other/MovieImages/img1.jpg";
import img2 from "../assets/images/other/MovieImages/img2.jpg";
import img3 from "../assets/images/other/MovieImages/img3.jpg";
import img4 from "../assets/images/other/MovieImages/img4.jpg";
import RightArrow from "../assets/images/first/RightArrowRound.svg";
import LeftArrow from "../assets/images/first/LeftArrowRound.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { image: img1, key: 1 },
  { image: img2, key: 2 },
  { image: img3, key: 3 },

  { image: img4, key: 4 },
];
//  const PrevArrow = ({onClick}) =>{
//   return (
//      <img src={LeftArrow} className="" />,
//   )
//  }
const MovieSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setIsSmall(false);
      } else {
        setIsSmall(true);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Initial setup
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: 0,
    prevArrow: <img src={LeftArrow} className="md:h-4 " />,
    nextArrow: <img src={RightArrow} className="md:h-4 " />,
    beforeChange: (current, next) => setImageIndex(next),
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //       vertical: true,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       vertical: true,
    //       verticalSwiping: true,
    //     },
    //   },
    // ],
  };

  return (
    <>
      {!isSmall && (
        <div className="mt-20 md:mx-10 mx-0 rounded-md">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div
                key={img.key}
                className={`${
                  index === imageIndex ? "slide activeSlide" : "slide"
                } rounded-md md:ml-8`}
              >
                <img
                  src={img.image}
                  alt=""
                  className="md:h-[13.3rem] h-[10rem]"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}

      {isSmall && (
        <div className="flex flex-col space-x-4 space-y-4 m-4 items-center">
          {images.map((img, index) => (
            <div key={img.key}>
              <img
                src={img.image}
                alt=""
                className="md:h-[13.3rem] h-[11rem]"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default MovieSlider;
