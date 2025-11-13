import { baseApi } from "@/redux/baseapi";

const authapi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userinfo) => ({
                url: "/users/register",
                method: "POST",
                body: userinfo
            })
        })
    })
})


export const {useRegisterMutation} = authapi