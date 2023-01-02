let allUsers = [];

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

createUserUseCase('teste', 'teste@dominio.com', '123456');
createUserUseCase('teste2', 'teste2@dominio.com', '123456');

export { allUsers, createUserUseCase };