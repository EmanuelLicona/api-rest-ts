import { NextFunction, Request, Response } from 'express'

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.path, req.ip)
  // res.send("NO CONTENT") // Respuesta desde le middleware

  next()
}

export { logMiddleware }