import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import {getsheet,updatepayment} from '../services/api.js'

function Sheet() {
  const [sheet, setSheet] = useState(null)
  const [payment, setPayment] = useState('')
  const { id } = useParams()
  useEffect(() => {
    getsheet(id).then((res)=>{
      console.log(res.data);
      setSheet(res.data)
    })
  }, [])
  
  if(!sheet) return <h1>Loading...</h1>
    const paymentupdatehandler = (e)=>{
      updatepayment(id,{paidAmount:payment}).then((res)=>{
        console.log(res.data);
        setSheet(res.data.sheet)
      })
    }

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
         <input type="text" name="payment" id="" value={payment} onChange={(e)=>{
          setPayment(e.target.value)
         }} />
         <button onClick={()=>paymentupdatehandler()}>Add payment</button>
         <h1>remaining: {sheet.totalAmount - sheet.paidAmount}</h1>
    </div>
  )
}

export default Sheet