import React from "react";
import "./footerNavItem.css";

function FooteravItem({ name }) {
  return (
    <li>
      <ion-icon name="chevron-forward-outline"></ion-icon>
      <a href="/">{name}</a>
    </li>
  );
}

export default FooteravItem;
