import React, { useState, useEffect } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import { useParams } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButton from "../components/Restaurant/InfoButton";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

// redux
import { useDispatch } from "react-redux";
import { getSpecificRestaurant } from "../redux/reducers/restaurant/restaurant.action";
import { getImage } from "../redux/reducers/image/image.action";

const RestaurantLayout = ({ children: Component, ...props }) => {
  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuisine: "",
    address: "",
    restaurantRating: 3.8,
    deliveryRating: 4.0,
  });

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      setRestaurant((prev) => ({
        ...prev,
        ...data.payload.restaurant,
      }));

      dispatch(getImage(data.payload.restaurant.photos)).then((data) => {
        setRestaurant((prev) => ({
          ...prev,
          images: data.payload.images,
        }));
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo {...restaurant} />
        <div className="my-4 flex flex-wrap gap-3 mx-auto">
          <InfoButton isActive="true">
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className="my-10 sticky bg-white top-0 pt-2 z-10">
          <Tabs />
        </div>
        {Component}
      </div>
      <CartContainer />
    </>
  );
};

export default RestaurantLayout;

//  images: [
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/chains/9/18438909/51fbbb10b71a1999349f8801cad928e4.png",
//   },
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/chains/9/18438909/3a12ece4f7c57200da8ae68d9b558f8c.jpeg",
//   },
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/chains/9/18438909/cb6128e61c828cea826e4a9c2326a239.jpg",
//   },
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/chains/9/18438909/bec9fe17638ea3116baf3314d95af15e.jpg",
//   },
//   {
//     location:
//       "https://b.zmtcdn.com/data/pictures/chains/9/18438909/8d32d4a80c9d845ee130a6acc64fe82a.jpg",
//   },
// ],
// name: "La Pino'z",
// cuisine: ["Pizza", "Pasta", "Fast Food"],
// address: "Shahibagh, Ahmedabad",
// restaurantRating: 3.8,
// deliveryRating: 4.0,
// });
