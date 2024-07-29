import React from "react";
import "./Logo.scss";

interface Props {
  src: string;
}

export const Logo: React.FC<Props> = ({ src }) => {
  return (
    <a className="logo"  href="#">
          <img
            className="logo__img"
            src={src}
            alt="Logo Phone Catalog"
          />
        </a>
  );
};
