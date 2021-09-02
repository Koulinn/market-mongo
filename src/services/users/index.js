import express from "express"
import user from "./users-handlers.js"

const router = express.Router()

router
  .route("/")
  .get(user.getAll)
  .post(user.create)
  

router
  .route("/:userID")
  .get(user.getSingle)
  .put(user.update)
  .delete(user.deleteSingle)


export default router
