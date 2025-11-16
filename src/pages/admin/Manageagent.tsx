import { useGetAllAgentsQuery, useUpdateAgentStatusMutation } from "@/redux/features/adminapi";

const ManageAgents = () => {
  const { data, isLoading, isError } = useGetAllAgentsQuery();
  const [updateAgentStatus] = useUpdateAgentStatusMutation();

  const handleStatusChange = (id: string, status: string) => {
    updateAgentStatus({ id, status });
  };

  if (isLoading) return <p>Loading agents...</p>;
  if (isError) return <p>Error loading agents.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Agents</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.agents.map((agent: any) => (
            <tr key={agent._id}>
              <td className="border p-2">{agent.name}</td>
              <td className="border p-2">{agent.email}</td>
              <td className="border p-2">{agent.status}</td>
              <td className="border p-2 space-x-2">
                <button
                  className="px-2 py-1 bg-green-500 text-white rounded"
                  onClick={() => handleStatusChange(agent._id, "approved")}
                >
                  Approve
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => handleStatusChange(agent._id, "suspended")}
                >
                  Suspend
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAgents;
