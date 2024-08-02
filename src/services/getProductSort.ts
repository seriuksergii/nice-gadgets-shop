import { Product} from '../types';
import { SortOptions } from '../types/SortOptions';

export const getProductSort = (
  products: Product[],
  sortOption: SortOptions,
): Product[] => {
  return [...products].sort((product1, product2) => {
    switch (sortOption) {
      case SortOptions.Newest:
        return product2.year- product1.year;
      case SortOptions.Alphabetically:
        return product1.name.localeCompare(product2.name);
      case SortOptions.Cheapest:
        return product1.price - product2.price;
      default:
        return 0;
    }
  });
};
