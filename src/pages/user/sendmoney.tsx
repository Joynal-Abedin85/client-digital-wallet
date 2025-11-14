import { useSendMoneyMutation } from "@/redux/features/userapi";
import { useState } from "react";

const Send = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);
  const [sendMoney] = useSendMoneyMutation();

  const handleSend = async () => {
    await sendMoney({ receiverEmail: email, amount }).unwrap();
    alert("Money Sent Successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Send Money</h1>

      <input
        type="email"
        className="border p-2 mt-4 rounded w-full"
        placeholder="Receiver Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="number"
        className="border p-2 mt-4 rounded w-full"
        placeholder="Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
      >
        Send
      </button>
    </div>
  );
};

export default Send;
