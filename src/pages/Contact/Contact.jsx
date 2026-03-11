import React, { useState } from "react";
import { FiSend, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin, FiInstagram, FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-[#FDFDFD] font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EF523E]">
            Customer Support
          </span>

          <h1 className="text-6xl font-black text-gray-900 mt-4 tracking-tighter">
            We're here to <br />
            help you <span className="italic">shop better.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Contact Information */}
          <div className="space-y-12">

            <div>
              <p className="text-gray-500 max-w-sm leading-relaxed mb-10">
                Have questions about a product, your order, or delivery?  
                The ShopEasy support team is always ready to assist you with a smooth shopping experience.
              </p>

              <div className="space-y-6">

                {/* Email */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#EF523E] group-hover:bg-[#EF523E] group-hover:text-white transition-all duration-300">
                    <FiMail size={24} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Email Support
                    </p>

                    <p className="font-bold text-gray-900">
                      olundegunhafeez@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#EF523E] group-hover:bg-[#EF523E] group-hover:text-white transition-all duration-300">
                    <FiPhone size={24} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Call Us
                    </p>

                    <p className="font-bold text-gray-900">
                      +234 808 593 9242
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#EF523E] group-hover:bg-[#EF523E] group-hover:text-white transition-all duration-300">
                    <FiMapPin size={24} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      Headquarters
                    </p>

                    <p className="font-bold text-gray-900">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media */}
            <div className="pt-10 border-t border-gray-100">

              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">
                Follow ShopEasy
              </p>

              <div className="flex gap-4">

                {[<FiGithub />, <FiLinkedin />, <FiInstagram />].map((icon, idx) => (
                  <button
                    key={idx}
                    className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center hover:bg-[#EF523E] hover:-translate-y-1 transition-all"
                  >
                    {icon}
                  </button>
                ))}

              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[3.5rem] p-10 md:p-16 shadow-2xl shadow-gray-200/50 border border-gray-50 relative overflow-hidden">

            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">

                <FiCheckCircle size={80} className="text-[#EF523E] mb-6 animate-bounce" />

                <h3 className="text-3xl font-black mb-2">
                  Message Sent!
                </h3>

                <p className="text-gray-400">
                  Our support team will reply shortly.
                </p>

                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 font-bold text-[#EF523E] hover:underline"
                >
                  Send another message
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit} className="space-y-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                      Your Name
                    </label>

                    <input
                      required
                      type="text"
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#EF523E]/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                      Email Address
                    </label>

                    <input
                      required
                      type="email"
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#EF523E]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                </div>

                <div className="space-y-2">

                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Inquiry Type
                  </label>

                  <select className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#EF523E]/20 outline-none transition-all appearance-none">

                    <option>Order Support</option>
                    <option>Product Inquiry</option>
                    <option>Shipping & Delivery</option>
                    <option>Returns & Refunds</option>
                    <option>General Question</option>

                  </select>

                </div>

                <div className="space-y-2">

                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2">
                    Message
                  </label>

                  <textarea
                    required
                    rows="4"
                    className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#EF523E]/20 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>

                </div>

                <button
                  disabled={formStatus === "sending"}
                  className="w-full py-5 bg-gray-900 text-white rounded-2xl font-black text-xs tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#EF523E] transition-all shadow-xl disabled:bg-gray-400"
                >

                  {formStatus === "sending" ? "SENDING..." : "SEND MESSAGE"}

                  <FiSend />

                </button>

              </form>

            )}

            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#EF523E]/5 rounded-full"></div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;