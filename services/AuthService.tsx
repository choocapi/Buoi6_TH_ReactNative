import { BASE_URL_API } from "@/config/api";

export const login = async (email: string, password: string) => {
  const responsive = await fetch(`${BASE_URL_API}/dang-nhap`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      password: password,
    }),
  });
  const res = await responsive.json();
  return res;
};

export const register = async (email: string, password: string) => {
  const responsive = await fetch(`${BASE_URL_API}/create-account`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      password: password,
    }),
  });
  const res = await responsive.json();
  return res;
};
