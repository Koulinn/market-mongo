import Cart from "../../db/models/Cart.js"
import  mongoose  from "mongoose"



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
    const {userId, products} = req.body
    
    const IdToObj = mongoose.Types.ObjectId(products)

    const checkIfIsInCart = await Cart.find({userId : userId, status: "active",  "products.productId": IdToObj})

    if(checkIfIsInCart.length > 0 ){
      const sumProd = await Cart.findOneAndUpdate(
        {userId : userId, status: "active",  "products.productId": IdToObj},
        {
          $inc: {
            "products.$.qty": 1,
          },
        }, {
          new: true,
        }
      )
      res.status(200).send(sumProd)
    } else {
      const newProdToCart = await Cart.findOneAndUpdate(
        {userId : userId, status: "active"},
        {
          $push: {products: {
            productId: products,
            qty: 1
          } }
        }, {
          new: true,
          upsert: true
        })

      res.status(200).send(newProdToCart)
    }

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