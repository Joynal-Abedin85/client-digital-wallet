import { useGetAllTransactionsQuery } from "@/redux/features/adminapi";
import  { useState } from "react";

const AllTransactions = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetAllTransactionsQuery({ page, limit: 10 });

  if (isLoading) return <p>Loading transactions...</p>;
  if (isError) return <p>Error loading transactions.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Transactions</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">User</th>
            <th className="border p-2">Agent</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.transactions.map((tran: any) => (
            <tr key={tran._id}>
              <td className="border p-2">{tran.user?.name || "N/A"}</td>
              <td className="border p-2">{tran.agent?.name || "N/A"}</td>
              <td className="border p-2">{tran.amount}</td>
              <td className="border p-2">{tran.type}</td>
              <td className="border p-2">{new Date(tran.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} className="px-4 py-2 bg-gray-300 rounded">Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)} className="px-4 py-2 bg-gray-300 rounded">Next</button>
      </div>
    </div>
  );
};

export default AllTransactions;
