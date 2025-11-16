import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      feedback: "This wallet app makes sending money so simple and fast!",
    },
    {
      name: "Michael Smith",
      feedback: "I love the security features and instant transfers.",
    },
    {
      name: "Sofia Lee",
      feedback: "A must-have app for anyone who wants hassle-free payments.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-600">Real feedback from our happy customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
            <p className="text-gray-700 mb-4">"{r.feedback}"</p>
            <h4 className="font-semibold">{r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
