# Ecommerce

Projeto de simulação de um ecommerce criado durante o programa LevelUp da Alura.

## Instalação

Suba todos os serviços e instale todas as dependências com docker-compose.

```bash
docker-compose up --build
```

## The Twelve-Factor App

Confira abaixo quais implementações da metodologia foram feitas neste projeto.

### I. Base de Código

Este projeto utiliza este fator ao usar a ferramenta Git para o versionamento de código, também mantendo um repositório como código base no GitHub.

### II. Dependências

Este fator é utilizado aqui ao garantir a completa e explícita especificação e isolamento de dependências de maneira uniforme em cada serviço com o arquivo "package.json" e "package-lock.json".

### III. Configurações

A aplicação do fator configurações é feita através de variáveis de ambiente contidas nos arquivos .env de cada serviço, suportados pela biblioteca "dotenv" e não versionados proteger dados confidenciais.

### IV. Serviços de Apoio

Os serviços de apoio deste projeto (bancos de dados), são tratados como recursos anexados, utilizando ORM, ODM e configurações através de url ou credenciais de config, garantindo assim baixo acoplamento ao código que está anexado, preenchendo portanto os requisitos deste fator.

### V. Construa, lance, execute

Os serviços aqui, conteinerizados e orquestrados pelo Docker, seguem este fator já que o Docker garante o build, release e execute da aplicação de forma consistente.

### VI. Processos

O projeto utiliza o fator processos ao executar a aplicação como um ou mais processos que não armazenam estado. Para o armazenamento destes, são utilizados os serviços de apoio.

### VII. Vínculo de porta

A aplicação é autocontida e independente, exportando o HTTP como um serviço através da vinculação a uma porta, explícitas por exemplo no docker-compose.yml, escutando as requisições que chegam na mesma e consequentemente utilizando o fator vínculo de porta.

### VIII. Concorrência

Considerando que este projeto segue o fator processos e não é monolítico, este fator é seguido devido a possibilidade de escabilidade horizontal.

### IX. Descartabilidade

Este fator é aplicado ao implementar a possibilidade de inicialização e desligamento rápido da aplicação, também facilitada pelo Docker.

### X. Dev/prod semelhantes

O fator que consiste em manter os ambientes de desenvolvimento, teste e produção o mais semelhante possível, foi implementado aqui, já que conteinerizado e orquestrado pelo Docker.

### XI. Logs

Tratar logs como fluxo de eventos foi implementado, já que os logs são direcionados para o console.

### XII. Processos de Admin

Executar tarefas de administração/gerenciamento como processos pontuais não foi implementado neste projeto.

## Microservices

Confira abaixo quais implementações da arquitetura foram feitas neste projeto.

### - Serviços de domínio

O projeto utiliza este padrão ao iniciar com foco na modelagem do domínio e, apenas posteriormente, na persistência de dados. Outro indicativo é o desenvolvimento de APIs RESTful em todos os serviços.

### - Serviços de negócio

Também com foco na modelagem do domínio, neste caso os serviços de negócio podem ser observados aqui em operações que exigem interações entre mais de um domínio. Como por exemplo, a confirmação do pagamento de um pedido envolver os serviços "order" e "finance".

### - API Gateway

Um API Gateway, sendo um ponto único de entrada das requisições, foi implementado como um dos serviços e utilizada para centralizar a autorização através de token válido e um rate limit em todos os serviços.

### - Agregador de processos

Como utilizamos aqui os serviços de negócio, o agregador de processos também foi útil ao realizar a agregação de mais de um processo em uma requisição.

### - Edge service

Este padrão não foi implementado, considerando que até o momento, apenas o API Gateway já satisfaz as necessidades da aplicação.

### - Single database vs Bancos diferentes

Neste ecommerce, bancos diferentes são adotados para cada serviço, facilitando a independência e escalabilidade de cada um.

### - Eventos assíncronos‌

Alguns eventos assíncronos foram implementados neste projeto para garantir o funcionamento adequado da aplicação.

### - Agregação de logs

A agregação de logs ainda não foi implementada, já que faria mais sentido implementar quando for feito o deploy da aplicação.

### - Agregação de métricas

A agregação de métricas ainda não foi implementada, já que faria mais sentido implementar quando for feito o deploy da aplicação.
