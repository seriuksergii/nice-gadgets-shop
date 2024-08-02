import React from "react";
import { BreadCrumbs } from "../../components/BreadCrumbs";

import './ProductPage.scss'

interface Props {
  title: string;
  count: number;
}

export const ProductPageTop: React.FC<Props> = ({title, count}) => {
  return (
    <div className="pages-top">
        <div className='pages-top__back'>
          <BreadCrumbs />
          </div>
            <h1 className='pages-top__title'>{title}</h1>
       <p className='pages-top__count'>{count} models</p>
       </div>
  );
};
