import bcrypt from 'bcryptjs';

const SALT = bcrypt.genSaltSync(12);
const hashPassword = (password) => bcrypt.hashSync(password, SALT);

export default hashPassword;
