# Multrooms-Server 
Este é o back-end do aplicativo Multirooms.

É uma API RESTful construída com o NodeJS + Express + MongoDB que recebe todos os dados relacionados usuários, mensagems  e salas
e registra / fornece ao cliente todos esses dados por meio de uma API REST e uma servidor Socket.io


O principal objetivo desta API é transmitir as mensagems/conversas em tempo real, utilizando um banco de dados não relacional 
(mongoDB com Mongoose) utilizando websockets, e uma API Resfull para cadastro de autenticação de usuários.Assim,
você pode reutilizar todo este código para reproduzir salas de bate-papo ou usá-lo dentro do seu próprio contexto (aplicativo de mensagems, conversas).

# Sobre este projeto
Este projeto faz parte do meu portfólio pessoal, por isso, ficarei feliz se você puder me fornecer qualquer 
feedback sobre o projeto, código, estrutura ou qualquer coisa que possa relatar que possa me tornar um desenvolvedor melhor!

Email-me: oliveira.cristiano@unifesp.br

Conecte-se comigo no LinkedIn

Além disso, você pode usar este projeto como desejar, seja para estudo, seja para fazer melhorias ou ganhar dinheiro com isso!

É grátis!

# Começando
# Pré-requisitos
Para executar este projeto no modo de desenvolvimento, você precisará ter um ambiente básico com o NodeJS 9+ instalado.
Para usar o banco de dados, você precisará ter o MongoDB instalado e em execução na sua máquina na porta padrão (27017).

Instalando
Clonando o repositório

$ git clone https://github.com/cristiano182/multiroomsServer

$ cd multiroomsServer
Instalando dependências

$ yarn

ou

$ npm install
Executando o ambiente de desenvolvimento
Agora, você precisará mudar para o ramo de desenvolvimento:

$ git checkout development
Com todas as dependências instaladas, o banco de dados em execução e o ambiente configurado corretamente, 
você pode agora executar o servidor:

$ yarn dev
ou

$ npm run dev

Executando os Testes

$ yarn test

ou

$ npm run test

# Rotas
O URL base é: http: // localhost: 3000 /

# Rota de teste
Esta é a rota que você pode usar para verificar se a API está sendo executada corretamente.
http: // localhost: 3000


