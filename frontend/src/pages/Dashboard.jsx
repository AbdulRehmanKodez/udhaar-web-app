import React, { useEffect, useState } from 'react'
import {getallcustomers} from '../services/api.js'
import {useNavigate} from 'react-router-dom'



function Dashboard() {
  const [customerData, setCustomerData] = useState([])
  useEffect(() => {
  getallcustomers().then((res)=>{
    setCustomerData(res.data)
    console.log(res.data)
  })

}, [])
const navigate = useNavigate()
  return (
    <div className='h-screen w-full text-amber-100 '>
      
     {customerData.map((customer)=>(
      <div key={customer._id} onClick={()=>{
        navigate(`/customer/${customer._id}`)
      }}> <h1>
        open profile</h1>
        <h1>{customer.name}</h1>
          <h1>{customer.phone}</h1>
          </div>
     ))}

    </div>
  )
}

export default Dashboard