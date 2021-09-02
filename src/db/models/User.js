import mongoose from "mongoose";

const { Schema, model } = mongoose

const userSchema = new Schema({
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    orderHistory: [],
    cartId: [{type: Schema.Types.ObjectId}],
}, {
    timestamps: true
})


export default mode('User', userSchema)