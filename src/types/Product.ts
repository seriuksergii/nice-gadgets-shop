export interface Product {
  id: number;
  category: string;
  itemId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  price: number;
  fullPrice: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  image: string;
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
  year: number;
  cell: string[];
}
