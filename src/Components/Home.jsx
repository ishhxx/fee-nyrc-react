import React from 'react'
import Phone from './Phone'
import Trending from './Trending'
import Accessories from './Accessories'
import Slider from './Slider'
import SubFooter from './SubFooter'

const Home = () => {
  return (
    <div>
      <Phone/>
      <Trending/>
      <Accessories/>
      <Slider/>
      <SubFooter/>
    </div>
  )
}

export default Home
