import { Request, Response } from 'express'
import { HandleHttpError } from '../utils/error.handle'

import { login, register } from '../services/auth.service'

export const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const resp = await login(body)
    res.send(resp)
  } catch (error) {
    HandleHttpError(res, 'ERROR_LOGIN_USER')
  }
}

export const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const resp = await register(body)
    res.send(resp)
  } catch (error) {
    HandleHttpError(res, 'ERROR_REGISTER_USER')
  }
}