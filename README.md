<h1 align="center">TodoList API - A simple CRUD API 🐱‍🏍</h1>

[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://en.wikipedia.org/wiki/Open_source)

## 🐱‍👤 Tech stack
### **TypeScript**, **NodeJS**, **ExpressJS** and **Mongoose**

## 🐱‍💻 GET
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

## 🐱‍💻 POST
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

## 🐱‍💻 PUT
```
https://arcane-hollows-66380.herokuapp.com/todos/3
```
### ➡ Body
```json
{
  "completed": true
}
```
### ✅ Response
```json
{
  "id": 3,
  "username": "Somchai",
  "title": "Exercise",
  "completed": true
}
```
### ➡ Body
```json
{
  "username": "Manee"
}
```
### ✅ Response
```json
{
  "id": 3,
  "username": "Manee",
  "title": "Exercise",
  "completed": true
}
```
## 🐱‍💻 DELETE
```
https://arcane-hollows-66380.herokuapp.com/todos/3
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
