import Category from "../../db/models/Category.js"



const getAll = async (req, res, next) => {
  try {
    const Categories = await Category.find({})
    res.send(Categories)
  } catch (error) {
    next(error)
  }
}
const getSingle = async (req, res, next) => {
  try {
    const { categoryID } = req.params
    const category = await Category.findById(categoryID)

    res.send(category)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const newCategory = new Category(req.body)
    const DbRes = await newCategory.save({ new: true })

    res.status(200).send(DbRes)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const { categoryID } = req.params
    const updatedCategory = await Category.findByIdAndUpdate(categoryID, req.body, {
      new: true
    })

    res.send(updatedCategory)
  } catch (error) {
    next(error)
  }
}

const deleteSingle = async (req, res, next) => {
  try {
    const { CategoryID } = req.params

    const DbRes = await Category.destroy(CategoryID) //S2 destroy

    if (DbRes)
      res.status(204).send()

  } catch (error) {
    next(error)
  }
}

const category = {
  create: create,
  getAll: getAll,
  getSingle: getSingle,
  update: update,
  deleteSingle: deleteSingle
}

export default category