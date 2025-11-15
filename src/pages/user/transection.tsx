import { useGetTransactionsQuery } from "@/redux/features/userapi";

const Transactions = () => {
  const { data, isLoading } = useGetTransactionsQuery("");

  if (isLoading) return <p>Loading…</p>;

  console.log(data)

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">My Transactions</h1>

      <div className="bg-white p-4 rounded shadow">
        {data?.data?.map((t: any) => (
          <div 
            key={t._id}
            className="border-b py-2 flex justify-between text-sm"
          >
            <p>{t.type.toUpperCase()}</p>
            <p>{t.amount}৳</p>
            <p>{new Date(t.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
