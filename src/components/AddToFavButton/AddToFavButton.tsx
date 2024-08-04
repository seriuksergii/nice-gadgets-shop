import React from "react";
import "./AddToFavButton.scss";
import cn from "classnames";
import { Product } from "../../types";
import { useUserActions } from "../../Contexts/useUserActions";
import { KEY_FAVORITES } from "../../services/localStorageHelper";
import { ActionTypes } from "../../Contexts/reduser";

interface Props {
  product: Product;
}

export const AddToFavButton: React.FC<Props> = ({ product }) => {

  const { userAction, dispatch } = useUserActions();
  const { favorites} = userAction;

  const isFavorites = favorites.some((p) => p.id === product.id);

  const toggleFavorites = () => {
    console.log(!isFavorites);
    !isFavorites
      ? dispatch({ type: ActionTypes.onAddToFavorites, payload: product })
      : dispatch({ type: ActionTypes.onDelete, payload: { id: product.id, key: KEY_FAVORITES } });
  };
  
  return (
    <button onClick={toggleFavorites} className={cn("fav", {
      "add-to-fav": !isFavorites,
      "is-fav": isFavorites
    })}>
    </button>
  );
};
