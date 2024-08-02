import { Category } from './Category';

export interface ProductDetailed {
  id: string;
  category: Category;
  itemId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  price: number;
  fullPrice: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: {
    title: string;
    text: string[];
  }[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
};
