import { useCashOutMutation } from "@/redux/features/agentapi";
import { useState } from "react";

const CashOut = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");

  const [cashOut, { isLoading }] = useCashOutMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await cashOut({ userId, amount: +amount });
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Cash Out</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="border p-2 w-full"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="px-4 py-2 bg-red-600 text-white rounded">
          {isLoading ? "Processing..." : "Cash Out"}
        </button>
      </form>
    </div>
  );
};

export default CashOut;
