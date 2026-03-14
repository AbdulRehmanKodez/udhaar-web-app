import React from 'react'
import {useState} from 'react'
import {addcustomer} from '../services/api.js'
function Customercard({onAdd}) {
    const [form, setForm] = useState({'name':'','address':'','phone':''  })

    const submitHandler = (e)=>{
        e.preventDefault()
        addcustomer(form).then((res)=>{
            console.log(res.data)
            onAdd()
        })
        setForm({'name':'','address':'','phone':''  })
    }
  return (
    <div className='h-40 w-full bg-gray-400 text-amber-100'>
        <h1>Customer Card</h1>
        <form action="" onSubmit={submitHandler}>
            <label htmlFor="name">Name</label>
            <input value={form.name} onChange={(e)=>{
                setForm({...form, name: e.target.value})}
            } type="text" name="" id="name" />

            <label htmlFor="address">Address</label>
            <input value={form.address} onChange={(e)=>{
                setForm({...form, address: e.target.value})}
            } type="text" name="" id="address" />

            <label htmlFor="phone">Phone</label>
            <input value={form.phone} onChange={(e)=>{
                setForm({...form, phone: e.target.value})}
            } type="text" name="" id="phone" />

            <button type="submit" >Submit </button>
        </form>
    </div>
  )
}

export default Customercard