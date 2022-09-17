import mongoose from 'mongoose'

const LikeSchema = new mongoose.Schema({
  Question: { type: String, required: true },
  like: { type: Number, default: 0 },
  User: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
})

const Like = mongoose.model('Like', LikeSchema)

export default Like
