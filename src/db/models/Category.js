import mongoose from "mongoose";

const { Schema, model } = mongoose

const categorySchema = new Schema({
    category: { type: String, required: true  }
})


export default model('Category', categorySchema)