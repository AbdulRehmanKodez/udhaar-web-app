import Customer from '../models/customerSchema.js'

export const addCustomer = async (req,res)=>{
    try{
      const {name,phone,address,photo}=req.body
      const data = new Customer({name,phone,address,photo})
      const saveCustomer = await data.save()
      res.status(201).json({message:"customer save sucess",saveCustomer})
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}

export const getCustomers = async (req,res)=>{
    try{
        const customers = await Customer.find()
        if(customers.length===0){
            return res.status(404).json({message:'No customers found'})
        }
        res.status(200).json(customers)

    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}

export const getCustomerById = async (req,res)=>{
    try{
        const customer = await Customer.findById(req.params.id)
        if(!customer){
            return res.status(404).json({message:'Customer not found'})
        }
        res.status(200).json(customer)
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}

export const deleteCustomer = async (req,res)=>{
    try{
        const customer = await Customer.findByIdAndDelete(req.params.id)
        if(!customer){
            return res.status(404).json({message:'Customer not found'})
        }
        res.status(200).json({message:'Customer deleted successfully'})
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server error'})
    }
}
