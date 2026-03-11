import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const brandRed = "#EF523E";

  const sections = [
    {
      title: "1. Information We Collect",
      content: "At ShopEasy, we collect information you provide directly to us when you create an account, place an order, subscribe to our newsletter, or contact support. This may include your name, email address, phone number, shipping address, and payment information."
    },
    {
      title: "2. How We Use Your Data",
      content: "Your information helps us process orders, deliver products, provide customer support, and improve your shopping experience on ShopEasy. We may also send updates about your orders, new products, and special offers."
    },
    {
      title: "3. Data Security",
      content: "ShopEasy uses modern security technologies including SSL encryption and secure payment gateways to protect your personal information. We take reasonable measures to safeguard your data from unauthorized access or misuse."
    },
    {
      title: "4. Third-Party Services",
      content: "We may share necessary information with trusted partners such as payment processors and delivery services to complete your orders. These partners are required to keep your data secure and only use it for the intended purpose."
    },
    {
      title: "5. Your Rights",
      content: "You have the right to access, update, or delete your personal information at any time. You can manage your information through your ShopEasy account or contact our support team for assistance."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen pt-24 pb-16 px-6 mt-30"
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm italic">
            Last Updated: March 11, 2026
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-bold text-gray-900">ShopEasy</span>, protecting your privacy is important to us. 
            This Privacy Policy explains how we collect, use, and protect your information when you use our platform 
            to browse and purchase products.
          </p>
        </section>

        {/* Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="group">
              <h2 
                className="text-lg font-black uppercase tracking-widest mb-4 transition-colors"
                style={{ color: brandRed }}
              >
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Questions?</h3>
          <p className="text-sm text-gray-500">
            If you have questions about this policy, contact us at:
            <br />
            <span className="font-medium text-gray-900 underline mt-2 block">
              privacy@shopeasy.com
            </span>
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;