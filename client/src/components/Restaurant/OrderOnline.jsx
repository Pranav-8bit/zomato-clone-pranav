import React, { useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "../OrderOnline/FloatMenuBtn";
import FoodList from "../OrderOnline/FoodList";
import MenuListContainer from "../OrderOnline/MenuListContainer";

const OrderOnline = () => {
  const [menu, setMenu] = useState([
    {
      name: "Today's Special",
      items: [
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/ef6/bad6ce25e7d36c07f29c53ce4104bef6.jpg",
          name: "Cheezy-7 Pizza",
          rating: 4.5,
          price: 255,
          description:
            "An Exotic Combination Of White Mozarella, Cream, White Cheese,, Monterey Jack, Cream Orange, Colby And Orange Cheddar Cheese",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/e2a/870c930a003cef08a22d42ae5da67e2a.jpg",
          name: "Paneer Tikka Butter Masala Pizza",
          rating: 5,
          price: 255,
          description:
            "An India Speciality On A La Pinoz Pizza. Exotic Paneer Tikka, Onion, Capsicum & Red Paprika",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/269/8dc63955aa808dae4f11d9a62af39269.jpg",
          name: "Farm Villa Pizza",
          rating: 3.5,
          price: 195,
          description:
            "[Available in Jain] The Freshness Of Capsicum, Tomatoes, With The Flavour Of Paneer And Red Paprika Topped With A Korma Dip",
        },
      ],
    },
    {
      name: "Garlic Breads",
      items: [
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/141/7cdafc3b491a3490a8e3f7d20ab89141.jpg",
          name: "Cheesy Garlic Bread",
          rating: 4,
          price: "119",
          description: "",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/492/3266072efe7d56c724d3ab3877007492.jpg",
          name: "Paneer Tikka Garlic Bread",
          rating: 4,
          price: "139",
          description: "Paneer Tikka & Red Paprika",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/4ef/a719a6fbda13fbd6fa3c5626092974ef.jpg",
          name: "Supreme Garlic Bread",
          rating: 3,
          price: "129",
          description: "Sweet Corns + Onions + Jalapenos & Olives",
        },
      ],
    },
  ]);
  const [selected, setSelected] = useState("");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className="w-full flex items-start">
        <aside className="sticky top-16 hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 w-1/4 h-screen">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={onClickHandler}
              selected={selected}
              target={index}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:w-3/4 sticky overflow-auto h-screen top-16">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex  overflow-y-screen flex-col gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList key={index} {...item} target={index} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
};
export default OrderOnline;
