import allUsers from "../mock/users.js"
import searchUserAccountByEmailUseCase from './searchUserAccountByEmail.js';

const removeUserUseCase = (email) => {
    const userFound = searchUserAccountByEmailUseCase(email);
    if (userFound.length > 0) {
        allUsers.splice((userFound[0].id - 1), 1)
        return true;
    }
    return false;
}

export default removeUserUseCase;
