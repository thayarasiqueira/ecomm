import allUsers from "../mock/users.js"
import searchUserAccountByEmailUseCase from "./searchUserAccountByEmail.js";

const changeUserNameUseCase = (email, newName) => {
    const userFound = searchUserAccountByEmailUseCase(email);
    if (!userFound) {
        return false;
    }
    const index = (userFound.id -1);
    allUsers[index].nome = newName;
    return true;
}

export default changeUserNameUseCase;
