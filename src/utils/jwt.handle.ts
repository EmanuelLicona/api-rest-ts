import "dotenv/config"
import { sign, verify } from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET

const generateToken = (id: string) => {
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined")

  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "2h" })
  return jwt
}

const verifyToken = (jwt: string) => {
  if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined")
  const isOk = verify(jwt, JWT_SECRET)
  return isOk
}

export { generateToken, verifyToken }