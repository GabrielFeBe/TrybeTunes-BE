# Back-End do TrybeTunes

## Descrição

O back-end do projeto é desenvolvido em Nest.js e utiliza o TypeORM para lidar com as operações de banco de dados. Ele oferece funcionalidades relacionadas às contas de usuários, autenticação, e gerenciamento de favoritos. O sistema de autenticação é baseado em tokens JWT (JSON Web Token), proporcionando uma camada de segurança para rotas restritas.

## Estrutura de Diretórios

- **src/**
  - **account/**
    - `account.controller.ts`: Controller para criar, obter e editar contas de usuário.
    - `account.service.ts`: Service para manipulação de dados relacionados a contas de usuário.
    - `account.entity.ts`: Entity TypeORM para a tabela de contas no banco de dados.
  - **auth/**
    - `auth.controller.ts`: Controller para autenticação, incluindo a geração de tokens JWT.
    - `auth.guard.ts`: Guard de autenticação para restringir o acesso a rotas protegidas.
  - **favorites/**
    - `favorites.controller.ts`: Controller para criar e deletar favoritos, associando-os a uma conta específica.
    - `favorites.service.ts`: Service para manipulação de dados relacionados a favoritos.
    - `favorites.entity.ts`: Entity TypeORM para a tabela de favoritos no banco de dados.
  - **common/**
    - `utils/`: Decoradores personalizados, incluindo `@public()` para rotas sem validação de token.

## Rotas Principais

- **/account/**

  - `POST /create`: Cria uma nova conta de usuário.
  - `GET /:id`: Obtém os detalhes de uma conta específica.
  - `PUT /:id`: Edita os detalhes de uma conta existente.

- **/auth/**

  - `POST /login`: Autentica um usuário e gera um token JWT.

- **/favorites/**
  - `POST /create`: Cria um novo favorito associado a uma conta específica.
  - `DELETE /:id`: Deleta um favorito específico.

## Uso de Validações

O projeto utiliza o `class-validator` para realizar validações de dados, garantindo a integridade e consistência das informações fornecidas nas requisições.

## Instalação e Execução

1. Clone o repositório: `git clone git@github.com:GabrielFeBe/TrybeTunes-BE.git`
2. Instale as dependências: `npm install`
3. Configure o banco de dados no arquivo `app.module.ts`
4. Execute o servidor: `npm start`

## Tecnologias Utilizadas

- Nest.js
- TypeORM
- JSON Web Token (JWT)
- Class Validator

## Segurança

- Não foi criada validação para checar se o usuario que está atualizando conta, deletando favorito ou criando favorito é o mesmo que está logado, caso queira fazer é simples não fiz pois não é necessario para o projeto.

## Contribuição

Contribuições são bem-vindas! Para sugestões, problemas ou melhorias, por favor, abra uma issue ou envie um pull request.
