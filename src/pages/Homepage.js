import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import Contact from '../components/ContactPage'

const Homepage = () => {
  return (
    <div className='container'>
        <Navbar />
        <LandingPage/>
        <Contact />
    </div>
  )
}


export default Homepage