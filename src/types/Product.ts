export interface Product {
  id: number;
  category: string;
  namespaceId: string;
  itemId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  price: number;
  fullPrice: number;
  year: number;
  image: string;
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
}
