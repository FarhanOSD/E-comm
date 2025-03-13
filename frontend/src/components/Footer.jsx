import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function Footer() {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div className="">
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-300'>xttydtu utdtudtuf8 tdtudtft dutdtd 86r86 hchcfudut tudud tut tud uyrure68 8r6r 8 uyf tfut tudtxdu rtu utctu </p>
        </div>
        
        <div >
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className='flex flex-col gap-1 text-gray-300'>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
          </ul>
        </div>

        <div >
          <p className="text-xl font-medium mb-5">Get in Tuch</p>
          <ul className='flex flex-col gap-1 text-gray-300'>
            <li>+88-019*****</li>
            <li>Farhan@gmail.com</li>
          </ul>
        </div>

      </div>

      <div >
        <hr />
        <p className="py-5 text-sm text-center">
            Copyright 2025@ forever.com-ALL Rights Reserved. 
        </p>
        </div>

    </div>
  )
}

export default Footer