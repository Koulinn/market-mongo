import mongoose from "mongoose";

const { Schema, model } = mongoose

const cartSchema = new Schema({
    status: { type: String, enum:["active, inTransport, abandoned, paid, returned"], required: true },
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    products: [{ type: Schema.Types.ObjectId, ref: "Product", required: true }],
}, {
    timestamps: true
})


export default model('Cart', cartSchema)