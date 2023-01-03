import { allUsers } from "./createUserAccount.js";
import searchUserAccountByEmailUseCase from "./searchUserAccountByEmail.js";

const changeUserNameUseCase = (email, newName) => {
    const userFound = searchUserAccountByEmailUseCase(email);
    if (userFound.length > 0) {
        const index = (userFound[0].id -1);
        allUsers[index].nome = newName;
        return true;
    }
    return false;
}

console.log(changeUserNameUseCase('teste@dominio.com', 'novoteste'));

export default changeUserNameUseCase;
