## API Restful Javascript com Node.js, Typescript, TypeORM etc

Seja muito bem-vindo e bem-vinda: **API Restful Javascript com Node.js, Typescript, TypeORM etc**, aqui você verá uma API de vendas, com os módulos de produtos, usuários, clientes e pedidos de compras, além vários outros recursos, incluindo o uso do TypeORM, upload de arquivos, autenticação com JWT, sistema de cache com o Redis, e muito mais.

Você precisará do Docker instalado em seu ambiente de desenvolvimento para rodar Postgres e Redis.

### Instalando o projeto no seu PC

Instale o projeto em seu ambiente de desenvolvimento seguindo as etapas a seguir.

> NOTA: caso o seu PC esteja com Windows, recomendo trabalhar com um WSL Ubuntu. Acesse o link https://www.aluiziodeveloper.com.br/ambiente-de-desenvolvimento-no-windows-10-11-com-wsl/ para mais informações.

1. No Shell, clonar o repositório do projeto em seu PC.

```shell
git clone https://github.com/conexnetworks/apivendas2024-course-start-code.git api-vendas-2024
```

2. No Shell, acessar a pasta do projeto e instalar as dependências com o `Npm`.

```shell
cd api-vendas

npm ci
```

3. No Shell, executar o comando `code .` para abrir o Visual Studio Code com o projeto carregado.

4. Criar o arquivo de variaveis de ambiente `.env` na pasta raiz do projeto, incluindo o conteúdo a seguir:

```shell
# Application
PORT=3333
API_URL=http://localhost:3333
```

### Executando o projeto em seu PC

```shell
npm run dev
```
