import { useGetAgentOverviewQuery } from "@/redux/features/agentapi";

const AgentOverview = () => {
  const { data, isLoading } = useGetAgentOverviewQuery("");

  if (isLoading) return <p>Loading...</p>;

  const overview = data?.overview;

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Agent Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold text-lg">Total Cash-in</h2>
          <p className="text-green-600 font-bold text-2xl">
            {overview.totalCashIn}৳
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold text-lg">Total Cash-out</h2>
          <p className="text-red-600 font-bold text-2xl">
            {overview.totalCashOut}৳
          </p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-bold text-lg">Total Commission</h2>
          <p className="text-blue-600 font-bold text-2xl">
            {overview.totalCommission}৳
          </p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-bold mb-3">Recent Transactions</h2>

        {overview.recentTransactions.length === 0 ? (
          <p>No recent transactions</p>
        ) : (
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Type</th>
                <th className="p-2 border">User</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {overview.recentTransactions.map((tx: any) => (
                <tr key={tx._id} className="border">
                  <td className="p-2 border">{tx.type}</td>
                  <td className="p-2 border">{tx.user}</td>
                  <td className="p-2 border">{tx.amount}৳</td>
                  <td className="p-2 border">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
};

export default AgentOverview;
