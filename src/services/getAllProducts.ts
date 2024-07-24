import { getData } from '../utils';

import { Product, ProductDetailed } from '../types';

export const getAllProducts = () => {
  return getData<Product[]>("/products.json");
}

export const getPhones = () => {
  return getData<ProductDetailed[]>("/phones.json");
}

export const getTablets = () => {
  return getData<ProductDetailed[]>("/tablets.json");
}

export const getAccessories = () => {
  return getData<ProductDetailed[]>("/accessories.json");
}
