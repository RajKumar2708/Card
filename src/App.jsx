import React from 'react'

import Card1 from './components/CardThree'
import Card2 from './components/CardFour'
import Navbar from './components/Navbar'
import CardOne from './components/CardOne'
import Marquee from './components/Marquee'
import Card3 from './components/Explore'
import Footer from './components/Footer'
import FaqSection from './components/FaqSection'
import Testimonials from './components/Testimonials'
import Signup from './components/Signup'
import Card4 from './components/CardTwo'
import Courses from './components/Courses'
import CardTwo from './components/CardTwo'
import CardThree from './components/CardThree'
import CardFour from './components/CardFour'
import Explore from './components/Explore'

const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center overflow-y-scroll overflow-x-hidden">
      <Navbar/>
      <CardOne/>
      <Marquee></Marquee>
      <Explore/>
      <CardTwo/>
      <Courses/>
      <CardThree/>
      <CardFour/>
      <Testimonials/>
      <Signup/>
      <FaqSection/>
      <Footer/>
      
    </div>
  )
}

export default App
