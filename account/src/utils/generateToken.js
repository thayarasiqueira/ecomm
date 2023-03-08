import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  const SECRET = process.env.JWT_SECRET || '1f 66 c8 84 dc 8f ea c5 4a 9d f9 59 16 bb cf 6f 9e 39 53 a7 db 08 df 0b 9e 55 42 9f dc c2 df 8e 9e 0e 2a 70 13 a6 ea 93 4c 32 5c b5 e7 7a b3 31 73 c6 e4 a7 84 72 a8 75 c6 c4 69 1e b3 d7 99 de 1d 34 45 34 17 ba 54 d0 75 09 f7 57 6a 73 ab 0f ff 0e ff e7 eb dc 6b 6e cd 78 79 e7 3b f6 e0 d9 36 5d 82 da b8 d4 21 b4 91 0e 11 fb 2f 9f af 06 8e 39 94 15 65 35 11 ea 32 40 09 ba 56 89 14 6f c7 76 c5 87 45 45 8a 77 0f ab 18 88 d6 26 3c 16 7f 90 c6 24 09 ae bc 1c 6f 11 4e 6e 6e c3 83 56 08 26 b6 ae 22 21 59 e7 71 0d 44 f3 25 8d c9 13 56 08 a2 f8 e8 27 2e 76 2f b6 4c db b4 6a 1e bc ee 59 79 25 27 a1 f6 a2 d4 47 89 7a 0b 8b 3d cf ae 48 dd 84 16 f8 87 a6 42 7d 99 f1 1b 53 d5 e0 8c de 8e 56 f8 97 cf 55 f3 6b 39 b7 33 1f ca 94 54 e3 65 e2 50 b3 48 0f 3b be 9a 74 17 92 0d 59';

  const JWT_CONFIG = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({
    id,
  }, SECRET, JWT_CONFIG);

  return token;
};

export default generateToken;
