import { baseApi } from "@/redux/baseapi";

const authapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 🔹 Register API
    register: builder.mutation({
      query: (userinfo) => ({
        url: "/users/register",
        method: "POST",
        body: userinfo,
      }),
    }),

    // 🔹 Login API
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),

    getMe: builder.query({
      query: () => "/users/me",
      providesTags: ["User"],
    }),

    updateProfile: builder.mutation({
      query: (body) => ({
        url: "/users/update",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useUpdateProfileMutation, useGetMeQuery } = authapi;
