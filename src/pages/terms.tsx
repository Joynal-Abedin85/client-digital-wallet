import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-teal-600 mb-4">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-6">
          Welcome to WalletPro. These terms and conditions outline the rules
          and regulations for using our digital wallet service.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing and using WalletPro, you accept and agree to be bound
              by these terms. If you disagree with any part of the terms, you may
              not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. Account Registration
            </h2>
            <p className="text-gray-700">
              You must provide accurate and complete information during
              registration. You are responsible for maintaining the security of
              your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. User Responsibilities
            </h2>
            <p className="text-gray-700">
              Users must not use WalletPro for illegal activities. Any suspicious
              activity may lead to account suspension.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. Fees & Charges
            </h2>
            <p className="text-gray-700">
              Some transactions may have fees. All fees will be displayed before
              confirming the transaction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              WalletPro is not responsible for any loss due to unauthorized access
              or user negligence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              6. Changes to Terms
            </h2>
            <p className="text-gray-700">
              We may update these terms at any time. We will notify users of any
              major changes.
            </p>
          </section>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Terms;
