import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

//svg
import PrevArrow from "../../public/landingpage/prevArrow.svg";
import NextArrow from "../../public/landingpage/nextArrow.svg";

const Carousel = ({ data }) => {
  // The range is index is the same as the range of the data array index.
  const [index, setIndex] = useState(0);

  const length = data.length;

  // length - 3, because we display 3 images on carousel.
  const prevSlide = () => {
    setIndex(index === 0 ? length - 3 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === length - 3 ? 0 : index + 1);
  };

  return (
    <div className="overflow-hidden relative h-full">
      <button
        className="absolute z-10 -left-[0.3vw] top-[25vh]"
        onClick={prevSlide}
      >
        <PrevArrow />
      </button>
      <button
        className="absolute z-10 -right-[0.3vw] top-[25vh]"
        onClick={nextSlide}
      >
        <NextArrow />
      </button>
      <ul
        className="absolute flex top-0 overflow-y-auto pt-14"
        style={{
          transform: `translateX(-${index * 30}vw)`,
          transitionDuration: "1s",
        }}
      >
        {data.map((article) => (
          <TestimonialCard
            key={article.id}
            id={article.id}
            article={article}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
