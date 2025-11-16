const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing Plans</h1>
      <p className="text-gray-600 mb-12 text-center max-w-2xl">
        Choose the plan that fits your needs. Simple, transparent pricing with no hidden fees.
      </p>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Free Plan */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <p className="text-gray-500 mb-6">Perfect to try out our basic features</p>
          <span className="text-4xl font-bold mb-6">$0</span>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✅ Basic Features</li>
            <li>✅ 1 User</li>
            <li>✅ 5 Projects</li>
          </ul>
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-teal-600 text-white rounded-xl shadow-md p-8 flex flex-col items-center text-center transform scale-105 hover:scale-110 transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="mb-6">Advanced features for growing teams</p>
          <span className="text-4xl font-bold mb-6">$29<span className="text-base">/mo</span></span>
          <ul className="mb-6 space-y-2">
            <li>✅ All Free Features</li>
            <li>✅ Up to 10 Users</li>
            <li>✅ Unlimited Projects</li>
            <li>✅ Priority Support</li>
          </ul>
          <button className="bg-white text-teal-600 px-6 py-2 rounded hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <p className="text-gray-500 mb-6">For large teams and custom solutions</p>
          <span className="text-4xl font-bold mb-6">$99<span className="text-base">/mo</span></span>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>✅ All Pro Features</li>
            <li>✅ Unlimited Users</li>
            <li>✅ Dedicated Support</li>
            <li>✅ Custom Integrations</li>
          </ul>
          <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
