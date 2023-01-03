import allUsers from '../main.js';

const createUserUseCase = (nome, email, senha) => {
    allUsers.push({
        id: allUsers.length + 1,
        nome,
        email,
        senha,
        createdDate: new Date().toISOString(),
    })

    return allUsers;
}

export default createUserUseCase;
