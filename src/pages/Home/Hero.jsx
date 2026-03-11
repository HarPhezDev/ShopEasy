import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Image1 from '../../img/image1.jpeg';
import Image2 from '../../img/image2.jpeg';
import Image3 from '../../img/image3.jpeg';
import Image4 from '../../img/image4.jpeg';

const slides = [
  {
    image: Image1,
    title: "The Future of Tech",
    subtitle: "Precision-engineered gadgets for the modern professional.",
    cta: "Shop Electronics",
    tag: "PREMIUM",
  },
  {
    image: Image4,
    title: "Seamless Shopping",
    subtitle: "Experience the fastest delivery in the e-commerce landscape.",
    cta: "Explore Now",
    tag: "NEW",
  },
  {
    image: Image3,
    title: "Step into Luxury",
    subtitle: "Discover our exclusive footwear collection designed for comfort.",
    cta: "Shop Shoes",
    tag: "TRENDING",
  },
  {
    image: Image2,
    title: "Carry Your World",
    subtitle: "Elegant designer bags that redefine sophistication.",
    cta: "Shop Bags",
    tag: "EXCLUSIVE",
  },
];

const Hero = () => {
  const shopEasyColor = "#EF523E";

  return (
    <section className="w-full relative group overflow-hidden pt-20 md:pt-28 bg-white">
      <style>
        {`
          .swiper-pagination-bullet {
            background: white !important;
            opacity: 0.5;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: ${shopEasyColor} !important;
            opacity: 1;
            width: 30px !important;
            border-radius: 4px !important;
          }

          @keyframes kenburns {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          .ken-burns-img {
            animation: kenburns 10s ease-out infinite alternate;
          }
          
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-text {
            opacity: 0;
            animation: fadeUp 0.8s ease-out forwards;
          }
        `}
      </style>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false 
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[400px] md:h-[calc(100vh-120px)] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              
              <div
                className="absolute inset-0 bg-cover bg-center ken-burns-img"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
             <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
              <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
                <div className="max-w-2xl text-white">
                  {slide.tag && (
                    <div 
                      className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md animate-text"
                      style={{ animationDelay: '0.1s' }}
                    >
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: shopEasyColor }} />
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase">{slide.tag}</span>
                    </div>
                  )}
                  
                  <h1 
                    className="text-4xl md:text-7xl font-black mb-4 leading-[1.1] animate-text"
                    style={{ animationDelay: '0.3s' }}
                  >
                    {slide.title}
                  </h1>
                  
                  <p 
                    className="text-base md:text-lg text-gray-200 mb-8 font-medium max-w-md animate-text"
                    style={{ animationDelay: '0.5s' }}
                  >
                    {slide.subtitle}
                  </p>
                  
                  <button 
                    className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all duration-300 active:scale-95 animate-text"
                    style={{ animationDelay: '0.7s' }}
                  >
                    <span 
                      className="absolute inset-0 w-0 bg-black transition-all duration-300 group-hover:w-full" 
                      style={{ backgroundColor: shopEasyColor }}
                    />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {slide.cta}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;