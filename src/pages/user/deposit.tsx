import  {useDepositMutation}  from "@/redux/features/userapi";
import { useState } from "react";

const Deposit = () => {
  const [amount, setAmount] = useState(0);
  const [deposit] = useDepositMutation();

  const handleDeposit = async () => {
    await deposit({ amount }).unwrap();
    alert("Deposit Successful!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Deposit Money</h1>

      <input
        type="number"
        className="border p-2 mt-4 rounded"
        placeholder="Enter amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button
        onClick={handleDeposit}
        className="bg-green-600 text-white px-4 py-2 mt-4 rounded"
      >
        Deposit
      </button>
    </div>
  );
};

export default Deposit;
