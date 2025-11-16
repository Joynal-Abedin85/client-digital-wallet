import { useGetOverviewQuery } from "@/redux/features/adminapi";

const AdminOverview = () => {
  const { data, isLoading, isError } = useGetOverviewQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading overview.</p>;

  const { totalUsers, totalAgents, totalTransactions, totalVolume } = data.overview;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Admin Overview</h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded">Users: {totalUsers}</div>
        <div className="p-4 bg-white shadow rounded">Agents: {totalAgents}</div>
        <div className="p-4 bg-white shadow rounded">Transactions: {totalTransactions}</div>
        <div className="p-4 bg-white shadow rounded">Total Volume: ${totalVolume}</div>
      </div>
    </div>
  );
};

export default AdminOverview;
