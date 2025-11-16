import { baseApi } from "../baseapi";

// Type definitions (optional but recommended)
interface PaginationParams {
  page?: number;
  limit?: number;
  type?: string;
  userId?: string;
  agentId?: string;
}

interface UpdateStatusPayload {
  id: string;
  status: string;
}

interface AdminProfilePayload {
  name?: string;
  email?: string;
  password?: string;
}

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Overview (no argument)
    getOverview: build.query<any, void>({
      query: () => "/admin/overview",
      providesTags: ["Admin"],
    }),

    // Users
    getAllUsers: build.query<any, void>({
      query: () => "/admin/users",
      providesTags: ["User"],
    }),

    // Agents
    getAllAgents: build.query<any, void>({
      query: () => "/admin/agents",
      providesTags: ["Agent"],
    }),

    // Wallets
    getAllWallets: build.query<any, void>({
      query: () => "/admin/wallets",
      providesTags: ["Wallet"],
    }),

    updateWalletStatus: build.mutation<any, UpdateStatusPayload>({
      query: ({ id, status }) => ({
        url: `/admin/wallets/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Wallet"],
    }),

    updateAgentStatus: build.mutation<any, UpdateStatusPayload>({
      query: ({ id, status }) => ({
        url: `/admin/agents/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Agent"],
    }),

    // Transactions
    getAllTransactions: build.query<any, PaginationParams>({
      query: (params) => ({
        url: "/admin/transactions",
        params, // { page, limit, type, userId, agentId }
      }),
      providesTags: ["Transactions"],
    }),

    // Admin profile
    updateAdminProfile: build.mutation<any, AdminProfilePayload>({
      query: (body) => ({
        url: "/admin/profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

export const {
  useGetOverviewQuery,
  useGetAllUsersQuery,
  useGetAllAgentsQuery,
  useGetAllWalletsQuery,
  useUpdateWalletStatusMutation,
  useUpdateAgentStatusMutation,
  useGetAllTransactionsQuery,
  useUpdateAdminProfileMutation,
} = adminApi;
