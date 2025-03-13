import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Titel from '../components/Titel';
import ProductItem from '../components/ProductItem';

function Collection() {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant'); // Fixed typo

  const toggleCategory = e => {
    const value = e.target.value;
    setCategory(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products]; // Create new array reference

    // Search filter
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) // Fixed method name
      );
    }

    // Category filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category)
      );
    }

    // Subcategory filter
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        subcategory.includes(item.subcategory)
      );
    }

    // Sorting
    switch (sortType) {
      case 'low-high':
        productsCopy = [...productsCopy].sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        productsCopy = [...productsCopy].sort((a, b) => b.price - a.price);
        break;
      // 'relevant' case handled by default
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
    
    
  }, [category, subcategory, search, showSearch, sortType, products]); // Added missing dependencies

  

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filters
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-300">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3
              "
                value={'Men'}
                onChange={toggleCategory}
              />{' '}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3
              "
                value={'Women'}
                onChange={toggleCategory}
              />{' '}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3
              "
                value={'Kids'}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-300">
            <p className="flex gap-2">
              <input
                type="checkbox"
                value={'Topwear'}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3
              "
                value={'Bottomwear'}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3
              "
                value={'Winterwear'}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Titel text1={'All'} text2={'Collections'} />

          {/* Porduct Sort */}

          <select
            onChange={e => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort by : Relavent</option>
            <option value="low-high">Sort by : Low to High </option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>

        {/* Map Products */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
