<h1 align="center">
  Task Tracker API ✅
  <br>
</h1>

# O Desafio

Criar uma API seguindo o padrão REST contendo duas entidades: usuários e suas tarefas.

## Requisitos

Padrão MVC (como não há front-end, não há View).<br>
Utilizar os 4 principais verbos HTTP seguindo padrão REST.<br>
Implementar todas as operações CRUD.<br>
Utilizar um DAO (data access object).<br>
Utilizar o README.md (olá!) para fins de documentação.<br>
Hospedat o código fonte no github (olá!).<br>

# Como começar

## Instalando dependências

Primeiramente, depois de baixar os arquivos para um repositório local, acesse o diretório em um promt de comando.
Depois, utilize o comando `npm install` para instalar todas as dependências do projeto, detalhadas no arquivo
`package.json`:
```shell
    npm install
```

Dependências instaladas, é necessário executar alguns arquivos para criar o banco de dados.

## Banco de dados

Ainda no terminal, acesse a pasta `/src/database`:
```shell
    cd ./src/database
```
Uma vez no diretório, execute dois arquivos nesta ordem: `create-and-populate.js` e `db-sqlite.js`:
```shell
    node create-and-populate.js
```

```shell
    node db-sqlite.js
```

## Finalmente...
Agora, com as dependências instaladas e um banco de dados funcionando localmente, basta executar:


```shell
    npm start
```

# O Projeto

Esse projeto utiliza NodeJS e a biblioteca/framework ExpressJS. A idéia principal é criar uma API que possa ser
consumida por vários front-ends. É necessária, então, a utilização de middlewares robustos e diligência
na escrita de código seguro que trate de possíveis erros de requisição. Para esse fim, dois caminhos e cinco
funcionalidades bastante genéricas foram implementadas.

# Caminhos

## User

Através do caminho "/user" é possível acessar e manipular usuários. Um total de cinco rotas foram criadas a partir
desse caminho.

### GET todos os usuários

Um simples GET na rota "/user" retorna todos os usuários presentes no banco de dados.

### GET usuário por ID

É possível, também, passar o ID desejado com o verbo GET para receber apenas um usuário.

### POST usuário novo

A API também fornece a possibilidade de criar um usuário novo, mas apenas se o body da request, em JSON, passar por todos os
testes da middleware. Isso garante que apenas usuários com nome, email, e senha possam ser cadastrados. A API gera um ID novo.

### DELETE usuário por ID

Bastante auto-explicativo. Fornecendo um ID válido e o verbo DELETE no caminho "/user" deleta o usuário.

### UPDATE usuário por ID

Também é possível modificar um usuário fornecendo o ID de um usuário já existente e um body válido.

## Task

De forma análoga ao caminho "/user", o endereço "/task" fornece a possibilidade de acessar e manipular tarefas.
Cinco rotas adicionais foram criadas a partir desse caminho.

### GET todas as tarefas

Um GET sem parâmetros no caminho "/task" retorna todas as tarefas presentes no banco de dados.

### GET tarefa por ID

Já um verbo GET com um parâmetro de ID retorna apenas a tarefa desejada.

### POST tarefa nova

Assim como é possível criar um usuário novo, a API permite a criação de tarefas novas. Basta utilizar o verbo HTTP POST,
o caminho "/task" e um body que possa ser validado pelo middleware.

### DELETE tarefa por ID

Deleta a tarefa que contém o ID passado como parâmetro de rota.

### UPDATE tarefa por ID

Modifica a tarefa que contém o ID passado como parâmetro de rota utilizando os dados fornecidos no body do request.

