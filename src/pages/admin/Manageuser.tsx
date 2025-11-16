import { useGetAllUsersQuery } from "@/redux/features/adminapi";

const ManageUsers = () => {
  const { data, isLoading, isError } = useGetAllUsersQuery();

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error loading users.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user: any) => (
            <tr key={user._id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.role}</td>
              <td className="border p-2">{user.status || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
