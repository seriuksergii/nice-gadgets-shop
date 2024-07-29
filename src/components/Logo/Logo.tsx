import React from "react";
import "./Logo.scss";

interface Props {
  src: string;
  className: string;
}

export const Logo: React.FC<Props> = ({ src, className }) => {
  return (
    <a className={`"logo" ${className}`}  href="#">
          <img
            className="logo__img"
            src={src}
            alt="Logo Phone Catalog"
          />
        </a>
  );
};
