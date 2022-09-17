import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, requried: true },
  password: { type: String, required: false },
  tall: { type: Number, required: false },
  weight: { type: Number, required: false },
})

const User = mongoose.model('User', userSchema)

export default User
