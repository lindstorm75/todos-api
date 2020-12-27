<h1 align="center">TodoList API - A simple CRUD API 🐱‍🏍</h1>

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
    "_id": "5fe85b80589f85bf1fd1475c",
    "id": 1,
    "username": "Somsri",
    "title": "Drink water",
    "completed": false
  },
  {
    "_id": "5fe85bb1589f85bf1fd1475d",
    "id": 2,
    "username": "Sommai",
    "title": "Get some sleep",
    "completed": false
  }
]
```

## 🐱‍🐉 POST
```
https://arcane-hollows-66380.herokuapp.com/todos
```
###  Body
```json
{
  "username": "Somchai",
  "title": "Exercise"
}
```
### ✅ Response
```
{
  "id": 3,
  "username": "Somchai",
  "title": "Exercise",
  "completed": false
}
```

## 🧞‍♂️ PUT
```
https://arcane-hollows-66380.herokuapp.com/todos/3
```
### Body
```json
{
  "completed": true
}
```
### ✅ Response
```json
{
  "_id": "5fe8766e2a9c8800171408d7",
  "id": 3,
  "username": "Somchai",
  "title": "Exercise",
  "completed": true
}
```
### Body
```json
{
  "username": "Manee"
}
```
### ✅ Response
```json
{
  "_id": "5fe8766e2a9c8800171408d7",
  "id": 3,
  "username": "Manee",
  "title": "Exercise",
  "completed": true
}
```
## 👻 DELETE
```
https://arcane-hollows-66380.herokuapp.com/todos/3
```
### ✅ Response
```json
{
  "message": "Successfully deleted."
}
```
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
