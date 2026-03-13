import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export const  getallcustomers = ()=>api.get('/customer/getcustomers')



export const getcustomer = (id)=>api.get(`/customer/getcustomer/${id}`)


export const addcustomer = (data)=> api.post('/customer/addcustomer', data)
 

export const deletecustomer = (id)=>api.delete(`/customer/deletecustomer/${id}`)

export const addsheet = (data)=> api.post('/sheet/addsheet', data)

export const getallsheets = (id)=>api.get(`/sheet/customer/${id}`)

export const getsheet = (id)=>api.get(`/sheet/${id}`)

export const updatepayment = (id, data)=>api.put(`/sheet/payment/${id}`, data)