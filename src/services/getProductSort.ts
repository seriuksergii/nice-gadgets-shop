import { Product} from '../types';
import { SortOptions } from '../types/SortOptions';

export const getProductSort = (
  products: Product[],
  sortOption: keyof typeof SortOptions,
): Product[] => {
  return [...products].sort((product1, product2) => {
    switch (sortOption) {
      case 'age':
        return product2.year- product1.year;
      case 'title':
        return product1.name.localeCompare(product2.name);
      case 'price':
        return product1.price - product2.price;
      default:
        return 0;
    }
  });
};
