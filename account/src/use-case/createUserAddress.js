import { allUsers } from "./createUserAccount.js";
import searchUserAccountByEmailUseCase from "./searchUserAccountByEmail.js";

const createUserAddressUseCase = (email, logradouro, numero, complemento = '', bairro, cep, cidade, uf) => {
    const userFound = searchUserAccountByEmailUseCase(email);
    if (userFound.length > 0) {
        const index = (userFound[0].id -1);
        allUsers[index].endereco = {
              logradouro,
              numero,
              complemento,
              bairro,
              cep,
              cidade,
              uf,
            };
        console.log(allUsers[index]);
        return true;
    }
    return false;
}

export default createUserAddressUseCase;
