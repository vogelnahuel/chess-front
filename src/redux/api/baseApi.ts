import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "./config";
import { getTokenFromLocalStorage } from "../../utils/localStorage";

// Definimos la API con su configuración base, sin ningún endpoint.
// Los endpoints serán definidos luego en archivos separados.

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
    prepareHeaders: async (headers) => {
      const token = getTokenFromLocalStorage();

      if (!token) return;
      headers.set("authorization", `Bearer ${token}`);
    },
  }),
  endpoints: () => ({}),
});