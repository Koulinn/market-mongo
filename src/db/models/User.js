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

userSchema.static("destroy", async function (userID) {
    const DbRes = await this.findByIdAndDelete(userID)
  
    return { DbRes }
  })


export default model('User', userSchema)