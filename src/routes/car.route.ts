import { Router } from 'express'
import { createCar, deleteCar, getAllCars, getOneCar, updateCar } from '../controllers/car.controller'
import { logMiddleware } from '../middleware/log'
import { checkJwtMiddleware } from '../middleware/session'

const router = Router()

// Middlewares
router.use(logMiddleware) // Nivel de router

router.get('/car', checkJwtMiddleware, getAllCars)
router.get('/car/:id', getOneCar)
router.post('/car', createCar)
router.put('/car/:id', updateCar)
router.delete('/car/:id', deleteCar)


export default router