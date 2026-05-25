"use client";
import useEmblaCarousel from "embla-carousel-react";
import AnimatedFeaturedCarsCard from "./AnimatedFeaturedCarsCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CarCarousel = ({ cars }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {cars.map((car) => (
            <div key={car._id} className="flex-none w-full md:w-1/2 lg:w-1/3">
              <AnimatedFeaturedCarsCard car={car} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 z-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CarCarousel;
