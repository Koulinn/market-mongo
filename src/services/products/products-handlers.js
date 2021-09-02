import Product from "../../db/models/Product.js"

const getAll = async (req, res, next) => {
  try {
    const Products = await Product.find()
    .populate('category')
    res.send(Products)
  } catch (error) {
    next(error)
  }
}
const getSingle = async (req, res, next) => {
  try {
    const { productID } = req.params
    const product = await Product.findById(productID)
    .populate('category')
    console.log(product)

    res.send(product)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body)
    const DbRes = await newProduct.save({ new: true })

    res.status(200).send(DbRes)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const { productID } = req.params
    const updatedCategory = await Product.findByIdAndUpdate(productID, req.body, {
      new: true
    })
    
    res.send(updatedCategory)
  } catch (error) {
    next(error)
  }
}

const deleteSingle = async (req, res, next) => {
  try {
    const { productID } = req.params
    
    const DbRes = await Product.destroy(productID) 
    
    if (DbRes)
    res.status(204).send()
    
  } catch (error) {
    next(error)
  }
}



const getByCategory = async (req, res, next) => {
  try {
    const { categoryID } = req.params
    const DbRes = await Product.find({category: categoryID })
    .populate("category")

    if (DbRes)
      res.status(200).send(DbRes)

  } catch (error) {
    next(error)
  }
}

const product = {
  create: create,
  getAll: getAll,
  getSingle: getSingle,
  update: update,
  deleteSingle: deleteSingle,
  getByCategory:getByCategory
}

export default product