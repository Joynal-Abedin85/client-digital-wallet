import { useGetMyWalletQuery } from "@/redux/features/userapi";

const Dashboard = () => {
  const { data, isLoading } = useGetMyWalletQuery("");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">User Dashboard</h1>

      <div className="mt-4 bg-white shadow rounded p-4">
        <p className="text-lg">Balance: 
          <span className="font-bold text-green-600">
            {data?.data?.balance}৳
          </span>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
