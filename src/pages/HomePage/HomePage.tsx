import './HomePage.scss';
import { useEffect, useState } from 'react';

import { Product } from '../../types';

import { getAllProducts } from '../../services';

import { Container } from '../../components/Container';
import { SliderSwiper } from '../../components/SliderSwiper';
import { ScrollingList } from '../../components/ScrollingList';

export const HomePage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const getNewModels = (models: Product[]) => {
    return models.filter((model) => model.year === 2022);
  };

  const getHotPrices = (products: Product[]) => {
    return products.sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price));
  };

  useEffect(() => {
    getAllProducts().then((products) => setAllProducts(products));
  }, []);

  const newModels = getNewModels(allProducts);
  const hotPrices = getHotPrices(allProducts);

  return (
    <div className="homepage">
      <h1 className="homepage__title">Welcome to Nice Gadgets store!</h1>
      <section className="sliderswiper-wrapper">
        <SliderSwiper />
      </section>
      <ScrollingList products={newModels} title={'Brand new models'} />
      <ScrollingList products={hotPrices} title={'Hot prices'} />
    </div>
  );
};
