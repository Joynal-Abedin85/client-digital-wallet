import { useGetMyWalletQuery } from "@/redux/features/userapi";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const { data, isLoading } = useGetMyWalletQuery("");

  if (!user) return <p>Loading user...</p>;
  if (isLoading) return <p>Loading Wallet...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>ID: {user.id}</p>

      <h2 className="mt-4 text-lg font-semibold">Wallet Info</h2>
      <p>Balance: {data?.data?.balance}</p>

    </div>
  );
};

export default UserDashboard;
