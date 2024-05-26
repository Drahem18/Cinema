import React from "react";
import "./Button.css";

function Button({ name, color = "white", icon, bgColor = "#ff3700", hide }) {
  return (
    <div
      className={`main-button ${hide && "hide-element hide-some"}`}
      style={{ color: color, backgroundColor: bgColor }}
    >
      {icon}
      {name}
    </div>
  );
}

export default Button;
