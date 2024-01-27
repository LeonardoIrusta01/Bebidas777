export interface DrinkProps {
  name: string;
  price: number;
  photo: string;
  description: string;
  stock: number;
  is_Active: boolean;
}

export class DrinkModel implements DrinkProps {
  name: string;
  price: number;
  photo: string;
  description: string;
  stock: number;
  is_Active: boolean;
}
