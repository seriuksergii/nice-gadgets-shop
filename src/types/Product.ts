export interface Product {
  map(arg0: (product: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  id: number;
  category: string;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}
