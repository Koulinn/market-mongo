import mongoose from "mongoose";

const { Schema, model } = mongoose

const cartSchema = new Schema({
    status: { type: String, required: true },
    userId: [Schema.Types.ObjectId],
    products: [],
}, {
    timestamps: true
})


export default mode('Cart', cartSchema)