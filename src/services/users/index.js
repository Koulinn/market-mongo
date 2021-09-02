import express from "express"
import product from "./users-handlers.js"

const router = express.Router()

router
  .route("/")
  .get(product.getAll)
  .post(product.create)
  

router
  .route("/:userID")
  .get(product.getSingle)
  .put(product.update)
  .delete(product.deleteSingle)


export default router
