# basicAPI
Desenvolvi essa API básica na condução de uma monitoria de revisão junto a estudantes da Trybe 

 - Node.js
 - Express

## Requisitos

1) Crie uma rota /filmes, com método GET, que retorna um array de filmes;

2) Crie uma rota /login, com método POST, sendo que:
  - o body da requisição deve conter um email e uma senha com pelo menos 6 dígitos;
  - deve ser retornado, na resposta, um token de números e letras de 10 dígitos;

3) Crie uma rota /filme/:id, com método PUT, sendo que:
  - é necessário receber um token de 10 dígitos;
  - o body da requisição deve conter o nome e o ano do filme a ser editado;

4) Crie uma rota /filme/:id, com método DELETE, sendo que:
  - é necessário receber um token de 10 dígitos;
  - o body da requisição deve conter o nome e o ano do filme a ser editado;

Para começar:
npm init -y
npm i express
npm i nodemon -D

STATUS que devemos utilizar: 
  200: OK,
  401: Unauthorized,
  404: Not Found,
  400: Bad Request,

Utilizar a porta 3000
