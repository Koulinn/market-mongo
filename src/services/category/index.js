import express from "express"
import category from "./category-handlers.js"

const router = express.Router()

router
  .route("/")
  .get(category.getAll)

router
  .route("/")
  .post(category.create)

router
  .route("/:categoryID")
  .get(category.getSingle)
  .put(category.update)
  .delete(category.deleteSingle)


export default router
