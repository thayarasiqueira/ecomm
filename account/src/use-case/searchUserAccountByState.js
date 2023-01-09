import allUsers from "../mock/users.js"

const searchUserAccountByStateUseCase = (state) => {
    const result = allUsers.filter((user) => user.endereco.uf === state);
    if (result.length > 0){
        return result;
    }

    return `Sem usuários de ${state}`;
}

export default searchUserAccountByStateUseCase;
