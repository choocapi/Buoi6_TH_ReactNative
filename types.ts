export interface Book {
  id: number;
  bookName: string;
  bookCover: any; // Image source type
  rating: number;
  language: string;
  pageNo: number;
  author: string;
  genre: string[];
  readed: string;
  description: string;
  backgroundColor: string;
  navTintColor: string;
  completion: string;
  lastRead: string;
}

export interface Category {
  id: number;
  categoryName: string;
  books: Book[];
}

export interface Profile {
  username: string;
  point: number;
}
