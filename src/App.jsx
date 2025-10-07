import { useState } from 'react'


import './App.css'
import Navbar from './Components/Screens/Navbar'
import Hero from './Components/Screens/Hero'
import Experince from './Components/Screens/Experince'
import Contact from './Components/Screens/Contact'
import Projects from './Components/Screens/Projects'


function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Experince/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
