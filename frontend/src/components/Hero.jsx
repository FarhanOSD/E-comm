import React from 'react'
import { assets } from '../assets/frontend_assets/assets';

function Hero() {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-gray-300">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-slate-500"></p>
            <p className="font-medium text-sm md:text-base">Our Bestseller</p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Shop Now!</p>
            <p className="w-8 md:w-11 h-[2px] bg-slate-500"></p>
          </div>
        </div>
      </div>
      {/* Hero Right side */}
      <img src={assets.hero_img} className="w-full sm:w-1/2" alt="" />
    </div>
  );
}

export default Hero