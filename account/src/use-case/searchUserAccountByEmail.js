import allUsers from "../mock/users.js"

const searchUserAccountByEmailUseCase = (emailUser) => {
    const result = allUsers.find((user) => user.email === emailUser)
    if (!result) {
        return "Usuário não encontrado";
    }
    return result;
}

export default searchUserAccountByEmailUseCase;
