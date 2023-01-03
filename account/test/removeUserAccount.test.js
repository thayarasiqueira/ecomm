import removeUserUseCase from "../src/use-case/removeUserAccount.js";
import searchUserAccountByEmailUseCase from "../src/use-case/searchUserAccountByEmail.js";

console.log(removeUserUseCase('teste@dominio.com'));
console.log(searchUserAccountByEmailUseCase('teste@dominio.com'));
