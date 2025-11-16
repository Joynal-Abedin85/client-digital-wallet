import { baseApi } from "../baseapi";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cashIn: builder.mutation({
      query: (data) => ({
        url: "/agent/cash-in",
        method: "POST",
        body: data,
      }),
    }),

    cashOut: builder.mutation({
      query: (data) => ({
        url: "/agent/cash-out",
        method: "POST",
        body: data,
      }),
    }),

    getCommissionHistory: builder.query({
      query: () => "/agent/commissions",
    }),

    getAgentOverview: builder.query({
      query: () => ({
        url: "/agent/overview",
        method: "GET",
      }),
      providesTags: ["Agent"],
    }),

    getAgentTransactions: builder.query({
      query: () => ({
        url: "/agent/transactions",
        method: "GET",
      }),
      providesTags: ["Agent"],
    }),
  }),
});

export const {
  useCashInMutation,
  useCashOutMutation,
  useGetCommissionHistoryQuery,
  useGetAgentOverviewQuery,
  useGetAgentTransactionsQuery
} = agentApi;
