import React from 'react';
import './AddToFavButton.scss';
import cn from 'classnames';
import { useUserActions } from '../../Contexts/useUserActions';
import { ActionTypes } from '../../Contexts/reduser';
import { ProductFavorites } from '../../types/ProductFavorites';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

interface Props {
  product: ProductFavorites;
}

export const AddToFavButton: React.FC<Props> = ({ product }) => {
  const { userAction, dispatch } = useUserActions();
  const { favorites } = userAction;
  const { itemId } = product;
  const { t } = useTranslation();

  const isFavorites = favorites.some((p) => p.itemId === itemId);

  const handleClick = () => {
    toggleFavorites();
    notify();
  };

  const notify = () => {
    if (!isFavorites) {
      toast.success(t('pop_up.message_favourites'), {
        style: {
          border: '5px solid #F447AF',
          borderRadius: '20px',
          padding: '10px',
          color: '#F447AF',
          backgroundColor: '#fff',
          fontSize: '20px',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#27AE60',
        },
      });
    } else {
      toast.error(t('pop_up.message_favourites_removed'), {
        style: {
          border: '5px solid #F447AF',
          borderRadius: '20px',
          padding: '10px',
          color: '#fff',
          backgroundColor: '#F447AF',
          fontSize: '20px',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#F447AF',
        },
      });
    }
  };

  const toggleFavorites = () => {
    if (!isFavorites) {
      dispatch({ type: ActionTypes.onAddToFavorites, payload: product });
    } else {
      dispatch({ type: ActionTypes.onDeleteFavorites, payload: itemId });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn('fav', {
        'add-to-fav': !isFavorites,
        'is-fav': isFavorites,
      })}
    ></button>
  );
};
