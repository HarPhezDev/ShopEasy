import React from "react";
import { FiShoppingBag, FiTruck, FiShield, FiUsers, FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <div className="bg-white mt-10 text-gray-900 pt-32 pb-24 px-6 font-['Poppins']">
      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-32">

          <div>
            <p className="text-xs font-black uppercase tracking-[0.4em] text-[#EF523E] mb-6">
              About ShopEasy
            </p>

            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              A Better Way <br /> To Shop Online
            </h1>

            <p className="text-gray-500 leading-relaxed max-w-lg">
              ShopEasy is a modern e-commerce platform created to simplify
              online shopping. We connect customers with quality products
              ranging from fashion and electronics to everyday essentials,
              all in one convenient marketplace.
            </p>

            <button className="mt-8 flex items-center gap-3 bg-[#EF523E] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition">
              Explore Products
              <FiArrowRight />
            </button>
          </div>

          <div className="bg-gray-100 rounded-[3rem] h-[350px] flex items-center justify-center">
            <FiShoppingBag size={120} className="text-[#EF523E]" />
          </div>

        </section>


        {/* BRAND STORY */}
        <section className="mb-32 text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-black mb-6">
            Our Story
          </h2>

          <p className="text-gray-500 leading-relaxed">
            ShopEasy started with a simple idea — online shopping should be
            fast, reliable, and enjoyable. We built this platform to remove
            the frustration many people face when shopping online.
            Our focus is on providing quality products, clear pricing,
            and a smooth browsing experience for every customer.
          </p>

        </section>


        {/* STATS SECTION */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-32 text-center">

          {[
            { number: "500+", label: "Products" },
            { number: "10+", label: "Categories" },
            { number: "1K+", label: "Customers" },
            { number: "24/7", label: "Support" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl font-black text-[#EF523E] mb-2">
                {item.number}
              </h3>
              <p className="text-gray-500 text-sm uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}

        </section>


        {/* VALUES SECTION */}
        <section className="grid md:grid-cols-3 gap-10 mb-32">

          {[
            {
              icon: <FiShoppingBag size={32} />,
              title: "Wide Selection",
              desc: "From fashion to electronics, ShopEasy offers a variety of products for everyday needs.",
            },
            {
              icon: <FiTruck size={32} />,
              title: "Fast Delivery",
              desc: "We work towards delivering your orders quickly and safely to your doorstep.",
            },
            {
              icon: <FiShield size={32} />,
              title: "Secure Shopping",
              desc: "Your information and transactions are protected with secure technology.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-10 rounded-3xl hover:shadow-lg transition"
            >
              <div className="text-[#EF523E] mb-6">{item.icon}</div>

              <h4 className="text-xl font-black mb-4">
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </section>


        {/* CTA SECTION */}
        <section className="bg-[#EF523E] rounded-[3rem] p-16 text-center text-white">

          <h2 className="text-4xl font-black mb-6">
            Ready to Start Shopping?
          </h2>

          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            Discover great products and enjoy a smooth shopping
            experience with ShopEasy today.
          </p>

          <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-black hover:text-white transition">
            Browse Products
          </button>

        </section>

      </div>
    </div>
  );
};

export default About;