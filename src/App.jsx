import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "flowbite-react";

import './App.css'
import Information from './Component/Information'
import Card  from './Component/Card'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Student from './Component/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container mx-auto " >

        <Navbar/>
        <Student/>
        <Card/>
        <Information/>
    </div>
    </>
  )
}

export default App
