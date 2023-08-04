
# Angular Architecture Study - (Ermac)

# Pausado, por motivo de estudos apenas em Back-End

&nbsp;

Ermac é uma API para estudos de arquitetura escrito em Angular. Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 12.0.0.

Este projeto é um exemplo de arquitetura utilizando novas tecnologias e melhores práticas.

O objetivo é compartilhar conhecimento e usá-lo como referência para novos projetos.

[![Run on Repl.it](https://repl.it/badge/github/erdkse/adminlte-3-angular)](https://repl.it/github/erdkse/adminlte-3-angular)

&nbsp;

***

## Práticas

- Arquitetura Limpa
- Código Limpo
- Princípios SOLID
- Separação de preocupações
- DDD (Domain-Driven Design)

***

## Prerequisites

- [Visual Studio](https://visualstudio.microsoft.com)
- [Node](https://nodejs.org)
- [Angular CLI](https://cli.angular.io)
- [Docker](https://www.docker.com/get-started)

***

## Camadas (A DESCREVER)

**Web:** Frontend and API.

**Application:** Flow control.

**Domain:** Business rules and domain logic.

**Model:** Data transfer objects.

**Database:** Data persistence.

***

## TO-DO

- [ ] Pesquisar cokkiecutter angular, Feature-modules
- [ ] Descrever camadas em ``` ./app ```

***

## Admin LTE 3.1.0 - Angular 12.0.0

Para fazer login no site, use:

`usuário:` admin@example.com<br />
`senha:` admin<br />

***

## Estudo Angular

- **Componentes:** {View} - Aquilo que o usuário irá ver
  - Encapsula:
    - Template: Código HTML mostrado ao usuário
    - Metadata: Processamento das Classes
    - Data Binding: Dado a ser mostrado na tela
    - Comportamento da VIEW

- **Diretivas:** Responsável por modificar elementos DOM e/ou seu comportamento

- **Roteamento:** Responsável pela navegação

- **Serviços:** Responsável pela lógica de negócio e comunicação com o Back-End
  - Pode ter injeção de dependência em outras classes

- **Template:** Código HTML mostrado ao usuário

- **Metadata:** Processamento das Classes

- **Data Binding:** Dado a ser mostrado na tela

- **Injecçao Dependência:** Visa remover dependências desnecessárias entre as classes

***

## Configuração e Comandos Iniciais

**Instalar Dependências:** Para instalar dependências, apenas execute ` npm install --force ` no caminho ` ./ `.

**Configurar .env:** Após instalar as dependências, configure seu arquivo ` .env `, via comando: ` cp .env.example .env `.

**Criação de Componente:** Execute ` ng generate component-name ` para gerar um novo componente. Você também pode usar ` ng generate Directive |pipe|service|class|guard|interface|enum|module `.

**Build:** Execute ` ng build ` para construir o projeto. Os artefatos de construção serão armazenados no diretório ` dist/ `. Use o sinalizador ` --prod ` para uma construção de produção.

**Executando testes de unidade:** Execute ` ng test ` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

**Executando testes end-to-end:** Execute ` ng e2e ` para executar os testes de ponta a ponta via [Protractor](http://www.protractortest.org/).

**Ajuda:** Para obter mais ajuda sobre o Angular CLI, use ` ng help ` ou verifique o [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

***

## Referências

**[Angular]**
- [Website](https://angular.io/)
- [Blog](https://blog.angular-university.io/)
- [Universidade](https://angular-university.io/home)
- [Youtube](https://www.youtube.com/angular)
- [Repositório](https://github.com/angular/angular)

**[Template Usado Inicial]**
- [adminlte-3-angular](https://github.com/erdkse/adminlte-3-angular)

**[Arquitetura Usada Inicial]**
- [rafaelfgx/Architecture](https://github.com/rafaelfgx/Architecture)

**[Nome API]**
- [Ermac - Mortal Kombat Fandom](https://mortalkombat.fandom.com/pt/wiki/Ermac)

## Links de Ajuda para Estudo e Pesquisa

**[Developer Mozilla]**
- [HTML: Linguagem de Marcação de Hipertexto](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Tecnologia Web para desenvolvedores](https://developer.mozilla.org/pt-BR/docs/Web)

**[W3Schools]**
- [HTML Tutorial](https://www.w3schools.com/html/default.asp)
- [CSS Tutorial](https://www.w3schools.com/css/default.asp)
- [W3Schools Online Web Tutorials](https://www.w3schools.com/)

**[Boas Práticas]**
- [OOCSS, SMACSS, BEM, DRY CSS: afinal, como escrever CSS?](https://tableless.com.br/oocss-smacss-bem-dry-css-afinal-como-escrever-css/)
- [Falando sobre RSCSS](https://willianjusten.com.br/falando-sobre-rscss/)
- [SUIT CSS](https://github.com/suitcss/suit)
- [RSCSS e DRY CSS](https://www.google.com/search?q=RSCSS+e+DRY+CSS&sxsrf=ALeKk02YmlzHgLUAJ1qQ06JlMoZeQtakYw%3A1620762187778&ei=S96aYP37LtDl_QbL0q7wAg&oq=RSCSS+e+DRY+CSS&gs_lcp=Cgdnd3Mtd2l6EAM6BwgjELADECc6BwgAEEcQsAM6AggAOgQIABAeOgYIABAKEB46BQgAEMsBOgYIABAWEB46CAgAEBYQChAeOgUIIRCgAToECCEQFVC-uElYmsZJYI7KSWgBcAJ4AYABsASIAdoZkgEJMi05LjAuMS4xmAEAoAEBqgEHZ3dzLXdpesgBCsABAQ&sclient=gws-wiz&ved=0ahUKEwi9zd7TscLwAhXQct8KHUupCy4Q4dUDCA4&uact=5)
- [Angular Service Layers: Redux, RxJs and Ngrx Store - When to Use a Store And Why?](https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/)

**[Utilitários]**
- [Babel](https://babeljs.io/)
- [ECMAScript 6](http://es6-features.org/#Constants)

***

## modificações
adminlte

***
