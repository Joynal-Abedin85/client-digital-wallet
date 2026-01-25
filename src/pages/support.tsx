import React from "react";

type HelpCardProps = {
  title: string;
  description: string;
  tag: string;
};

const HelpCard: React.FC<HelpCardProps> = ({ title, description, tag }) => {
  return (
    <div className="bg-white rounded-xl border max-w-6xl mx-auto border-gray-200 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-xs font-medium text-teal-600 bg-teal-100 px-3 py-1 rounded-full">
          {tag}
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-3">{description}</p>
      <button className="mt-4 text-teal-600 font-medium hover:underline">
        View Details
      </button>
    </div>
  );
};

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto  p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Help Center
        </h1>
        <p className="text-sm text-gray-500">
          Find answers to common questions or contact support
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          className="w-full bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          placeholder="Search help topics..."
        />
      </div>

      {/* Help Topics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HelpCard
          title="Account Setup"
          description="Learn how to create your wallet, verify your account, and manage your profile."
          tag="Beginner"
        />
        <HelpCard
          title="Send & Receive"
          description="Step-by-step guide to transfer money securely to anyone."
          tag="Transactions"
        />
        <HelpCard
          title="Security & Privacy"
          description="Learn about 2FA, encryption, and how to protect your wallet."
          tag="Safety"
        />
        <HelpCard
          title="Card & Bank Linking"
          description="How to connect your bank account or card for fast transfers."
          tag="Payments"
        />
        <HelpCard
          title="Fees & Limits"
          description="Know the fees, transaction limits, and how to upgrade your account."
          tag="Info"
        />
        <HelpCard
          title="Contact Support"
          description="If you need help, submit a ticket and our support team will respond."
          tag="Support"
        />
      </div>
    </div>
  );
};

export default SupportPage;
