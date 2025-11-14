import { useWithdrawMutation } from "@/redux/features/userapi";
import { useState } from "react";

const Withdraw = () => {
  const [amount, setAmount] = useState(0);
  const [withdraw] = useWithdrawMutation();

  const handleWithdraw = async () => {
    await withdraw({ amount }).unwrap();
    alert("Withdraw Successful!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Withdraw Money</h1>

      <input
        type="number"
        className="border p-2 mt-4 rounded"
        placeholder="Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button
        onClick={handleWithdraw}
        className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
      >
        Withdraw
      </button>
    </div>
  );
};

export default Withdraw;
