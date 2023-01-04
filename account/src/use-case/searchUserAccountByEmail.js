import allUsers from "../mock/users.js"

const searchUserAccountByEmailUseCase = (emailUser) => {
    const result = allUsers.filter((user) => user.email === emailUser)
    if (result.length > 0) {
        return result;
    }
    return "Usuário não encontrado";
}

export default searchUserAccountByEmailUseCase;
