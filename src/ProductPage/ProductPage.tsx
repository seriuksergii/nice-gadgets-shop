import React, { useState, useEffect } from 'react';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import { Product } from '../types';
import { getPhones } from '../services';
import { Loader } from '../components/Loader';
import { Container } from '../components/Container';
import { colorHexMap } from '../types/colors';



export const ProductPage: React.FC = () => {
  const { category, itemId } = useParams<{ category: string; itemId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [modelColor, setModelColor] = useState<string>('');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getPhones();
        const foundProduct = products.find((p) => p.category === category && p.id === itemId);
        if (foundProduct) {
          setProduct(foundProduct);
          setModelColor(foundProduct.color);
          setSelectedCapacity(foundProduct.capacity);
          setImages(foundProduct.images);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, itemId]);

  const handleColorClick = (color: string) => {
    setModelColor(color);
    if (product) {
      const updatedImages = product.images.map((image) => image.replace(product.color, color));
      setImages(updatedImages);
    }
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
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

  const getTitle = () => {
    if (!product) return '';
    const baseTitle = product.name.split(' ').slice(0, -3).join(' ');
    const currentCapacity = selectedCapacity || product.capacity;
    return `${baseTitle} ${currentCapacity} ${modelColor.charAt(0).toUpperCase() + modelColor.slice(1)}`;
  };

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
      <div className="product-page">
        <h1 className="product-page__title">{getTitle()}</h1>
        <div className="product-page__main-content">
          <div className="product-page__images" {...swipeHandlers}>
            <img
              src={`/${images[activeImageIndex]}`}
              alt={`${product.name} primary`}
              className="product-page__images__primary"
            />
            <div className="product-page__images__thumbnails">
              {images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={`/${imgSrc}`}
                  alt={`${product.name} ${index}`}
                  className={`product-page__images__thumbnails__thumbnail ${
                    activeImageIndex === index
                      ? 'product-page__images__thumbnails__thumbnail--active'
                      : ''
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="product-page__details">
            <div className="product-page__colors">
              <h2 className="product-page__colors__title">Available Colors</h2>
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
              <h2 className="product-page__capacity__title">Select Capacity</h2>
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
          </div>
        </div>
      </div>
    </Container>
  );
};
