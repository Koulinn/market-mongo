import User from "../../db/models/User.js"

const getAll = async (req, res, next) => {
  try {
    const users = await User.find({})
    res.send(users)
  } catch (error) {
    next(error)
  }
}
const getSingle = async (req, res, next) => {
  try {
    const { userID } = req.params
    const user = await User.findById(userID)
    .populate('cartId')
    .populate('orderHistory')

    res.send(user)
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const newUser = new User(req.body)
    const DbRes = await newUser.save({ new: true })

    res.status(200).send(DbRes)
  } catch (error) {
    next(error)
  }
}

const update = async (req, res, next) => {
  try {
    const { userID } = req.params
    const updatedUser = await User.findByIdAndUpdate(userID, {...req.body}, {
      new: true
    })
    
    res.send(updatedUser)
  } catch (error) {
    next(error)
  }
}

const deleteSingle = async (req, res, next) => {
  try {
    const { userID } = req.params
    
    const DbRes = await User.destroy(userID) 
    
    if (DbRes)
    res.status(204).send()
    
  } catch (error) {
    next(error)
  }
}



const product = {
  create: create,
  getAll: getAll,
  getSingle: getSingle,
  update: update,
  deleteSingle: deleteSingle
}

export default product