// eslint-disable-next-line no-unused-vars
import { useState } from 'react'


import './App.css'
import Navbar from './Components/Screens/Navbar'
import Hero from './Components/Screens/Hero'
import Experince from './Components/Screens/Experince'
import Contact from './Components/Screens/Contact'
import Projects from './Components/Screens/Projects'
import About from './Components/Screens/About'


function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Experince/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
