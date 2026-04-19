export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  category: string;
  details?: {
    features: string[];
    steps: string[];
  };
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface NoteArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  author: string;
}
