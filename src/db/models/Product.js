import mongoose from "mongoose";


const { Schema, model } = mongoose

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    category: {type: Schema.Types.ObjectId, ref: "Category", required: true},
    image: { type: String, required: true },
    description: { type: String, required: true },
    productReviews: [{
        comment: String,
        rate: Number,
        userId: {type: Schema.Types.ObjectId, ref: "User"}
    }]
}, {
    timestamps: true
})

productSchema.static("destroy", async function (productID) {
    const DbRes = await this.findByIdAndDelete(productID)
  
    return { DbRes }
  })

export default model('Product', productSchema)

