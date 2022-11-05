import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// components
import PictureCarouselCard from "../PictureCarouselCard";

const DiningCarousel = () => {
  const [dining] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg",
      title: "Great Buffets",
      places: "7 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/39b0427da9d6363255240e6f0fef17b6_1665830257.jpg",
      title: "Picturesque Cafes",
      places: "8 Places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/454e33b19950986d4c7c34bc70f99ada_1612856400.jpg",
      title: "Luxury At Its Best",
      places: "10 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/d9b5ecbb9c8dba95e478216c65eb5ddd_1665830075.jpg",
      title: "Gujarati Thali",
      places: "8 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/3dfd3a9082b04d661891abd003eef3eb_1666068378.jpg",
      title: "Stunning Rooftops",
      places: "7 places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/4c8e5746cdee9c932ebc99ae999520cf_1665829821.jpg",
      title: "Romantic Dining",
      places: "8 places",
    },
  ]);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
    modules: [Navigation],
    className: "diningSwiper",
    navigation: true,
  };

  return (
    <div className="w-full">
      <Swiper {...slideConfig}>
        {dining.map((item, index) => (
          <SwiperSlide key={index}>
            <PictureCarouselCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiningCarousel;
