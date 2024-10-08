import React, { useState, useEffect } from 'react';
import './ProductPage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import { Category, ProductDetailed, Product } from '../../types';
import { getProductsDetaied, getAllProducts } from '../../services';
import { Loader } from '../Loader';
import { Container } from '../Container';
import { colorHexMap } from '../../types/colors';
import { TechSpecs } from '../TechSpecs';
import { ItemCardAboutSection } from '../ItemCardAboutSection';
import { AddToCartButton } from '../AddToCartButton';
import { AddToFavButton } from '../AddToFavButton';
import { useTranslation } from 'react-i18next';
import { BreadCrumbs } from '../BreadCrumbs';
import { ScrollingList } from '../ScrollingList';
import { Back } from '../Back';
import { Fade } from 'react-awesome-reveal';

export const ProductPage: React.FC = () => {
  const { t } = useTranslation();
  const { category, itemId } = useParams<{ category: Category; itemId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetailed | null>(null);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [modelColor, setModelColor] = useState<string>('');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    if (category && itemId) {
      getProductsDetaied(category)
        .then((products) => {
          const foundProduct = products.find((p) => p.id === itemId);
          if (foundProduct) {
            setProduct(foundProduct);
            setModelColor(foundProduct.color);
            setSelectedCapacity(foundProduct.capacity);
            setImages(foundProduct.images);
          }
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [category, itemId]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getAllProducts().then((products) => setAllProducts(products));
  }, []);

  const filteredProducts = allProducts.filter((product) => product.category === category);

  const handleColorClick = (color: string) => {
    setModelColor(color);
    navigate(`/${category}/${product?.itemId}-${selectedCapacity.toLowerCase()}-${color}`, { replace: true });
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
    navigate(`/${category}/${product?.itemId}-${capacity.toLowerCase()}-${modelColor}`, { replace: true });
  };

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleSwipeLeft = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleSwipeRight = () => {
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (loading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <Fade>
        <BreadCrumbs />
        <Back />
        <div className="product-page">
          <h1 className="product-page__title">{product.name}</h1>

          <div className="product-page__image" {...swipeHandlers}>
            <img
              src={`/${images[activeImageIndex]}`}
              alt={`${product.name} primary`}
              className="product-page__image__primary"
            />
          </div>

          <div className="product-page__image__thumbnails">
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={`/${imgSrc}`}
                alt={`${product.name} ${index}`}
                className={`product-page__image__thumbnails__thumbnail ${
                  activeImageIndex === index
                    ? 'product-page__image__thumbnails__thumbnail--active'
                    : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>

          <div className="product-page__details">
            <div className="product-page__details">
              <div className="product-page__colors">
                <h2 className="product-page__colors__title">
                  {t('product_page.available_colors')}
                </h2>
                <div className="product-page__colors__palette">
                  {product.colorsAvailable.map((color) => (
                    <div
                      key={color}
                      className={`product-page__colors__circle ${
                        modelColor === color ? 'product-page__colors__circle--active' : ''
                      }`}
                      style={{ backgroundColor: colorHexMap[color] }}
                      onClick={() => handleColorClick(color)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="product-page__capacity">
                <h2 className="product-page__capacity__title">
                  {t('product_page.select_capacity')}
                </h2>
                <div className="product-page__capacity__blocks">
                  {product.capacityAvailable.map((capacity) => (
                    <div
                      key={capacity}
                      className={`product-page__capacity__block ${
                        selectedCapacity === capacity ? 'product-page__capacity__block--active' : ''
                      }`}
                      role="button"
                      onClick={() => handleCapacityClick(capacity)}
                    >
                      {capacity}
                    </div>
                  ))}
                </div>
              </div>
              <div className="product-page__prices">
                <span className="product-page__prices-discount">${product.price}</span>
                <span className="product-page__prices-full">${product.fullPrice}</span>
              </div>
              <div className="product-page__buttons">
                <AddToCartButton
                  product={{ ...product, image: images[activeImageIndex], itemId: product.id }}
                />
                <AddToFavButton
                  product={{ ...product, image: images[activeImageIndex], itemId: product.id }}
                />
              </div>
              <div className="product-page__tech-specs">
                <TechSpecs
                  screen={product.screen}
                  resolution={product.resolution}
                  processor={product.processor}
                  ram={product.ram}
                  fullSpecs={false}
                />
              </div>
            </div>
          </div>

          <div className="product-page__about">
            <ItemCardAboutSection description={product.description} />
          </div>

          <div className="product-page__tech-specs-full">
            <TechSpecs
              screen={product.screen}
              resolution={product.resolution}
              processor={product.processor}
              ram={product.ram}
              camera={product.camera}
              zoom={product.zoom}
              cell={product.cell}
              fullSpecs={true}
            />
          </div>

          <div className="recommended_products">
            {!loading && <ScrollingList title={t('sliders.also')} products={filteredProducts} />}
          </div>
        </div>
      </Fade>
    </Container>
  );
};
