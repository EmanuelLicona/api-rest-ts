import { hash, compare } from 'bcryptjs'

const encrypt = async (password: string) => {
  const salt = await hash(password, 8)
  return salt
}

const verified = async (password: string, hash: string) => {
  const isMatch = await compare(password, hash)
  return isMatch
}

export { encrypt, verified }