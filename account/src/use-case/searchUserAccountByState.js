import allUsers from '../main.js';

const searchUserAccountByStateUseCase = (state) => {
    const result = allUsers.filter((user) => user.endereco.uf === state);
    if (result.length > 0){
        return result;
    }

    return 'Sem usuários deste local';
}

console.log(searchUserAccountByStateUseCase('SP'));

export default searchUserAccountByStateUseCase;
