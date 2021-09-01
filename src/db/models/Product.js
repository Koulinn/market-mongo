import mongoose, { now } from "mongoose";

const { Schema, model } = mongoose

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    productReviews: [{
        comment: String,
        rate: Number,
        userId: [Schema.Types.ObjectId], //mongoose.ObjectId
        createdAt: new Date(),
        updatedAt: { type: Date, default: Date.now },
    }]
}, {
    timestamps: true
})


export default mode('Product', productSchema)

