import 'dotenv/config'
import app from './app'
import './db'

app.listen(process.env.PORT, () => {
  console.log('✅ Server running...')
})
