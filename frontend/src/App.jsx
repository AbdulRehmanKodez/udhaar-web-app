import React from 'react'
import Dashboard from './pages/Dashboard.jsx'
import Customer from './pages/Customers.jsx'
import Sheet from './pages/Sheet.jsx'
import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path='/customer/:id' element={<Customer/>}/>
      <Route path='/sheet/:id' element={<Sheet/>}/>
    </Routes>
  )
}

export default App