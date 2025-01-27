/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../redux/api/baseApi";
import { QUERY_URL } from "../URL";
import { profileAdapter } from "./profile.adapter";
import { TAG_TYPES } from "./profile.type";





export const profileApi = baseApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.profile] })
  .injectEndpoints({
    endpoints: (builder) => ({
      profile: builder.query<any, any>({
        query: (id) => ({ url: QUERY_URL.userProfile(id), method: "GET" }),
        transformResponse: profileAdapter,
      }),
    }),
  });

export const { useProfileQuery } = profileApi;