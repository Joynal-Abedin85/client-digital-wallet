import { baseApi } from "../baseapi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyWallet: build.query({
      query: () => "/wallets/me",
      providesTags: ["Wallet"],
    }),

    deposit: build.mutation({
      query: (body) => ({
        url: "/wallets/deposit",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Wallet"],
    }),

    withdraw: build.mutation({
      query: (body) => ({
        url: "/wallets/withdraw",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Wallet"],
    }),

    sendMoney: build.mutation({
      query: (body) => ({
        url: "/wallets/send",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Wallet"],
    }),
  }),
});

export const {
  useGetMyWalletQuery,
  useDepositMutation,
  useWithdrawMutation,
  useSendMoneyMutation,
} = walletApi;



export const transactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTransactions: build.query({
      query: () => "wallets/transection",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionApi;

