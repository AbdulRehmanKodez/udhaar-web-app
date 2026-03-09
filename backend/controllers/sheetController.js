import Sheet from '../models/sheetSchema.js'


export const createSheet=async(req,res)=>{
    try{
        const {customerId,items,totalAmount,paidAmount}=req.body
        const sheet=new Sheet({
            customerId,
            items,
            totalAmount,
            paidAmount
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
        res.status(200).json(sheet)
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}
