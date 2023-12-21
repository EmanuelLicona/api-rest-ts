import { Request, Response } from 'express'
import { HandleHttpError } from '../utils/error.handle'

import { login, register } from '../services/auth.service'

export const loginCtrl = async (req: Request, res: Response) => {
  try {
    // const resp = await login(req.body)
    res.send('LOGIN OK')
  } catch (error) {
    HandleHttpError(res, 'ERROR_LOGIN_USER')
  }
}

export const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const resp = await register(body)
    // const resp = await login(req.body)
    res.send(resp)
  } catch (error) {
    HandleHttpError(res, 'ERROR_REGISTER_USER')
  }
}