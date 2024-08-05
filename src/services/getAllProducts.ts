import { getData } from '../utils';

import { Category, Product, ProductDetailed } from '../types';

export const getAllProducts = () => {
  return getData<Product[]>('/products.json');
};

export const getProductsDetaied= (category: Category) => {
  return getData<ProductDetailed[]>(`/${category}.json`);
};

export const getProducts = (category: Category) => {
  return getAllProducts().then((data) => data.filter((product) => product.category === category));
};

