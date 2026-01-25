import React from "react";

type StatItemProps = {
  label: string;
  value: string;
};

const StatItem: React.FC<StatItemProps> = ({ label, value }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
      <h3 className="text-3xl font-bold text-teal-600">
        {value}
      </h3>
      <p className="text-sm text-gray-500 mt-2">
        {label}
      </p>
    </div>
  );
};

const StatsPage: React.FC = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto  p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Platform Statistics
        </h1>
        <p className="text-sm text-gray-500">
          Overall performance of our digital wallet
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatItem label="Total Users" value="120,000+" />
        <StatItem label="Total Transactions" value="8.5M+" />
        <StatItem label="Money Transferred" value="$1.2B+" />
        <StatItem label="Countries Supported" value="35+" />
      </div>

      {/* Extra Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Transaction Success Rate
          </h3>
          <p className="text-4xl font-bold text-teal-600">
            99.98%
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Fast & reliable payments worldwide
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Average Processing Time
          </h3>
          <p className="text-4xl font-bold text-teal-600">
            1.2s
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Real-time transaction speed
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Customer Satisfaction
          </h3>
          <p className="text-4xl font-bold text-teal-600">
            4.9/5
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Based on verified user reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
