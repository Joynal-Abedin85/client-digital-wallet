import React from "react";

const HowItWorks = () => {
  const steps = [
    { step: "1", title: "Create Account", desc: "Sign up in seconds using your email or mobile number." },
    { step: "2", title: "Add Funds", desc: "Deposit money via bank or card safely." },
    { step: "3", title: "Start Transacting", desc: "Send, receive, and track your money instantly." },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600">Simple steps to start using your digital wallet</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((s, idx) => (
          <div key={idx} className="bg-teal-50 p-8 rounded-xl text-center shadow-md hover:shadow-xl transition">
            <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto text-2xl font-bold mb-4">
              {s.step}
            </div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
