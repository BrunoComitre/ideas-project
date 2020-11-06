## OK ##
.vscode/settings.json
.gitignore
Pipfile
Pipfile.lock
requirements.txt
Dockerfile
docker-compose.yml
README.md

# KEEP HACKING
![version](https://img.shields.io/badge/version-0.0.1-blue.svg?maxAge=2592000)

Este projeto é um backend do mundo real baseado em django + mongodb. Ele pode ser usado como um back-end de amostra ou um projeto de amostra django com mongodb.

O Keep Hacking estã sendo construído para criar um ambiente para servir modelos de Cybersegurança.

## Requisitos

### Docker

Você deve ter dockere docker-compose como ferramentas instalada para trabalho com material nesta seção. Depois é só executar:
``` docker-compose up -d ```

O aplicativo estará disponível em localhostou 127.0.0.1 em seu navegador.

***

## Começo rápido (Quickstart)

Executar testes:
``` $ docker-compose exec web pytest . ``` (A CRIAR)

Para executar:
``` $  docker-compose up -d --build ``` ou ``` $  ```

Caso precise achar o PATH do Pipenv: 
``` $ pipenv --venv ```

Rodar o servidor: 
``` $  ```

Para executar o aplicativo da web em depuração, use:
``` $  ```

***

## Estrutura do projeto (A CRIAR)
Os arquivos relacionados ao aplicativo estão no app diretório:
```
models  - 
crud    - 
db      - 
core    -
api     - 
manage.py - 
```

```
keep_hacking (EXEMPLO)/
├── api = API e documentação
├── cmd = utilitários e acessórios
├── infra = arquivos de configuração usados ​​pelos servidores de temporariedade e produção
├── lambda = lambda functions
├── scripts = scripts de shell usados ​​pelo CI / CD e outras tarefas administrativas
├── workers = trabalhadores que consomem filas SQS
│
├── app/
│   ├── __init__.py
│   └── models.py
```

### Inicializando uma nova instância com dados de despejo do MongoDB
Quando um contêiner é iniciado pela primeira vez, ele executa arquivos com extensões ``` .sh ```  e ``` .js``` que são encontrados em ``` init_db.``` ``` .js ``` os arquivos serão executados pelo mongo usando o banco de dados especificado pela variável MONGO_INITDB_DATABASE em ``` docker-compose.yml ```, se estiver presente, ou de ``` test ``` outra forma. Você também pode alternar os bancos de dados dentro do script.js.

### Armazene dados do MongoDB no sistema host
O diretório nomeado ``` data_db ``` servirá como um diretório de dados MongoDB no sistema host (fora do contêiner). É fácil para ferramentas e aplicativos no sistema host acessar os arquivos MongoDB a partir deste diretório. O ``` data_db ``` diretório do sistema host é montado ``` /data/db ``` dentro do contêiner, onde o MongoDB, por padrão, gravará seus arquivos de dados.

### Realize a migração do banco de dados no início
Usando a hierarquia docker no ``` docker-compose.yml ```, os serviços ``` make-migration ``` e são ``` migration ``` executados após a configuração do banco de dados, mas antes do início do ``` webs ``` serviço principal. Esta configuração do docker nos ajuda a executar automaticamente os comandos de migração django no aplicativo, uma vez que o banco de dados tenha sido configurado.

### Interface de administração do MongoDB baseada na web
Este exemplo também cria uma interface de usuário baseada na web para MongoDB chamada [mongo-express](https://github.com/mongo-express/mongo-express) por meio da porta 8081.

***

## Rotas da web (A CRIAR)

Todas as rotas estão disponíveis em ```/docs``` ou ```/redoc```, caminhos com Swagger* ou ReDoc.

- [Documentation](http://localhost:8000/docs)
- [Documentation](http://localhost:8000/redoc)

*[Swagger](https://swagger.io/) - O Swagger é uma estrutura de software de código aberto apoiada por um grande ecossistema de ferramentas que ajuda os desenvolvedores a projetar, criar, documentar e consumir serviços da Web RESTful.

***

## TO-D0

- [ ] Melhorar e Limpar Dockerfile e docker-compose
- [ ] Definir ambientes de teste, produção e desenvolvimento
- [ ] Documentar chamadas das rotas
- [ ] Adicionar mais testes unitários
- [ ] Adicionar docstring explicativa em todas as rotas
- [ ] Implementar Swagger
- [ ] https://simpleisbetterthancomplex.com/tutorial/2016/08/01/how-to-upload-files-with-django.html

***

## Referências

DIVERSAS :
- []()
- []()
- []()
- []()

IMPORTANTES  :
- []()
- []()
- []()
- []()

MONGO :
- [MongoDB + mongo-express + docker-compose](https://medium.com/@renato.groffe/mongodb-mongo-express-docker-compose-montando-rapidamente-um-ambiente-para-uso-824f25ca6957)
- [Set up a MongoDB server with Docker](https://linuxhint.com/setup_mongodb_server_docker/)
- [Introduction to MongoDB and Python](https://realpython.com/introduction-to-mongodb-and-python/)

MÓDULE :
- [More Itertools](https://github.com/more-itertools/more-itertools)

ORM :
- []()
- []()
- []()
- []()

FUTURE :
- [requests-toolbelt](https://pypi.org/project/requests-toolbelt/)
- [nltk](https://github.com/nltk/nltk)
- [stanza](https://github.com/stanfordnlp/stanza)

HELP
- []()
- []()
- []()
- []()

LINKS PARA ABRIR :
- []()
- []()
- []()
- []()

IMPLEMENTAR :
- []()
- []()
- []()
- []()

ESTUDAR :
- []()
- []()
- []()
- []()

***
