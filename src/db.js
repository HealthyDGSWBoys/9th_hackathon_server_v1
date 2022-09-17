import mongoose from 'mongoose'

mongoose.connect(process.env.DB_URL)

const db = mongoose.connection

db.once('open', () => {
  console.log('✅ DB Connected')
})

db.on('error', (e) => {
  console.log(e)
  console.log('❌ DB error')
})

export default db
