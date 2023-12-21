import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './routes'
import generalRouter from './routes/general.route'
import { AppDataSource } from './config/data.source'

// Configuración
const PORT = process.env.PORT || 3002

const app = express() // Crea el servidor

app.use(cors()) // Puede ser consumida por cualquier origen
app.use(express.json()) // Permite leer JSON

app.use('/api/v1', routes) // Rutas de la API en item
app.use(generalRouter) 

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  }).catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})