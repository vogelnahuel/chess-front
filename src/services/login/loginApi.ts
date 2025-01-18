import { QUERY_URL } from "../URL";
import { loginAdapter } from "./login.adapter";
import { TAG_TYPES } from "./login.type";



export const loginApi = baseApi
  .enhanceEndpoints({ addTagTypes: [TAG_TYPES.login] })
  .injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation<any, LoginValues>({
        query: (body) => ({ url: QUERY_URL.login(), method: "POST", body }),
        transformResponse: loginAdapter,
      }),
    }),
  });

export const { useLoginMutation } = loginApi;