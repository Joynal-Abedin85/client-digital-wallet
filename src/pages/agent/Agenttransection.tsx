import { useGetAgentTransactionsQuery } from "@/redux/features/agentapi";

const AgentTransactions = () => {
  const { data, isLoading } = useGetAgentTransactionsQuery("");

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">All Agent Transactions</h1>

      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">User</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>

        <tbody>
          {data?.transactions?.map((tx: any) => (
            <tr key={tx._id}>
              <td className="p-2 border">{tx.type}</td>
              <td className="p-2 border">{tx.amount}৳</td>
              <td className="p-2 border">{tx.user}</td>
              <td className="p-2 border">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgentTransactions;
