import allUsers from "../mock/users.js"
import searchUserAccountByEmailUseCase from "./searchUserAccountByEmail.js";

const createUserAddressUseCase = (email, logradouro, numero, complemento = '', bairro, cep, cidade, uf) => {
    const userFound = searchUserAccountByEmailUseCase(email);
    if (!userFound) {
        return false;
    }
    const index = (userFound.id -1);
    allUsers[index].endereco = {
          logradouro,
          numero,
          complemento,
          bairro,
          cep,
          cidade,
          uf,
        };
    return true;
}

console.log(createUserAddressUseCase('teste@dominio.com', 'Rua Assis Figueiredo', 1350, 'Apto 12', 'Centro', '000000', 'São Paulo', 'SP'));

export default createUserAddressUseCase;
