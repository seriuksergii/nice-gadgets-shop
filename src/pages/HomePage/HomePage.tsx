import './HomePage.scss';
import { useEffect, useState } from 'react';

import { Product } from '../../types';

import { getAllProducts } from '../../services';

import { SliderSwiper } from '../../components/SliderSwiper';
import { ScrollingList } from '../../components/ScrollingList';
import { ShopByCategory } from '../../components/ShopByCategory';

export const HomePage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const getNewModels = (models: Product[]) => models.filter((model) => model.year === 2022);

  const getHotPrices = (products: Product[]) =>
    products.sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price));

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
      <ShopByCategory products={allProducts} />
      <ScrollingList products={hotPrices} title={'Hot prices'} />
    </div>
  );
};
