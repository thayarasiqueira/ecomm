import { allUsers } from './createUserAccount.js';
import searchUserAccountByEmailUseCase from './searchUserAccountByEmail.js';

const removeUserUseCase = (email) => {
    const userFound = searchUserAccountByEmailUseCase(email);
    if (userFound.length > 0) {
        allUsers.splice((userFound.id - 1), 1)
        return true;
    }
    return false;
}

export default removeUserUseCase;
