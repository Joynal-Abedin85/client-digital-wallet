import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-teal-600 mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6">
          WalletPro values your privacy. This policy explains how we collect,
          use, and protect your information.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-700">
              We collect personal information like name, email, phone number, and
              transaction history to provide the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              2. How We Use Information
            </h2>
            <p className="text-gray-700">
              We use your data to process transactions, improve service, and send
              important updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              3. Data Security
            </h2>
            <p className="text-gray-700">
              We use encryption and security measures to protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              4. Sharing Information
            </h2>
            <p className="text-gray-700">
              We do not share your personal data with third parties except for
              legal requirements or trusted partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              5. Cookies
            </h2>
            <p className="text-gray-700">
              We use cookies to enhance user experience and analyze site traffic.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              6. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have questions about your data, contact us at
              support@walletpro.com
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

export default PrivacyPolicy;
