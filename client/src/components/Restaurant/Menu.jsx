import React, { useState } from "react";

// components
import MenuCollection from "./MenuCollection";

const Menu = () => {
  const [menus, setMenus] = useState([
    "https://b.zmtcdn.com/data/menus/909/18438909/688f6966637cab4e6453eb75324a54da.jpg",
    "https://b.zmtcdn.com/data/menus/909/18438909/b3000782e0124171074d15adbbd3b912.jpg",
    "https://b.zmtcdn.com/data/menus/909/18438909/dc9c3bed442da7785e93019705b216be.jpg",
    "https://b.zmtcdn.com/data/menus/909/18438909/053aa54848a208dda669c19cc0898397.jpg",
  ]);

  return (
    <div className="flex flex-wrap gap-3">
      <MenuCollection menuTitle="Menu" pages={menus.length} images={menus} />
    </div>
  );
};
export default Menu;
