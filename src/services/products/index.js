import express from "express"
import product from "./products-handlers.js"

const router = express.Router()

router
  .route("/")
  .get(product.getAll)
  .post(product.create)
  
  router
  .route("/category/:categoryID")
  .get(product.getByCategory)

router
  .route("/:productID")
  .get(product.getSingle)
  .put(product.update)
  .delete(product.deleteSingle)


export default router
