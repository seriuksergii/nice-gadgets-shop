import React from "react";
import "./AddToFavButton.scss";

export const AddToFavButton: React.FC = () => {
  return (
    <button className="add-to-fav">
      <img className="icon" src="/src/images/AddToFavButton.svg" alt="#" />
    </button>
  );
};
