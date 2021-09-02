import express from "express"
import cors from "cors"
import lib from "./src/lib/index.js"
import mongoose from 'mongoose'
import categoryRouter from './src/services/category/index.js'
import productRouter from './src/services/products/index.js'
import userRouter from './src/services/users/index.js'


const { errorHandlers, serverConfig } = lib


const server = express()
const { PORT } = process.env

server.use(express.json())
server.use(cors(serverConfig))

server.use("/category", categoryRouter)
server.use("/product", productRouter)
server.use("/user", userRouter)






server.use(errorHandlers.forbidden)
server.use(errorHandlers.notFound)
server.use(errorHandlers.badRequest)
server.use(errorHandlers.server)




mongoose.connect(process.env.MONGO_CONN)
mongoose.connection.on('connected', () => {
  try {
    console.log('Mongo connected')
    server.listen(PORT, async () => {
      console.log("🚀 Server is running on port ", PORT)
    })
    mongoose.connection.on('error', error => {
      console.log('Mongo error: ', error)
    })
    server.on("error", (error) =>
      console.log("🚀 Server is crashed due to ", error)
    )

  } catch (error) {
    console.log(error)
  }
})

