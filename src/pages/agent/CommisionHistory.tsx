import { useGetCommissionHistoryQuery } from "@/redux/features/agentapi";

const CommissionHistory = () => {
  const { data, isLoading } = useGetCommissionHistoryQuery({});

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Commission History</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {data?.commissions.map((c: any) => (
            <tr key={c._id}>
              <td className="border p-2">{c.type}</td>
              <td className="border p-2">{c.amount} ৳</td>
              <td className="border p-2">
                {new Date(c.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommissionHistory;
