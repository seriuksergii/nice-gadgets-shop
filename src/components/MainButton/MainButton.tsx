import React from "react";
import './MainButton.scss';

interface Props {
  text: string;
  handler: () => void;
}

export const MainButton: React.FC<Props> = ({ text, handler }) => {
  return (
    <button className="button" onClick={handler}>
      {text}
    </button>
  );
};
