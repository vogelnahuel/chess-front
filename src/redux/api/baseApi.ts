import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "./config";
import { getLocalStorage } from "../../utils/localStorage";

// Definimos la API con su configuración base, sin ningún endpoint.
// Los endpoints serán definidos luego en archivos separados.

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl || 'http://localhost:33001/api/v1/chess-gateway',
    prepareHeaders: async (headers) => {
      const token = getLocalStorage("token");

      if (!token) return;
      headers.set("authorization", `Bearer ${token}`);
    },
  }),
  endpoints: () => ({}),
});