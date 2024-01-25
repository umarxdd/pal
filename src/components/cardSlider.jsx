// src/components/CardSlider.js
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import EXIT from "../assets/images/first/EXIT.jpg";
import EXIT5 from "../assets/images/first/EXIT5.jpg";

import DAG from "../assets/images/first/DAG.jpg";
import wisting from "../assets/images/first/wisting.jpg";
import beforeigners from "../assets/images/first/Beforeigners.jpg";

import RightArrow from "../assets/images/first/RightArrow.svg";
import LeftArrow from "../assets/images/first/LeftArrow.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    // exit

    image: EXIT5,
    key: 5,
    videoAddr: "https://www.youtube.com/embed/nx07abN_8IM?si=WMUBU0T2SY0ocqfP",
  },
  // wisting
  {
    image: wisting,
    key: 1,
    videoAddr: "https://www.youtube.com/embed/Dn7HRgVEI50?si=rSgFmtrY0oGio0aa",
  },
  {
    // beforeginner
    image: beforeigners,
    key: 2,
    videoAddr: "https://www.youtube.com/embed/ASr0n5LnWnU?si=CRQOkL2rtsx0DaBX",
  },
  {
    // exit

    image: EXIT,
    key: 3,
    videoAddr: "https://www.youtube.com/embed/nx07abN_8IM?si=WMUBU0T2SY0ocqfP",
  },
  // {
  //   image: img1,
  //   key: 1,
  //   videoAddr: "https://www.youtube.com/embed/Dn7HRgVEI50?si=rSgFmtrY0oGio0aa",
  // },
  {
    // DAG
    image: DAG,
    key: 4,
    videoAddr: "https://www.youtube.com/embed/Ai3FQOwCwHQ?si=_auDQKjXF4MwedUi",
  },
];

const CardSlider = ({ setTheAddr, setVideoAddr }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    prevArrow: <img src={LeftArrow} className="md:h-4 " />,
    nextArrow: <img src={RightArrow} className="md:h-4 " />,
  };

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides to show based on screen width
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 400) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
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

  const changeImg = (img) => {
    setTheAddr(img.image);
    setVideoAddr(img.videoAddr);
  };
  return (
    <>
      <div className="mt-20 mx-8 rounded-md">
        <Slider {...settings}>
          {images.map((img) => (
            <div key={img.key} className="">
              <Link
                to="trailer"
                smooth
                duration={500}
                onClick={() => {
                  changeImg(img);
                }}
              >
                <img
                  className="rounded-md px-2 h-[10rem]"
                  src={img.image}
                  alt=""
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default CardSlider;
