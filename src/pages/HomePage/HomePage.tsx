import './HomePage.scss';
import { useEffect, useState } from 'react';

import { Product } from '../../types';

import { getAllProducts } from '../../services';

import { Container } from '../../components/Container';
import { SliderSwiper } from '../../components/SliderSwiper';
import { ScrollingList } from '../../components/ScrollingList';
import { ShopByCategory } from '../../components/ShopByCategory';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

export const HomePage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const { t } = useTranslation();

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
     <Container>
        <div className="homepage">
           <Fade direction='up' triggerOnce={true}>
              <h1 className="homepage__title">{t('welcome')}</h1>
              </Fade>
        <section className="sliderswiper-wrapper">
        <Fade direction='up' triggerOnce={true}>
          <SliderSwiper />
           </Fade>
        </section>
        <ScrollingList products={newModels} title={t('sliders.new')} />
        <ShopByCategory products={allProducts} />
        <ScrollingList products={hotPrices} title={t('sliders.hot')} />
           </div>
    </Container>
  );
};
