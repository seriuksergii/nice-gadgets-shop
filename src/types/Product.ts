export interface Product {
  id: string;
  category: string;
  namespaceId: string;
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
  year: number;
}
