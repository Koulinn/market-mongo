import express from "express"
import cart from "./cart-handlers.js"

const router = express.Router()

router
  .route("/")
  .get(cart.getAll)

router
  .route("/")
  .post(cart.addProdToCart)

router
  .route("/:cartID")
  .get(cart.getSingle)
  .put(cart.update)
  .delete(cart.deleteSingle)


export default router
