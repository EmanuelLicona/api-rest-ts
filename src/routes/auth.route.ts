import { Request, Response, Router } from 'express'
import { loginCtrl, registerCtrl } from '../controllers/auth.controller'


const router = Router()

router.post('/auth/register', registerCtrl)
router.post('/auth/login', loginCtrl)

export default router