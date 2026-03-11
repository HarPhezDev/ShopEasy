import React from 'react'
import Navbar from '../../components/Navbar';
import Hero from '../Home/Hero.jsx'
import Features from '../Features.jsx';
import Products from '../Home/Products.jsx';
import Warehouse from './Warehouse.jsx';
import Brands from './Brands.jsx';
import Advertise from './Advertise.jsx';
import Subscribe from './Subscribe.jsx'



const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Advertise />
      <Features />
      <Brands />
      <Warehouse />
      <Subscribe />
    </>
  )
}

export default Home
