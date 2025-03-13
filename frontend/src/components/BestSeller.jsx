import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titel from './Titel'
import ProductItem from './ProductItem'

function BestSeller() {
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])
  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller))
    setBestSeller(bestProduct.slice(0, 5))
    
  }, [products])
  
  return (
    <div className='my-10'>
      <div className="text-center text-3xl py-8">
        <Titel text1={"Best"} text2={'Sellers'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-300'>
        Lorem Opsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet, consectet
        </p>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          bestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller