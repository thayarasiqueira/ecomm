import { allUsers } from './createUserAccount.js'

const searchUserAccountByEmailUseCase = (emailUser) => {
    const result = allUsers.filter((user) => user.email === emailUser)
    return result;
}

export default searchUserAccountByEmailUseCase;
