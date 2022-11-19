import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import BrandCarouselCard from "./BrandCarouselCard";

const DeliveryCarouselBrand = () => {
  const topBrands = [
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165036.png",
      title: "McDonald's",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/1b51d0bca33e149302056def63fb5fa3_1536924805.png",
      title: "La Pino'z Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/c4e5d79a73034d7615dd1f973f05a02a_1642259612.png",
      title: "Subway",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1583218253.png?output-format=webp",
      title: "Dominoes",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187636.png?output-format=webp",
      title: "Burger King",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1633120213.png?output-format=webp",
      title: "Pizza Hut",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/a252dd9115fddbc9beb5616924888cf2_1505797825.png?output-format=webp",
      title: "Momoman",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/64f933acfd78553d4e7e723defdfcf76_1568093266.png?output-format=webp",
      title: "Shakti-The Sandwhich Shop",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655799947.png",
      title: "Fasos",
    },
  ];

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      280: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };
  return (
    <>
      <h1 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold mb-5">
        Top Brand for you
      </h1>
      {/* <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {topBrands.map((brand, index) => (
          <BrandCarouselCard key={index} {...brand} />
        ))}
      </div> */}
      <div className=" lg:block ">
        <Swiper {...slideConfig}>
          {topBrands.map((brand, index) => (
            <SwiperSlide key={index}>
              <BrandCarouselCard {...brand} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default DeliveryCarouselBrand;
