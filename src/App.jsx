import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Shop from './components/Shop'
import BulkBuy from './components/BulkBuy'

const App = () => {
  return (
    <>
    <Navbar />
    <Main />
    <Shop />
    <BulkBuy />
    </>
  )
}

export default App