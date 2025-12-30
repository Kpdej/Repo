export interface Shoe {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  category: 'Running' | 'Casual' | 'Basketball' | 'Formal';
  image: string;
  colors: string[];
  sizes: number[];
}

export interface CartItem extends Shoe {
  selectedSize: number;
  selectedColor: string;
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}
