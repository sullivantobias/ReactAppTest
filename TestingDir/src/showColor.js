import React, { Component } from "react";
import "./divColor.css";

const showColor = ({ onClick, el, color1, color2 }) => (
  <div class="areaCentered">
    <input
      type="button"
      onClick={() => showedColor(color1)}
      value="Show RED Color"
    />
    <input
      type="button"
      onClick={() => showedColor(color2)}
      value="Show BLUE Color"
    />

    <div id="divColor" />
  </div>
);

let showedColor = color => {
  let divColor = document.querySelector("#divColor");
  divColor.style.height = 200 + "px";
  divColor.style.width = 300 + "px";
  divColor.style.margin = "auto";

  color === "red"
    ? (divColor.style.color = "black")
    : (divColor.style.color = "white");

  divColor.innerHTML = "You displayed " + color;

  divColor.classList.remove("red", "blue");
  divColor.classList.add(color);
};

showColor.defaultProps = {
  color1: "red",
  color2: "blue"
};

export default showColor;
