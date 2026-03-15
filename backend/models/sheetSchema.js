import mongoose from 'mongoose'
const sheetSchema =new mongoose.Schema({
customerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Customer',
    required:true
},
date:{
    type:Date,
    default:Date.now
},
items:[
    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
    },
    amount:{
        type:String,
        required:false
    }
}
],
totalAmount:{
    type:Number,
    required:true
},
paidAmount:{
    type:Number,
default:0
},

createdAt:{
    type:Date,
    default:Date.now
}
})

const Sheet= mongoose.model('Sheet',sheetSchema)

export default Sheet