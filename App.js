import React from 'react'
import './App.css'
import {BrowserRouer, Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import Navigation from './components/Navigation'
import About from './routes/About'




function App(props) {
  return (
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </BrowserRouter>
  )
}

App.propTypes = {}

export default App
