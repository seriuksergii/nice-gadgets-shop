import React from "react";
import "./AddToFavButton.scss";
import cn from "classnames";

interface Props {
  isFavorites: boolean;
  handler: () => void;
}

export const AddToFavButton: React.FC<Props> = ({ isFavorites, handler }) => {
  
  return (
    <button onClick={handler} className={cn("fav", {
      "add-to-fav": !isFavorites,
      "is-fav": isFavorites
    })}>
    </button>
  );
};
