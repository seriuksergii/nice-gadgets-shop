import { Category } from '.';
import { Product } from './Product';

export interface ProductDetailed extends Product {
  namespaceId: string;
  capacityAvailable: string[];
  colorsAvailable: string[];
  images: string[];
  description: {
    title: string;
    text: string[];
  }[];
  resolution: string;
  processor: string;
  camera: string;
  zoom: string;
  cell: string[];
  category: Category;  // if Category type differs from string
}
