import React from 'react';
import './AddToCartButton.scss';
import cn from 'classnames';
interface Props {
  text: string;
  handler: () => void;
  disabled: boolean;
}

export const AddToCartButton: React.FC<Props> = ({ text, handler, disabled }) => {
  return (
    <button
      className={cn('button', {
        "button--disabled": disabled,
      })}
      onClick={handler}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
