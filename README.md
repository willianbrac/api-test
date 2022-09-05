# **API de gerenciamento de BOOKs com autenticação JWT**

# **Tecnologias Utilizadas**

> **NestJS** - possui uma arquitetura escalável baseada em módulos que permitem o reuso de código</br> > **TypeORM** - possui migrations, entities e anotations que facilitam e aceleram o desenvolvimento</br> > **PostgreSQL** - banco de dados relacional open source que mais utilizo</br> > **GraphQL** - agrega mais flexibilidade para a API e também possui apenas um endpoint</br> > **Docker** - conteinerização da aplicação</br> > **Jest** - facilitar a implementação dos testes</br>

# Como rodar a API

- Para rodar a API, primeiramente, é necessário ter o Docker, Yarn e NODE instalado em sua máquina
- Após baixar esse repositório, abra seu editor de código e execute o comando **yarn** para baixar as depêndencias
- Com o Docker aberto execute o comando **docker-compose up --build -V** para criar os containers
- Com isso no seu docker deve ser criado um container com duas imagens:
  > - Banco de dados Postgres rodando na Porta **5432**</br>
  > - Aplicação NODE.JS rodando na Porta **3003**

#### caso essas portas já estejam sendo utilizado altere os valores no arquivo `.env`

# Rodar os testes

- Execute o comando no terminal
  > `yarn test`

# Documentação

- Após o processo feito acima você pode conferir a documentação que é gerada de forma automática pelo GraphQL no endpoint
  > `http://localhost:3003/graphql`

# Verificar se o Banco de Dados está rodando

- Execute o comando no terminal para acessar o container do postgres
  > `docker exec -it database psql api api`

# Entidades da API

- ACCOUNT { name, email, password }
- AUTHOR { name, books }
- BOOK { title, author, category, synopsis }

# Exemplos de como executar a API no Playground

#### Criar uma ACCOUNT

![Create-account](https://user-images.githubusercontent.com/66275588/188289343-39c36b2e-0894-4d8b-904a-1772370178a7.png)

#### Realizar Login

![login](https://user-images.githubusercontent.com/66275588/188289355-684c618b-df8c-401a-a5cd-549099f3245e.png)

#### Criar um BOOK

![criação do livro](https://user-images.githubusercontent.com/66275588/188289387-a3cd1828-a1a0-49e8-b030-0a16c8611cb2.png)
![token para a criação do livro](https://user-images.githubusercontent.com/66275588/188289420-13734721-36b9-43f3-8acb-f320df0d6797.png)

#### Listar todos os BOOKs

![Listagem de todos os livreos](https://user-images.githubusercontent.com/66275588/188289412-4e101342-830a-42b9-b9bf-ca6d2a4e8918.png)

#### Atualizar um BOOK

![Update book](https://user-images.githubusercontent.com/66275588/188289437-d651a381-f39d-4608-b4f0-0ed2a5532466.png)

#### Deletar um BOOK

![deletando um livro](https://user-images.githubusercontent.com/66275588/188289445-7601622d-5f67-40b1-8cb1-fa168c46c0d0.png)

- Importante ressaltar que todas as operações com os BOOKs são autenticadas
