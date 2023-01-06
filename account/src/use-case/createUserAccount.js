import allUsers from "../mock/users.js"

const createUserUseCase = (nome, email, senha) => {
    allUsers.push({
        id: allUsers.length + 1,
        nome,
        email,
        senha,
        createdDate: new Date().toLocaleDateString('sv'),
    })

    return allUsers;
}

export default createUserUseCase;
