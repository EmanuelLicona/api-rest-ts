import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'

export interface IRequestAuth extends Request {
  user?: { id: string } | JwtPayload
}