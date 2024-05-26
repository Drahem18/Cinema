import React from "react";
import "./navListItem.css";

function NavListItem({ nav, navOnClick }) {
  return (
    <li className="">
      <a
        className={nav.active ? "active" : ""}
        href={nav.link}
        onClick={() => navOnClick(nav.id)}
      >
        {nav.name}{" "}
      </a>
    </li>
  );
}

export default NavListItem;
