import mongoose from 'mongoose'

const TrySchema = new mongoose.Schema({
  questionOwner: { type: String, required: true },
  try: { type: Number, required: true, default: 0 },
  tryUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  success: { type: Boolean, default: false },
})

const Try = mongoose.model('Try', TrySchema)

export default Try
