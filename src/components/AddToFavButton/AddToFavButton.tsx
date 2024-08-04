import React from "react";
import "./AddToFavButton.scss";
import cn from "classnames";
import { useUserActions } from "../../Contexts/useUserActions";
import { ActionTypes } from "../../Contexts/reduser";
import { ProductFavorites } from "../../types/ProductFavorites";

interface Props {
  product: ProductFavorites;
}

export const AddToFavButton: React.FC<Props> = ({ product }) => {

  const { userAction, dispatch } = useUserActions();
  const { favorites } = userAction;
  const { itemId } = product;

  const isFavorites = favorites.some((p) => p.itemId === itemId);

  const toggleFavorites = () => {
    !isFavorites
      ? dispatch({ type: ActionTypes.onAddToFavorites, payload: product })
      : dispatch({ type: ActionTypes.onDeleteFavorites, payload:  itemId});
  };
  
  return (
    <button onClick={toggleFavorites} className={cn("fav", {
      "add-to-fav": !isFavorites,
      "is-fav": isFavorites
    })}>
    </button>
  );
};
