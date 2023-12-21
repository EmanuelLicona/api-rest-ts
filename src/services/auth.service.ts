import { IAuth } from '../interfaces/auth.interface'
import { User } from '../models/user.entity'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'

const register = async ({ email, password }: IAuth) => {
  const checkIs = await User.findOneBy({ email })
  if (checkIs) return 'User already exists'

  const passwordHash = await encrypt(password)
  const user = await User.save({ email, password: passwordHash })

  delete user.password
  return user
}

const login = async ({ email, password }: IAuth) => {
  const user = await User.findOneBy({ email })
  if (!user) return 'User not found'

  const passwordHash = user.password
  const isCorrect = await verified(password, passwordHash!)
  if (!isCorrect) return 'Incorrect password'

  const token = generateToken(user.id)

  delete user.password
  return {
    token,
    user
  }
}



export { login, register }