import { allUsers } from './createUserAccount.js'


console.log(allUsers[0].email);
const searchUserAccountByEmailUseCase = (emailUser) => {
    const result = allUsers.filter((user) => user.email === emailUser)
    return result;
}

export default searchUserAccountByEmailUseCase;
