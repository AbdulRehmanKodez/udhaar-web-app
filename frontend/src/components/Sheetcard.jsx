import {useState} from 'react'
import {addsheet} from '../services/api.js'

import React from 'react'

function Sheetcard({id}) {
    const [items, setItems] = useState([{name:'',amount:'',price:''}])
    const additems = ()=>{
         setItems([...items, {name:'',amount:'',price:''}])
    }


    

    const saveitems = ()=>{
      const validitems = items.filter(item => item.name !== '' && item.price !== '')
       const totalAmount = validitems.reduce((sum , item)=> sum + Number(item.price),0)
      
      addsheet({customerId:id,items:validitems,totalAmount }).then((res)=>{
        console.log(res.data);
      })
    }

    const removeitems = (i)=>{
        setItems(items.filter((_,index)=>index !== i))
    }

    const itemupdatehandler = (index,field,value)=>{
        const updateitems = [...items]
        updateitems[index][field] = value
        setItems(updateitems)
        
    }
  return (
    <div>
        <button onClick={additems}>Add Item</button>

        {items.map((item,index)=>(
        <div key={index}>
          <input type="text" name="name" id="name" placeholder="Item Name" value={item.name} onChange={(e) => itemupdatehandler(index, 'name', e.target.value)} />
          <input type="number" name="amount" id="amount" placeholder="Amount" value={item.amount} onChange={(e) => itemupdatehandler(index, 'amount', e.target.value)} />
          <input type="number" name="price" id="price" placeholder="Price" value={item.price} onChange={(e) => itemupdatehandler(index, 'price', e.target.value)} />
          <button onClick={() => removeitems(index)}>Remove</button>
          </div>
          
       ) )}

         

       <button onClick={saveitems}>Save</button>
    </div>
  )
}

export default Sheetcard