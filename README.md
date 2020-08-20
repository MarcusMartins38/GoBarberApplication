# GoBarberApplication

#### Languages: English or <a href="https://github.com/MarcusMartins38/GoBarberApplication/blob/master/README-pt.md">Português<a/>  

<p align="center">
<img src="./.github/LogIn.png" width=550 align="center" />
</p>

## Sumary
[Intro](#intro) :door:  
[How it works](#how-it-works) :open_book:  
[Some of Thecnologies](#some-of-thecnologies) :computer:  
[Step by step to use](#step-by-step-to-use) :open_book:  

## Intro

GoBarber is a application to schedule an appointment with a hair stylist, and the hair stylist can see the appointments with his client

- Node.js for back-end;
- React.js for front-end;
- React Native for mobile.

## How it works
In the website of the application, you can register an account, receive an email if you forgot the password, see your perfil, change your photo, and some another's informations of your profile

<p align="center">
<img src="./.github/perfil.gif" width=750 align="center" />
</p>
  
And in the mobile, you can see the appointments that your clients schedule with you, and you can schedule any appointment with another hair stylist
  
<p align="center">
<img src="./.github/MobileGif.gif" width=250 height align="center" />
</p>



## Some of Thecnologies

**Back-End (NodeJS with TypeScript): Postgres, mongodb, redis**  
Some of the Libraries:
- Express
- typeorm
- AWS
- bcryptjs
- celebrate  
- cors
- date-fns

**Front-End (ReactJS with TypeScript)**  
Some of the Libraries:
- axios
- date-fns
- polished
- react-day-picker
- react-icons
- react-router-dom
- styled-components
- yup
- @unform/core @unform/web

**Mobile (React Native with TypeScript)**  
I used similar libraries

## Step by step to use

With Yarn
```
$ git clone https://github.com/MarcusMartins38/GoBarberApplication.git
$ cd GoBarberApplication/backend
$ yarn
$ yarn dev:server
$ cd GoBarberApplication/frontend or cd GoBarberApplication/appgobarber
$ yarn
$ yarn start
```
With Npm

```
$ git clone https://github.com/MarcusMartins38/GoBarberApplication.git
$ cd GoBarberApplication/backend
$ npm install
$ npm dev:server
$ cd GoBarberApplication/frontend or cd GoBarberApplication/appgobarber
$ npm install
$ npm start
```


