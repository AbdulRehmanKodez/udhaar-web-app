import React, { useEffect, useState } from 'react'
import {getallcustomers} from '../services/api.js'
import {useNavigate} from 'react-router-dom'
import CustomerCard from '../components/Customercard.jsx'


function Dashboard() {
  const [customerData, setCustomerData] = useState([])
  const fetchCstomer = ()=>{
    getallcustomers().then((res)=>{
      setCustomerData(res.data)
      console.log(res.data)
    })
  }
  useEffect(() => {
    fetchCstomer()

}, [])
const navigate = useNavigate()
  return (
<>

  <CustomerCard onAdd ={fetchCstomer}/>

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
    </>
  )
}

export default Dashboard