import { useState } from 'react'
// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Submit from '../components/Submit'
import Welcome from '../components/Welcome'
import Students from '../components/Students'
import Lecturer from '../components/Lecturer'
import Card from '../components/Card'
import Review from '../components/Review'
import Footer from '../components/Footer'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <div class="z-index">
      

      <Routes>
        { <Route path="/" element={< Navbar />} /> }
      </Routes>
  
      
      <Submit />
      <Welcome />
      <Students />
      <Lecturer />
      <Card />
      <Review />
      <Footer />

      </div>
    </>
  )
}

export default App
