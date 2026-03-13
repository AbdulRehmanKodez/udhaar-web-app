import React, { useEffect,useState } from 'react'
import {getallsheets,getcustomer} from '../services/api.js'
import { useParams , useNavigate } from 'react-router-dom'

function Customers() {
  const {id} = useParams()
  const [customer, setCustomer] = useState(null)
  const [sheets, setSheets] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getcustomer(id).then((res)=>
      {
         setCustomer(res.data)
         console.log(res.data);
         
      }
     )

     getallsheets(id).then((res)=>{
      setSheets(res.data)
      console.log(res.data)
     })

     
  }, [])
  return (
    <div className='h-full w-full bg-taupe-600'>
      <h1>{customer?.name}</h1>
      <h1>{customer?.phone}</h1>
         <div>
          {sheets.map((sheet)=>(
            <div key={sheet._id} onClick={()=>navigate(`/sheet/${sheet._id}`)}>
             <h1>
              {sheet.date}
             </h1>
             totalamount: {sheet.totalAmount }
                <h1>
                  remaining amount: {sheet.totalAmount - sheet.paidAmount}
                </h1>
            </div>
          ))}
         </div>
      
    </div>
  )
}

export default Customers