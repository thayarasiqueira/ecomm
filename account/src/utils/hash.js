import bcrypt from 'bcryptjs';

const SALT = bcrypt.genSaltSync(12);
const encrypt = (password) => bcrypt.hashSync(password, SALT);
const decrypt = (password, hash) => bcrypt.compare(password, hash);

export { encrypt, decrypt };
