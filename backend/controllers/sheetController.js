import Sheet from '../models/sheetSchema.js'
import Customer from '../models/customerSchema.js'

export const createSheet=async(req,res)=>{
    try{
        const {customerId,items,totalAmount}=req.body
        const findCustomer=await Customer.findById(customerId)
        if(!findCustomer){
            return res.status(404).json({message:'Customer not found'})
        }
        const sheet=new Sheet({
            customerId,
            items,
            totalAmount,
        })
        await sheet.save()
        res.status(201).json({message:'Sheet created successfully',sheet})
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}

export const getSheetsByCustomerId=async(req,res)=>{
    try{
        const {customerId}=req.params
        const sheets=await Sheet.find({customerId})
        if(sheets.length===0){
            return res.status(404).json({message:'No sheets found for this customer'})
        }
          res.status(200).json(sheets)
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}

export const getSheetById=async(req,res)=>{ 
    try{
        const {id}=req.params
        const sheet=await Sheet.findById(id)
        if(!sheet){
            return res.status(404).json({message:'Sheet not found'})
        }
        res.status(200).json(sheet)
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}

export const updatePayment=async(req,res)=>{
    try{
        const{paidAmount}=req.body
        const {sheetId}=req.params
        const sheet=await Sheet.findById(sheetId)
        if(!sheet){
            return res.status(404).json({message:'Sheet not found'})
        }
        const customer=await Customer.findById(sheet.customerId)
        if(!customer){
            return res.status(404).json({message:'Customer not found'})
        }
        if(paidAmount>sheet.totalAmount){
            return res.status(400).json({message:'Paid amount cannot be greater than total amount'})
        }
        sheet.paidAmount=paidAmount
        await sheet.save()
        res.status(200).json({message:'Payment updated successfully',sheet})
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}