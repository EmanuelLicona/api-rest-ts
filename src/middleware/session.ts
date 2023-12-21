import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { IRequestAuth } from '../interfaces/request.interface'

const checkJwtMiddleware = (req: IRequestAuth, res: Response, next: NextFunction) => {
  try {

    const jwt = req.headers.authorization?.split(' ').pop() || null
    const isUser = verifyToken(`${jwt}`)

    if (!isUser) {
      res.status(401)
      res.json({ error: 'Unauthorized' })
      return
    }

    req.user = {
      id: isUser
    }

    next()
  } catch (error) {
    res.status(401)
    res.json({ error: 'Unauthorized' })
  }
}

export { checkJwtMiddleware }