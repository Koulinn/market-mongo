import mongoose from "mongoose";

const { Schema, model } = mongoose

const categorySchema = new Schema({
    name: { type: String, required  }
})


export default mode('Category', categorySchema)