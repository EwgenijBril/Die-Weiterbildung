import bcrypt from 'bcrypt'

const hashPassword = password => {
  const salt = bcrypt.genSaltSync(); // минимум 4, по умолчанию 10
  return bcrypt.hashSync(password, salt)
}

const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

export { hashPassword, comparePassword }