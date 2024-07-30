import React, { useState, useEffect } from 'react';
import './ProductPage.scss';
import { useParams } from 'react-router-dom';

import { Product } from '../../types';
import { getAllProducts } from '../../services';
import { Loader } from '../../components/Loader';
import { Container } from '../../components/Container';

const colors = ['#FCDBC1', '#5F7170', '#4C4C4C', '#F0F0F0'];
const capacities = ['64 GB', '256 GB', '512 GB'];

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
        const products = await getAllProducts();
        const foundProduct = products.find((p) => p.category === category && p.itemId === itemId);
        if (foundProduct) {
          setProduct(foundProduct);
          setModelColor(foundProduct.color);
          setSelectedCapacity(foundProduct.capacity);
          setImages(generateImageUrls(foundProduct.image));
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, itemId]);

  const generateImageUrls = (baseImage: string) => {
    const baseFileName = baseImage.substring(0, baseImage.lastIndexOf('00.webp'));
    const imageUrls = Array.from({ length: 4 }, (_, i) => `${baseFileName}0${i}.webp`);
    return imageUrls;
  };

  const handleColorClick = (color: string) => {
    setModelColor(color);
    if (product) {
      const updatedBaseImage = product.image.replace(product.color, color);
      setImages(generateImageUrls(updatedBaseImage));
    }
  };

  const handleCapacityClick = (capacity: string) => {
    setSelectedCapacity(capacity);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveImageIndex(index);
  };

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Container>
      <div className="product-page">
        <h1 className="product-page__title">{product.name}</h1>
        <div className="product-page__main-content">
          <div className="product-page__images">
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
                    activeImageIndex === index ? 'product-page__images__thumbnails__thumbnail--active' : ''
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
          </div>
          <div className="product-page__details">
            <div className="color-and-capacity">
              <h2 className="color-and-capacity__title">Available Colors</h2>
              <div className="color-and-capacity__color-palette">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`color-and-capacity__color-circle ${
                      modelColor === color ? 'color-and-capacity__color-circle--active' : ''
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorClick(color)}
                  ></div>
                ))}
              </div>
              <h2 className="color-and-capacity__capacity-title">Select Capacity</h2>
              <div className="color-and-capacity__capacity-blocks">
                {capacities.map((capacity) => (
                  <div
                    key={capacity}
                    className={`color-and-capacity__capacity-block ${
                      selectedCapacity === capacity ? 'color-and-capacity__capacity-block--active' : ''
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
