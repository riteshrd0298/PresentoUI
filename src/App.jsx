import { useState } from 'react'

import viteLogo from '/vite.svg'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Servcies from './components/Servcies'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Services" element={<Servcies/>} />
        <Route path='/Portfolio' element={<Portfolio/> }/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>

      

      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App
