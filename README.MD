# Instruções do Desafio

## VUTTR - VERY USEFUL TOOLS TO REMEMBER

Sua tarefa é construir um front-end para a aplicação VUTTR (Very Useful Tools to Remember). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags. Utilize um repositório Git (público, de preferência) para versionamento e disponibilização do código.

**O front-end deve ser construído utilizando o framework JavaScript Angular ou React.**

### O que será avaliado

Queremos avaliar sua capacidade de desenvolver e documentar um front-end para uma aplicação com back-end pronto. Serão avaliados:

[ ] Código bem escrito e limpo;
[ ] Quais ferramentas foram usadas, como e por quê;
[ ] Seu conhecimento em JavaScript, HTML e CSS;
[ ] Sua capacidade de se comprometer com o que foi fornecido (wireframe, styleguide);
[ ] Sua capacidade de documentação da sua parte da aplicação.

### O mínimo necessário

[ ] As telas seguindo os wireframes a seguir e utilizando a API construída por você no desafio anterior;
[ ] Readme.md contendo informações básicas do projeto e como executá-lo.

### Bonus

Os seguintes itens **não são obrigatórios**, mas darão mais valor ao seu trabalho (os em negrito são mais significativos para nós).

[ ] **Testes de front-end**;
[ ] **Conventional Commits**
[ ] Uso de ferramentas externas que facilitem o seu trabalho;
[ ] Cuidados especiais com otimização, SEO, entre outros;
[ ] **Deploy da aplicação utilizando ferramentas externas (Netlify, S3, Firebase, etc);**
[ ] Pipeline de deploy contínuo
[ ] Sugestões sobre o challenge embasadas em alguma argumentação.

### **Conclusão**

Quando terminar de realizar os dois desafios você deverá gravar um vídeo de no máximo 35 minutos contando para a gente esses principais pontos:

[ ] - Compartilhe sua tela no vídeo e mostre o que você construiu no desafio, passando sobre o código e o resultado, e os pontos que você julga importante para o funcionamento dele;
[ ] - As decisões que teve que tomar para construí-lo;
[ ] - Ferramentas utilizadas e por quê;

# Resolução

## React

Foi escolhido o framework React, pois é um framework que tenho mais afinidade com seu funcionamento e por conhecer mais bibliotecas que auxiliam no desenvolvimento.

## Node

Também escolhi node pela facilidade e familiaridade com a ferramenta, para o banco de dados foi usado o SQLite por ser um projeto simples, e como ORM foi utilizado o prisma.

## Funcionamento
[x] - Conventional Commits, para separação e detalhamento das etapas do projeto;
[x] - Ferramentas externas: Foram usadas as seguintes ferramentas:
  - react-hook-form: Para controle do formulário, validações e otimização das etapas do formulário;
  - zod: Zod é uma primeira declaração de esquema e biblioteca de validação do TypeScript, utilizando juntamente com o hook form pelo *@hookform/resolvers*;
  - radix-ui: é uma biblioteca de componentes de interface do usuário de baixo nível com foco em acessibilidade, personalização e experiência do desenvolvedor.
  - stitches: é uma biblioteca de estilo leve e de alto desempenho com foco na arquitetura de componentes e na experiência do desenvolvedor;
  - axios: cliente http para as requisições dentro do projeto;
  - tailwindcss: Um framework CSS de primeira utilidade repleto de classes. Junto com ele foi usado a biblioteca *classnames*;
  - phosphor-react: Pacote de ícones de fácil utilização para React e outros frameworks javascript;
  - zustand: State management para react, utilizando para criar funcionalidades no sistema, baseado em hooks e para controle do estado e compartilhamento sem a necessidade de um provider;
  - express: o express um framework para nodejs oferece soluções para: Gerenciar requisições de diferentes verbos HTTP em diferentes URLs. Integrar "view engines" para inserir dados nos templates. Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
  - prismaORM: Prisma é uma ferramenta open source, um ORM de próxima geração cuja arquitetura é desenhada em três camadas fundamentais: Prisma client, Prisma migrate, Prisma studio;

### Iniciar o projeto

Após clonar o projeto dentro da pasta **backend** somente executar:
```shell
npm i
```
Depois de instalado as dependências execute:
```shell
npm run dev
```
com isso o servidor vai ser estartado na porta 3333

Caso queria consultar o banco de dados, pode ser utilizar o **prisma studio**
```shell
npx prisma studio
```

Ja no dentro da pasta **frontend** deve executar os mesmos comandos:
```shell
npm i
```
Depois de instalado as dependências execute:
```shell
npm run dev
```
O frontend do projeto vai ser executado na porta 3000;