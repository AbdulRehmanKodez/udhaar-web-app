import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import {getsheet} from '../services/api.js'

function Sheet() {
  const [sheet, setSheet] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    getsheet(id).then((res)=>{
      console.log(res.data);
      setSheet(res.data)
    })
  }, [])
  
  if(!sheet) return <h1>Loading...</h1>
  return (
    <div className='text-amber-100'>
      {sheet.items.map((items)=>(
        <div key={items._id}>

          <h1>{items.name}</h1>
          <h1>{items.amount}</h1>
          <h1>{items.price}</h1>
        </div>
      ))}
         
         <h1>total: {sheet.totalAmount}</h1>
         <h1>paid: {sheet.paidAmount}</h1>
         <h1>remaining: {sheet.totalAmount - sheet.paidAmount}</h1>
    </div>
  )
}

export default Sheet