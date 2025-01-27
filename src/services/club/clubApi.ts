/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../redux/api/baseApi";
import { QUERY_URL } from "../URL";
import { clubAdapter } from "./club.adapter";
import { TAG_TYPES } from "./club.type";





export const clubApi = baseApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.club] })
  .injectEndpoints({
    endpoints: (builder) => ({
        clubs: builder.query<any, void>({
            query: () => ({ url: QUERY_URL.clubs(), method: "GET" }),
            transformResponse: clubAdapter,
          }),

    }),
  });

export const { useClubsQuery } = clubApi;