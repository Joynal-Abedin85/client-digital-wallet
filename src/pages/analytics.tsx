import React from "react";

type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle }) => {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-1">
        {value}
      </h2>
      {subtitle && (
        <p className="text-xs text-teal-600 mt-1">{subtitle}</p>
      )}
    </div>
  );
};

const AnalyticsPage: React.FC = () => {
  return (
    <div className=" max-w-6xl mx-auto min-h-screen  p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Wallet Analytics
        </h1>
        <p className="text-gray-500 text-sm">
          Track your financial activity and performance
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard
          title="Total Balance"
          value="$12,450.00"
          subtitle="+5.2% this month"
        />
        <StatCard
          title="Total Income"
          value="$4,820.00"
          subtitle="Last 30 days"
        />
        <StatCard
          title="Total Expense"
          value="$2,360.00"
          subtitle="-3.1% vs last month"
        />
        <StatCard
          title="Transactions"
          value="128"
          subtitle="This month"
        />
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-5 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Transactions
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-5 py-3 text-left">Date</th>
                <th className="px-5 py-3 text-left">Description</th>
                <th className="px-5 py-3 text-left">Type</th>
                <th className="px-5 py-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  date: "2026-01-20",
                  desc: "Send to John",
                  type: "Expense",
                  amount: "-$120.00",
                },
                {
                  date: "2026-01-18",
                  desc: "Salary",
                  type: "Income",
                  amount: "+$2,000.00",
                },
                {
                  date: "2026-01-16",
                  desc: "Electricity Bill",
                  type: "Expense",
                  amount: "-$75.00",
                },
              ].map((tx, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-5 py-4">{tx.date}</td>
                  <td className="px-5 py-4">{tx.desc}</td>
                  <td
                    className={`px-5 py-4 font-medium ${
                      tx.type === "Income"
                        ? "text-teal-600"
                        : "text-gray-600"
                    }`}
                  >
                    {tx.type}
                  </td>
                  <td
                    className={`px-5 py-4 text-right font-semibold ${
                      tx.amount.startsWith("+")
                        ? "text-teal-600"
                        : "text-gray-800"
                    }`}
                  >
                    {tx.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
