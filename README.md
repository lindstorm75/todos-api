<h1 align="center">API - A simple CRUD API 🐱‍🏍</h1>

[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://en.wikipedia.org/wiki/Open_source)

## 🐱‍👤 Tech stack
### **NodeJS**, **ExpressJS** and **Mongoose**

## Apis: [Todos](#todos), [Users](#users)

## 🌕 Todos<a name="todos"></a>

### 🐱‍💻 GET
### 🔗 All todos
```
https://arcane-hollows-66380.herokuapp.com/todos
```
### ✅ Response
```json
[
  {
    "id": 1,
    "username": "Somsri",
    "title": "Drink water",
    "completed": false
  },
  {
    "id": 2,
    "username": "Sommai",
    "title": "Get some sleep",
    "completed": false
  }
]
```
### 🔗 A single todo
```
https://arcane-hollows-66380.herokuapp.com/todos/1
```
### ✅ Response
```json
{
  "id": 1,
  "username": "Somsri",
  "title": "Drink water",
  "completed": false
},
```

### 🐱‍💻 POST
```
https://arcane-hollows-66380.herokuapp.com/todos
```
### ➡ Body
```json
{
  "username": "Somchai",
  "title": "Exercise"
}
```
### ✅ Response
```json
{
  "id": 3,
  "username": "Somchai",
  "title": "Exercise",
  "completed": false
}
```

### 🐱‍💻 PUT
```
https://arcane-hollows-66380.herokuapp.com/todos/3
```
### ➡ Body
```json
{
  "title": "Get some sleep",
  "completed": true
}
```
### ✅ Response
```json
{
  "id": 3,
  "username": "Somchai",
  "title": "Get some sleep",
  "completed": true
}
```
### 🐱‍💻 DELETE
```
https://arcane-hollows-66380.herokuapp.com/todos/3
```
### ✅ Response
```json
{
  "message": "Successfully deleted."
}
```
## 🌕 Users<a name="users"></a>

### 🐱‍💻 GET
### 🔗 All users
```
https://arcane-hollows-66380.herokuapp.com/users
```
### ✅ Response
```json
[
  {
    id: 1,
    username: "thomas666",
    firstName: "Thomas",
    lastName: "the Train",
    email: "thomasthetrain666@gmail.com",
    address: "Khon Kaen, Thailand"
  },
  {
    id: 2,
    username: "Jeff555",
    firstName: "Jeff",
    lastName: "Lee",
    email: "jefflee55@gmail.com",
    address: "Tokyo, Japan"
  }
]
```
### 🔗 A single user
```
https://arcane-hollows-66380.herokuapp.com/users/1
```
### ✅ Response
```json
{
  id: 1,
  username: "thomas666",
  firstName: "Thomas",
  lastName: "the Train",
  email: "thomasthetrain666@gmail.com",
  address: "Khon Kaen, Thailand"
}
```

### 🐱‍💻 POST
```
https://arcane-hollows-66380.herokuapp.com/users
```
### ➡ Body
```json
{
  "username": "Jeff555",
  "password": "mynameisjeff",
  "firstName": "Jeff",
  "lastName": "Lee",
  "email": "jefflee55@gmail.com",
  "address": "Tokyo, Japan"
}
```
### ✅ Response
```json
{
  "id": 3,
  "username": "Jeff555",
  "firstName": "Jeff",
  "lastName": "Lee",
  "email": "jeffee55@gmail.com",
  "address": "Tokyo, Japan"
}
```

### 🐱‍💻 PUT
```
https://arcane-hollows-66380.herokuapp.com/users/3
```
### ➡ Body
```json
{
  "username": "Jeffy55",
  "email": "anotherJeffy@gmail.com",
  "address": "Saitama, Japan"
}
```
### ✅ Response
```json
{
  "id": 3,
  "username": "Jeffy55",
  "firstName": "Jeff",
  "lastName": "Lee",
  "email": "anotherJeffy@gmail.com",
  "address": "Saitama, Japan"
}
```
## 🐱‍💻 DELETE
```
https://arcane-hollows-66380.herokuapp.com/users/3
```
### ✅ Response
```json
{
  "message": "Successfully deleted."
}
```

## Instalation
### Navigate inside the project and install node modules needed
```
npm install
```
### Run the project via the following command
```
npm run dev
```
### You can compile it to plain JS to **build** directory using
```
npm run build
```

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
