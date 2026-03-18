import React, { useEffect, useState } from 'react'
import { getallcustomers } from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import CustomerCard from '../components/Customercard.jsx'

function Dashboard() {
  const [customerData, setCustomerData] = useState([])
  const [showAddCard, setShowAddCard] = useState(false)  
  const navigate = useNavigate()

  const fetchCustomer = () => {
    getallcustomers().then((res) => {
      setCustomerData(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    fetchCustomer()
  }, [])

  return (
    <>
      <div style={{paddingLeft:'10px'}} className='h-20 w-full  text-black text-3xl font-bold flex items-center '>
        <h1>UDHAR KHATA</h1>
        <button
          onClick={() => setShowAddCard(true)} style={{marginLeft:'100px'}}  
          className='bg-[#AEC3B0] text-[#01161E] h-8 w-45  font-bold py-2 px-4 rounded hover:bg-[#8AA695] text-base cursor-pointer transition-all'
        >
          Add Customer
        </button>
      </div>

     
      {showAddCard && (
        <CustomerCard
          onAdd={() => {
            fetchCustomer()
            setShowAddCard(false) 
          }}
          onClose={() => setShowAddCard(false)}
        />
      )}

      <div style={{paddingTop:'10px',paddingLeft:'10px'}} className='min-h-screen w-full '>
    <div className='grid grid-cols-4 gap-4 '>
        {customerData.map((cust) => (
            <div
                key={cust._id}
                onClick={() => navigate(`/customer/${cust._id}`)} style={{paddingLeft:'10px',paddingTop:'8px'}} 
                className='cursor-pointer h-24 w-70 leading-4.5   bg-[#598392] rounded-xl hover:bg-[#124559] transition-all shadow-md'
            >      <h1>Name</h1>
                <h1  className='text-xl font-bold text-white pl-20 '>{cust.name}</h1>
                 <h2>Phone</h2>
                <p className='text-white'>{cust.phone}</p>
            </div>
        ))}
    </div>
</div>
    </>
  )
}

export default Dashboard