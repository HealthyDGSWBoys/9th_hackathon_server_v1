import mongoose from 'mongoose'

const bookMark = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, required: true },
})
