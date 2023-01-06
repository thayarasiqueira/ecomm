import allUsers from "../mock/users.js"
import searchUserAccountByEmailUseCase from './searchUserAccountByEmail.js';

const removeUserUseCase = (email) => {
    const userFound = searchUserAccountByEmailUseCase(email);
    if (!userFound) {
        return false;
    }
    allUsers.splice((userFound.id - 1), 1)
    return true;
}

export default removeUserUseCase;
