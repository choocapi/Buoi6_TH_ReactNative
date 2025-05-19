import { BASE_URL_API } from "@/config/api";
import { Book, Category } from "@/types";

export const getBooks = async (): Promise<Book[]> => {
  const response = await fetch(`${BASE_URL_API}/danh-sach-books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.success) {
    return data.data;
  }
  return [];
};

export const getBookById = async (id: string): Promise<Book> => {
  const response = await fetch(`${BASE_URL_API}/detail_books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id_books: id }),
  });

  const res = await response.json();

  if (res.success) {
    return res.data;
  }
  return {} as Book;
};
export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL_API}/danh-sach-categories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.success) {
    return data.data;
  }
  return [];
};
