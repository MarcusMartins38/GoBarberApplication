# GoBarberApplication

#### Linguagens: <a href="https://github.com/MarcusMartins38/GoBarberApplication">Inglês<a/> ou Português

<p align="center">
<img src="./.github/LogIn.png" width=550 align="center" />
</p>

## Sumário
[Introdução](#introdução) :door:  
[Como a Aplicação Funciona](#como-a-aplicação-funciona) :open_book:  
[Algumas das Tecnologias](#algumas-das-tecnologias) :computer:  
[Passo a passo](#passo-a-passo) :open_book:  

## Introdução

GoBarber é um aplicativo para fazer agendamentos com um cabeleireiro, e o cabeleireiro pode ver os agendamentos que ele possui com seus clientes

- Node.js para back-end;
- React.js para front-end;
- React Native para mobile.

## Como a Aplicação Funciona
No site do aplicativo, você pode cadastrar uma conta, receber um e-mail caso tenha esquecido a senha, ver seu perfil, alterar sua foto, e alguns outros dados do seu perfil


<p align="center">
<img src="./.github/perfil.gif" width=750 align="center" />
</p>
  
E no celular, você pode ver os compromissos que seus clientes marcam com você, e você pode agendar qualquer consulta com outro cabeleireiro

 
<p align="center">
<img src="./.github/MobileGif.gif" width=250 height align="center" />
</p>


## Algumas das Tecnologias

**Back-End (NodeJS com TypeScript): Postgres, mongodb, redis**  
Algumas das bibliotecas utilizadas:
- Express
- typeorm
- AWS
- bcryptjs
- celebrate  
- cors
- date-fns

**Front-End (ReactJS com TypeScript)**  
Algumas das bibliotecas utilizadas:
- axios
- date-fns
- polished
- react-day-picker
- react-icons
- react-router-dom
- styled-components
- yup
- @unform/core @unform/web

**Mobile (React Native com TypeScript)**  
Utilizei bibliotecas semelhantes ao Front-End

## Passo a passo

Com Yarn
```
$ git clone https://github.com/MarcusMartins38/GoBarberApplication.git
$ cd GoBarberApplication/backend
$ yarn
$ yarn dev:server
$ cd GoBarberApplication/frontend or cd GoBarberApplication/appgobarber
$ yarn
$ yarn start
```
Com Npm

```
$ git clone https://github.com/MarcusMartins38/GoBarberApplication.git
$ cd GoBarberApplication/backend
$ npm install
$ npm dev:server
$ cd GoBarberApplication/frontend or cd GoBarberApplication/appgobarber
$ npm install
$ npm start
```


