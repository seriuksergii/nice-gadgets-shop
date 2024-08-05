import { Category } from '.';

interface ProductDescription {
  title: string;
  text: string[];
}

export interface ProductDetailed {
  id: string;
  category: Category;
  itemId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  fullPrice: number;
  price: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: ProductDescription[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}