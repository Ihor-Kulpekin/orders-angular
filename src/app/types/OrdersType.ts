export interface Orders {
  id: number;
  docNum: string;
  docDate: string;
  description: string;
}

export interface OrderPositions {
  id: number;
  name: string;
  price: number;
  qty: number;
  sum: number;
}
