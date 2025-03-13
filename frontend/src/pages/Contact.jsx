import React from 'react'
import Titel from '../components/Titel'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox';

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Titel text1={'Contact'} text2={'Us'} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-white">Our Store</p>
          <p className="text-gray-100">
            54321 Willms Stone <br /> Suite 345, Wasra, USA
          </p>
          <p className="text-gray-100">
            Tel: (+88) 019***** <br /> Email: Farhan@gmail.com
          </p>
          <p className="text-white font-semibold text-xl">Careers at Forever</p>
          <p className="text-gray-100">
            Learn more about our teams and job Opning.
          </p>
          <button className="border-blue-400 rounded-full px-8 py-4 text-sm hover:bg-blue-600 hover:text-gray-100 transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
}

export default Contact