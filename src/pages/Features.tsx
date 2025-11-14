
const Features = () => {
    return (
         <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Fast Payments</h2>
          <p className="text-gray-700">
            Instantly send and receive money anytime, anywhere.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Secure Wallet</h2>
          <p className="text-gray-700">
            Your transactions are fully encrypted and safe.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Agent Cash-in</h2>
          <p className="text-gray-700">
            Deposit money easily through verified agents.
          </p>
        </div>
      </div>
    </div>
    );
};

export default Features;