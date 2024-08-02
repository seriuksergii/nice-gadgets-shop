import { getData } from '../utils';

import { Category, Product, ProductDetailed } from '../types';

export const getAllProducts = () => {
  return getData<Product[]>('/products.json');
};

export const getPhones = () => {
  return getData<ProductDetailed[]>('/phones.json');
};

export const getTablets = () => {
  return getData<ProductDetailed[]>('/tablets.json');
};

export const getAccessories = () => {
  return getData<ProductDetailed[]>('/accessories.json');
};

export const getProducts = (category: Category) => {
  return getAllProducts().then((data) => data.filter((product) => product.category === category));
};
