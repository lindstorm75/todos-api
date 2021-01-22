<h1 align="center">API - A simple CRUD API 🐱‍🏍</h1>

[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://en.wikipedia.org/wiki/Open_source)

## 🐱‍👤 Tech stack
### **NodeJS**, **ExpressJS** and **Mongoose**

## Apis: [Todos](#todos), [Users](#users), [Products](#products), [Employees](#employees)

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
#### 🟢 Available fields: username(String), title(String), completed(String, optional)
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
#### 🟢 Available fields: title(String), completed(String)
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
    "id": 1,
    "username": "thomas666",
    "firstName": "Thomas",
    "lastName": "the Train",
    "email": "thomasthetrain666@gmail.com",
    "address": "Khon Kaen, Thailand"
  },
  {
    "id": 2,
    "username": "Jeff555",
    "firstName": "Jeff",
    "lastName": "Lee",
    "email": "jefflee55@gmail.com",
    "address": "Tokyo, Japan"
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
  "id": 1,
  "username": "thomas666",
  "firstName": "Thomas",
  "lastName": "the Train",
  "email": "thomasthetrain666@gmail.com",
  "address": "Khon Kaen, Thailand"
}
```

### 🐱‍💻 POST
#### 🟢 Available fields: username(String), password(String), firstName(String), lastName(String), email(String), address(String)
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
#### 🟢 Available fields: username(String), password(String), firstName(String), lastName(String), email(String), address(String)
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
## 🌕 Products<a name="products"></a>

### 🐱‍💻 GET
### 🔗 All products
```
https://arcane-hollows-66380.herokuapp.com/products
```
### ✅ Response
```json
[
  {
    "id": 1,
    "name": "Xtrfy M4",
    "price": 59,
    "imgs": [
      "https://cdn11.bigcommerce.com/s-r42h9th2fy/images/stencil/1280x1280/products/328/1305/XG-M4-RGB-RETRO__81620.1574817432.jpg?c=2?imbypass=on",
      "https://xtrfy.com/wp/wp-content/uploads/2020/06/Xtrfy-M4-Black-Herogallery_003-1024x512.jpg"
    ],
    "categoryId": "1234"
  }
]
```
### 🔗 A single product
```
https://arcane-hollows-66380.herokuapp.com/products/1
```
### ✅ Response
```json
{
  "id": 1,
  "name": "Xtrfy M4",
  "price": 59,
  "imgs": [
    "https://cdn11.bigcommerce.com/s-r42h9th2fy/images/stencil/1280x1280/products/328/1305/XG-M4-RGB-RETRO__81620.1574817432.jpg?c=2?imbypass=on",
    "https://xtrfy.com/wp/wp-content/uploads/2020/06/Xtrfy-M4-Black-Herogallery_003-1024x512.jpg"
  ],
  "categoryId": "1234"
}
```

### 🐱‍💻 POST
#### 🟢 Available fields: name(String), price(Number), imgs(Array of Strings), categoryId(String)
```
https://arcane-hollows-66380.herokuapp.com/products
```
### ➡ Body
```json
{
  "name": "MacBook Pro M1",
  "price": 1299,
  "imgs": [
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1603406905000"
  ],
  "categoryId": "1212"
}
```
### ✅ Response
```json
{
  "id": 2,
  "name": "MacBook Pro M1",
  "price": 1299,
  "imgs": [
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1603406905000"
  ],
  "categoryId": "1212"
}
```

### 🐱‍💻 PUT
#### 🟢 Available fields: name(String), price(Number), imgs(Array of Strings), categoryId(String)
```
https://arcane-hollows-66380.herokuapp.com/products/2
```
### ➡ Body
```json
{
  "name": "Apple MacBook Pro M1",
  "imgs": [
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1603406905000",
    "https://zdnet2.cbsistatic.com/hub/i/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/apple-macbook-pro-m1-2020-5.jpg"
  ]
}
```
### ✅ Response
```json
{
  "id": 2,
  "price": 1299,
  "name": "Apple MacBook Pro M1",
  "imgs": [
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604347427000",
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1603406905000",
    "https://zdnet2.cbsistatic.com/hub/i/2020/11/16/37e33024-2892-4bb7-9d21-6ac6f7544def/apple-macbook-pro-m1-2020-5.jpg"
  ],
  "categoryId": "1212"
}
```
## 🐱‍💻 DELETE
```
https://arcane-hollows-66380.herokuapp.com/products/2
```
### ✅ Response
```json
{
  "message": "Successfully deleted."
}
```

## 🌕 Employees<a name="employees"></a>

### 🐱‍💻 GET
### 🔗 All employees
```
https://arcane-hollows-66380.herokuapp.com/employees
```
### ✅ Response
```json
[
  {
    "sn": "0123456789",
    "firstName": "Thomas",
    "lastName": "Edison",
    "departmentId": 1,
    "salary": 78000,
    "email": "thomasedison66@gmail.com",
    "address": "Nowhere to be found"
  },
  {
    "sn": "9876543210",
    "firstName": "Manee",
    "lastName": "Deejai",
    "departmentId": 2,
    "salary": 67000,
    "email": "maneeDeejai@gmail.com",
    "address": "Bangkok, Thailand"
  }
]
```
### 🔗 A single employee
```
https://arcane-hollows-66380.herokuapp.com/employees/0123456789
```
### ✅ Response
```json
{
  "sn": "0123456789",
  "firstName": "Thomas",
  "lastName": "Edison",
  "departmentId": 1,
  "salary": 78000,
  "email": "thomasedison66@gmail.com",
  "address": "Nowhere to be found"
}
```

### 🐱‍💻 POST
#### 🟢 Available fields: sn(String), firstName(String), lastName(String), departmentId(Number), salary(Number), email(String), address(String)
```
https://arcane-hollows-66380.herokuapp.com/employees
```
### ➡ Body
```json
{
  "sn": "1122334455",
  "firstName": "Sommai",
  "lastName": "Jaiyai",
  "departmentId": 2,
  "salary": 65000,
  "email": "naisommaieiei@outlook.com",
  "address": "Khon Kaen, Thailand"
}
```
### ✅ Response
```json
{
  "sn": "1122334455",
  "firstName": "Sommai",
  "lastName": "Jaiyai",
  "departmentId": 2,
  "salary": 65000,
  "email": "naisommaieiei@outlook.com",
  "address": "Khon Kaen, Thailand"
}
```

### 🐱‍💻 PUT
#### 🟢 Available fields: sn(String), firstName(String), lastName(String), departmentId(Number), salary(Number), email(String), address(String)
```
https://arcane-hollows-66380.herokuapp.com/employees/9876543210
```
### ➡ Body
```json
{
  "salary": 70000,
  "departmentId": 3
}
```
### ✅ Response
```json
{
  "sn": "9876543210",
  "firstName": "Manee",
  "lastName": "Deejai",
  "departmentId": 3,
  "salary": 70000,
  "email": "maneeDeejai@gmail.com",
  "address": "Bangkok, Thailand"
}
```
## 🐱‍💻 DELETE
```
https://arcane-hollows-66380.herokuapp.com/employees/1122334455
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
