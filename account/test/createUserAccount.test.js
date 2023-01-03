import { createUserUseCase, allUsers } from "../src/use-case/createUserAccount.js";

console.log(createUserUseCase('teste', 'teste@dominio.com', '123456'));
console.log(allUsers.length);
