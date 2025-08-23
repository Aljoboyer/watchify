import { reqHeaders } from "../../constant/reqHeaders";
import { api } from "../api/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        headers: reqHeaders,
        body: data,
      }),

    }),

    logIn: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        headers: reqHeaders,
        body: data,
      }),
    }),

  }),
});

export const {
  useSignUpMutation,
  useLogInMutation,
} = authApi;
