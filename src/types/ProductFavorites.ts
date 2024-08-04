import { Product } from './Product';

export type ProductFavorites = Omit<Product, 'id' | 'year' | 'color'>;
