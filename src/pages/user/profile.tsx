import { useGetMyWalletQuery } from "@/redux/features/userapi";

const Profile = () => {
  const { data } = useGetMyWalletQuery("");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">My Profile</h1>
      <p className="mt-4">User ID: {data?.data?.user}</p>
    </div>
  );
};

export default Profile;
