import { useCashInMutation } from "@/redux/features/agentapi";
import { useState } from "react";

const CashIn = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");

  const [cashIn, { isLoading }] = useCashInMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await cashIn({ userId, amount: +amount });
    setUserId("");
    setAmount("");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Cash In</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="border p-2 w-full"
          placeholder="User ID"
        />

        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full"
          placeholder="Amount"
          type="number"
        />

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Cash In"}
        </button>
      </form>
    </div>
  );
};

export default CashIn;
