import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}`,
  prepareHeaders: (headers) => {
    const token = sessionStorage.getItem("newtoken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
