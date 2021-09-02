import Cart from "../../db/models/Cart.js"



const getAll = async (req, res, next) => {
  try {
    const carts = await Cart.find({})
    res.send(carts)
  } catch (error) {
    next(error)
  }
}
const getSingle = async (req, res, next) => {
  try {
    const { cartID } = req.params
    const cart = await Cart.findById(cartID)

    res.send(cart)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const addProdToCart = async (req, res, next) => {
  try {
    // check if user already has an active Cart
    // if yes
     
    // if not
    const newCart = new Cart(req.body)
    const DbRes = await newCart.save({ new: true })



    res.status(200).send(DbRes)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const { cartID } = req.params
    const updatedCart = await Cart.findByIdAndUpdate(cartID, req.body, {
      new: true
    })

    res.send(updatedCart)
  } catch (error) {
    next(error)
  }
}

const deleteSingle = async (req, res, next) => {
  try {
    const { cartID } = req.params

    const DbRes = await Cart.destroy(cartID) //S2 destroy

    if (DbRes)
      res.status(204).send()

  } catch (error) {
    next(error)
  }
}

const cart = {
  addProdToCart: addProdToCart,
  getAll: getAll,
  getSingle: getSingle,
  update: update,
  deleteSingle: deleteSingle
}

export default cart