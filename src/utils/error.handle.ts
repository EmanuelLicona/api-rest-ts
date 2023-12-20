import { Response } from 'express'

export const HandleHttpError = (res: Response, error: string) => {
  res.status(500)
  res.send({ error })
}