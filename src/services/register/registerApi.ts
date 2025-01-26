/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../redux/api/baseApi";
import { QUERY_URL } from "../URL";
import { registerAdapter } from "./register.adapter";
import { TAG_TYPES } from "./register.type";




export const registerApi = baseApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.register] })
  .injectEndpoints({
    endpoints: (builder) => ({
      register: builder.mutation<any, any>({
        query: (body) => ({ url: QUERY_URL.register(), method: "POST", body }),
        transformResponse: registerAdapter,
      }),

      registerMedia: builder.mutation<any, any>({
        query: (body) => ({ url: QUERY_URL.registerMedia(), method: "POST", body }),
        transformResponse: registerAdapter,
      }),
    }),
  });

export const { useRegisterMutation, useRegisterMediaMutation } = registerApi;