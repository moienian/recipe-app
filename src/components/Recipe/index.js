import React from "react";
import "./Recipe.scss";

export default function Recipe({ label, image }) {
  return (
    <div className="recipe">
      <h3 className="title">{label}</h3>
      <img src={image} alt={label} />
    </div>
  );
}
