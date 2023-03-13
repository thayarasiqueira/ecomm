# Ecommerce

Projeto de simulação de um ecommerce criado durante o programa LevelUp da Alura.

## Instalação

Use o gerenciador de pacotes [npm](https://www.npmjs.com/) para instalar as dependências em cada serviço.

```bash
npm install
```

## The Twelve-Factor App

Confira abaixo quais implementações da metodologia foram feitas neste projeto.

#### I. Base de Código
Este projeto utiliza este fator ao usar a ferramenta Git para o versionamento de código, também mantendo um repositório como código base no GitHub.
#### II. Dependências
Este fator é utilizado ao utilizar a completa e explícita especificação e isolamento de dependências de maneira uniforme tanto para produção quanto para desenvolvimento em cada serviço.
#### III. Configurações
A aplicação do fator configurações é feita através de variáveis de ambiente contidas nos arquivos .env de cada serviço, suportados pela biblioteca "dotenv" e não versionados para manter a integridade de dados sensíveis.
#### IV. Serviços de Apoio
Os serviços de apoio deste projeto (bancos de dados), são tratados como recursos anexados, utilizando ORM, ODM e configurações através de url ou credenciais de config, garantindo assim baixo acoplamento ao código que está anexado, preenchendo portanto os requisitos deste fator.
#### V. Construa, lance, execute
Considerando que este projeto não passou por nenhum deploy, este fator, que consiste na separação estrita dos builds e execute em estágios, ainda não foi implementado no projeto.
#### VI. Processos
O projeto utiliza o fator processos ao executar a aplicação como um ou mais processos que não armazenam estado. Para o armazenamento destes, são utilizados os serviços de apoio.
#### VII. Vínculo de porta
A aplicação é autocontida e independente, exportando o HTTP como um serviço através da vinculação a uma porta, escutando as requisições que chegam na mesma e consequentemente utilizando o fator vínculo de porta.
#### VIII. Concorrência
Considerando que este projeto aplica o fator processos, também aplica o fator concorrência, que permite a escalabilidade da aplicação baseada em um modelo de processo.
#### IX. Descartabilidade
Este fator é aplicado ao implementar a possibilidade de inicialização e desligamento rápido da aplicação.
#### X. Dev/prod semelhantes
O fator que consiste em manter os ambientes de desenvolvimento, teste e produção o mais semelhante possível, ainda não foi implementado, já que a o projeto não concluiu nenhum deploy até o momento.
#### XI. Logs
Tratar logs como fluxo de eventos ainda não foi implementado neste projeto.
#### XII. Processos de Admin
Executar tarefas de administração/gerenciamento como processos pontuais ainda não foi implementado neste projeto.