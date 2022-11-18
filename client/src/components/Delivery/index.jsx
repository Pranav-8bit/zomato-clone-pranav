import React, { useState, useEffect } from "react";

//components
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";
import DeliveryCarouselBrand from "./DeliveryCarouselBrand";

// redux
import { useSelector } from "react-redux";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.restaurants
  );

  useEffect(() => {
    reduxState && setRestaurantList(reduxState);
  }, [reduxState]);

  return (
    <>
      <DeliveryCarousel />
      <DeliveryCarouselBrand />
      <h1 className="text-2xl  font-bold mt-8 mb-8 md:mt-12 md:text-3xl md:font-semibold">
        Delivery Restaurants in Ahmedabad.
      </h1>
      <div className="grid gap-0 mt-2 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;

// example
// {
//   _id: "13sf5a321f5aw35d",
//   isPro: true,
//   isOff: true,
//   name: "La Pino'z Pizza",
//   restaurantReviewValue: "3.7",
//   cuisine: ["Pizza", "Italian", "Pasta", "FastFood"],
//   averageCost: "150",
// },
// {
//   _id: "13sf5a321f5aks35d",
//   isPro: true,
//   isOff: true,
//   name: "La Pino'z Pizza",
//   restaurantReviewValue: "3.7",
//   cuisine: ["Pizza", "Italian", "Pasta", "FastFood"],
//   averageCost: "150",
// },
// {
//   _id: "13sf5a321f5ssw35d",
//   isPro: true,
//   isOff: true,
//   name: "La Pino'z Pizza",
//   restaurantReviewValue: "3.7",
//   cuisine: ["Pizza", "Italian", "Pasta", "FastFood"],
//   averageCost: "150",
// },
