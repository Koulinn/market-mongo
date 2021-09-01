import mongoose from "mongoose";

const { Schema, model } = mongoose

const userSchema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    birth_day: { type: Date, required: true },
    avatar: { type: String, required: true },
    orderHistory: [],
    cartId: [Schema.Types.ObjectId],
}, {
    timestamps: true
})


export default mode('User', userSchema)