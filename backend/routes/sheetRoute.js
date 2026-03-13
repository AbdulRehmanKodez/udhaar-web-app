import express from 'express'
import { getSheetById,getSheetsByCustomerId,createSheet,updatePayment } from '../controllers/sheetController.js'

const router = express.Router()

router.post('/addsheet',createSheet)
router.get('/customer/:customerId',getSheetsByCustomerId)
router.get('/:id',getSheetById)
router.put('/payment/:sheetId',updatePayment)

export default router