import { Request, Response, Router } from 'express'
import multerMiddleware from '../middleware/file'
import { getFile } from '../controllers/upload.controller'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

router.post('/upload', multerMiddleware.single('file'), getFile)

export default router