// src/types/index.ts

export interface AnimalImage {
  url: string;
  loading: boolean;
  error: string | null;
}

export type AnimalType = 'dog' | 'cat' | 'fox';

export interface ApiResponse {
  dog: {
    message: string;
    status: string;
  };
  cat: Array<{
    url: string;
  }>;
  fox: {
    image: string;
    link: string;
  };
}