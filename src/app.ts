import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './routes'

const PORT = process.env.PORT || 3002

const app = express() // Crea el servidor
app.use(cors()) // Puede ser consumida por cualquier origen
app.use(routes) // Rutas de la API en item

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})