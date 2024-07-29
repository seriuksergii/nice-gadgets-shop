import './ScrollingList.scss';
import React from "react";
import cn from 'classnames';

import { Product } from '../../types';

import useScroll from "../../hooks/useScroll";

import { ProductCard } from "../ProductCard";
import { Loader } from "../Loader";

interface Props {
  title: string;
  products: Product
}

export const ScrollingList: React.FC<Props> = ({  title, products }) => {
  const {
    itemsRef,
    canScrollLeft,
    canScrollRight,
    onScrollLeft,
    onScrollRight
  } = useScroll();  

  const isLoading = products.length === 0;

  return (
    <section className='scrollingList'>
      <div className='scrollingList__top'>
        <h2 className='scrollingList__title'>{title}</h2>
        <div className='scrollingList__buttons'>
          <button
            className={cn('dirButton dirButton--left', {
              'dirButton--left-disabled': !canScrollLeft,
            })}
            name='Scroll left'
            title='Scroll left'
            onClick={onScrollLeft}
            disabled={!canScrollLeft}
          ></button>

          <button
            className={cn('dirButton dirButton--right', {
              'dirButton--right-disabled': !canScrollRight,
            })}
            name='Scroll right'
            title='Scroll right'
            onClick={onScrollRight}
            disabled={!canScrollRight}
          ></button>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className='scrollingList__items' ref={itemsRef}>
          {products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </section>
  )
};
