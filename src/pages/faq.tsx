
const faq = () => {
  const data = [
    {
      q: "How do I open an account?",
      a: "Download the app or register on the website to create an account easily.",
    },
    {
      q: "Is my wallet secure?",
      a: "Yes, we use bank-level encryption to protect your data.",
    },
    {
      q: "How can I deposit money?",
      a: "You can deposit through any verified agent.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">FAQ</h1>

      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-xl">{item.q}</h2>
            <p className="text-gray-600 mt-2">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default faq;