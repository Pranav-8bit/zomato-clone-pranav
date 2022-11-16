import React, { useState } from "react";

//components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";
import DeliveryCarouselBrand from "./DeliveryCarouselBrand";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "13sf5a321f5aw35d",
      isPro: true,
      isOff: true,
      name: "La Pino'z Pizza",
      restaurantReviewValue: "3.7",
      cuisine: ["Pizza", "Italian", "Pasta", "FastFood"],
      averageCost: "150",
    },
    {
      _id: "13sf5a321f5aks35d",
      isPro: true,
      isOff: true,
      name: "La Pino'z Pizza",
      restaurantReviewValue: "3.7",
      cuisine: ["Pizza", "Italian", "Pasta", "FastFood"],
      averageCost: "150",
    },
    {
      _id: "13sf5a321f5ssw35d",
      isPro: true,
      isOff: true,
      name: "La Pino'z Pizza",
      restaurantReviewValue: "3.7",
      cuisine: ["Pizza", "Italian", "Pasta", "FastFood"],
      averageCost: "150",
    },
  ]);
  return (
    <>
      <DeliveryCarousel />
      <DeliveryCarouselBrand />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in Ahmedabad.
      </h1>
      <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
