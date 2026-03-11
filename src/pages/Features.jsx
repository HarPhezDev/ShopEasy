import React, { useState } from "react";
import { FiSend, FiMail, FiShoppingCart, FiTruck, FiGithub, FiLinkedin, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#F9FAFB] font-['Poppins'] antialiased">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EF523E]">
            Contact ShopEasy
          </span>

          <h1 className="text-6xl font-black text-gray-900 mt-4 tracking-tighter leading-tight">
            Customer <br /> <span className="text-[#EF523E]">Support</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <p className="text-gray-500 leading-relaxed mb-8 font-medium">
                Have questions about your order, delivery, or products? Our ShopEasy support team is here to help you anytime.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[#EF523E] transition-colors">
                  <FiMail className="text-[#EF523E] mb-3" size={20} />
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    Customer Support
                  </p>
                  <p className="font-bold text-gray-900 text-sm">
                    support@shopeasy.com
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[#EF523E] transition-colors">
                  <FiTruck className="text-[#EF523E] mb-3" size={20} />
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    Delivery Help
                  </p>
                  <p className="font-bold text-gray-900 text-sm">
                    delivery@shopeasy.com
                  </p>
                </div>

              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">

              <a href="#" className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-2xl hover:bg-[#EF523E] transition-all">
                <FiShoppingCart />
                <span className="text-xs font-bold uppercase tracking-widest">
                  ShopEasy
                </span>
              </a>

              <a href="#" className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-2xl hover:border-[#EF523E] transition-all">
                <FiLinkedin />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Business
                </span>
              </a>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-gray-200/40 border border-white">

            {formStatus === "success" ? (
              <div className="py-20 text-center">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheckCircle size={40} />
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  Message Sent
                </h3>

                <p className="text-gray-400 text-sm">
                  Thank you for contacting ShopEasy. Our support team will respond shortly.
                </p>

                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-[10px] font-black text-[#EF523E] uppercase tracking-widest hover:tracking-[0.2em] transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase ml-4">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-gray-50 rounded-[1.5rem] border-2 border-transparent focus:border-[#EF523E]/20 focus:bg-white outline-none transition-all text-sm font-bold"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black text-gray-400 uppercase ml-4">
                      Email Address
                    </label>

                    <input
                      required
                      type="email"
                      className="w-full px-6 py-4 bg-gray-50 rounded-[1.5rem] border-2 border-transparent focus:border-[#EF523E]/20 focus:bg-white outline-none transition-all text-sm font-bold"
                      placeholder="your@email.com"
                    />
                  </div>

                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-gray-400 uppercase ml-4">
                    Inquiry Type
                  </label>

                  <select className="w-full px-6 py-4 bg-gray-50 rounded-[1.5rem] border-2 border-transparent focus:border-[#EF523E]/20 focus:bg-white outline-none transition-all text-sm font-bold">

                    <option>Order Status</option>
                    <option>Product Inquiry</option>
                    <option>Returns & Refunds</option>
                    <option>Delivery Question</option>
                    <option>General Support</option>

                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-black text-gray-400 uppercase ml-4">
                    Message
                  </label>

                  <textarea
                    required
                    rows="4"
                    className="w-full px-6 py-4 bg-gray-50 rounded-[1.5rem] border-2 border-transparent focus:border-[#EF523E]/20 focus:bg-white outline-none transition-all text-sm font-bold resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  disabled={formStatus === "sending"}
                  className="w-full py-5 bg-gray-900 text-white rounded-[1.5rem] font-black text-[10px] tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-[#EF523E] transition-all shadow-lg active:scale-95 disabled:bg-gray-300"
                >
                  {formStatus === "sending" ? "SENDING..." : "SEND MESSAGE"}
                  <FiSend />
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;