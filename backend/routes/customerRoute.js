import express from 'express'

import { addCustomer,getCustomerById,getCustomers,deleteCustomer } from '../controllers/customerController.js'

const router = express.Router()

router.post('/addcustomer',addCustomer)
router.get('/getcustomers',getCustomers)
router.get('/getcustomer/:id',getCustomerById)
router.delete('/deletecustomer/:id',deleteCustomer)

export default router