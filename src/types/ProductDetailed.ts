import { Category } from '.';
import { Product } from './Product';

export interface ProductDetailed extends Product {
  category: Category;  // if Category type differs from string
}
