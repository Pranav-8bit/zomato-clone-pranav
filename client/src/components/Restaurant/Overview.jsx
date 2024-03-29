import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// components
import MenuCollection from "./MenuCollection";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import ReviewCard from "../Reviews/ReviewCard";
import MapView from "./MapView";

// redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getReview } from "../../redux/reducers/review/review.action";
import { getImage } from "../../redux/reducers/image/image.action";

const Overview = () => {
  const [restaurant, setRestaurant] = useState({ cuisine: [] });
  const [menuImages, setMenuImages] = useState([]);
  const [reviews, setReviews] = useState([]);

  const { id } = useParams;
  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    if (reduxState) {
      setRestaurant(reduxState);
    }
  }, [reduxState]);

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        setMenuImages(images);
      });

      dispatch(getReview(reduxState?._id)).then((data) => {
        console.log(data.payload);
        setReviews(data.payload.reviews);
      });
    }
  }, [reduxState]);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
    modules: [Navigation],
    className: "diningSwiper",
    navigation: true,
  };

  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <div className="flex flex-col gap-5 md:flex-row relative">
      <div className="w-full md:w-8/12">
        <h2 className="font-semibold text-lg md:text-xl my-4">
          About this place
        </h2>
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-medium">Menu</h4>
          <Link to={`/restaurant/${id}/menu`}>
            <span className="flex items-center gap-1 text-zomato-400">
              See all menu <IoMdArrowDropright />
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 my-4">
          <MenuCollection
            menuTitle="Menu"
            pages={menuImages.length}
            images={menuImages}
          />
        </div>

        <h4 className="text-lg font-medium my-4">Cuisines</h4>
        <div className="flex flex-wrap gap-2">
          {restaurant?.cuisine.map((cuisineName, index) => (
            <span
              key={index}
              className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full"
            >
              {cuisineName}
            </span>
          ))}
        </div>

        <div className="my-4">
          <h4 className="text-lg font-medium">Average Cost</h4>
          <h6>₹{restaurant.averageCost} for one order (approx.)</h6>
          <small className="text-gray-500">
            Exclusive of applicable taxes and charges, if any.
          </small>
        </div>

        <div className="flex flex-col-reverse">
          <div className="my-4">
            <h4 className="text-lg font-medium">{restaurant.name} Reviews</h4>
            <ReactStars
              count={5}
              onChange={(newRating) => console.log(newRating)}
              size={24}
              activeColor="#ffd700"
            />
            {reviews.map((review, index) => (
              <ReviewCard {...review} key={index} />
            ))}
          </div>

          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Swiper {...slideConfig}>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/1/19708611/922e7bd7c25b6a3a2678d5b47a483cf2_featured_v2.jpg"
                    title="La Milano Pizzeria"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/1/18603021/ff9b52642f4e6f0350d1c5692c55822a_featured_v2.jpg"
                    title="Ovenstory Pizza"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <MenuSimilarRestaurantCard
                    image="https://b.zmtcdn.com/data/pictures/chains/7/113537/6e4ca646abeddbf9d9bbc5e471ebad3d_featured_v2.jpg"
                    title="Puffizza"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="my-4 w-full md:hidden flex flex-col gap-4">
            <MapView
              title="La Pino'z"
              phno="+917485954444"
              mapLocation={getLatLong("23.0566364,72.5968928")}
              address="ghevar circle, Shahibag, Ahmedabad"
            />
          </div>
        </div>
      </div>
      <aside
        style={{ height: "fit-content" }}
        className="hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white p-3 shadow-md flex-col gap-4"
      >
        <MapView
          title="La Pino'z"
          phno="+917485954444"
          mapLocation={getLatLong("23.0566364,72.5968928")}
          latAndLong={"23.0566364,72.5968928"}
          address="ghevar circle, Shahibag, Ahmedabad"
        />
      </aside>
    </div>
  );
};

export default Overview;
