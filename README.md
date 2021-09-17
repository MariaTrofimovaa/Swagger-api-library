# Swagger-api-library

### To do

1. Определить структуру 
 - auth
 - category
 - transactions
 - user
 - brief

2. Написать routes (описаны ниже). Согласовать

3. Описать  @swagger информацию для каждого энд-поинта

Это похоже на правду?? :arrow_down:
/**
 * @swagger
 * components:
 *   schemas:
 *     Transactions:
 *       type: object
 *       required:
 *         - date
 *         - description
           - amount
           - category
           - transactionType
           - owner

 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the transaction
 *         date:
 *           type: string
 *           description: The transaction date
 *         description:
 *           type: string
 *           description: The transaction description
  *         amount:
 *           type: string
 *           description: The transaction amount
  *         category:
 *           type: string
 *           description: The transaction category
  *         transactionType:
 *           type: string
 *           description: The transaction transactionType
  *         owner:
 *           type: string
 *           description: The transaction owner
 *       example:
 *          "_id": "6143770b0091aa3c981c312a",
 *           "date": "15.09.2021",
 *           "description": "Моя зарплата",
 *           "amount": 100, 
 *           "category": "salary",
 *           "transactionType": "income",
 *           "__v": 0,
 *           "owner": "61437b7e811ffd554c1a00b1",
 */



# Routes:
// Паша - auth
1. POST - http://localhost:3000/api/v1/auth/signup - запрос на регистрацию
// Возвращает при успешной регистрации:
    res.status(201).json({
      status: "success",
      code: 201,
      message: "Successfully registered. Please verify your email!",
    });

2. POST - http://localhost:3000/api/v1/auth/signin - запрос на логинизацию
// Возвращает при успешной логинизации
// {
//     "status": "success",
//     "code": 200,
//     "data": {
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDM0OWNiYWY1NjU4MmU3MDc2MzNlNCIsImlhdCI6MTYzMTgxMjE1Mn0.N5dTVySMxI3-4Oh1DnnZeeVcE-XFItW-1cO9rfP9pcA",
//         "email": "y.p.p@ukr.net",
//         "id": "614349cbaf56582e707633e4"
//     }
// }

3. GET - http://localhost:3000/api/v1/auth/verify/:verifyToken - запрос на верификацию email
 
// Возвращает при успешной верификации
    res.json({
      status: "success",
      code: 200,
      message: "Verification success",
    });

// app.use("/api/v1/user", api.users);

// Алена - transactions
4. POST - http://localhost:3000/api/v1/transactions/income - запрос на транзакции (доходы)

// Возвращает при успешном запросе
//  "addedIncome": {
//             "_id": "6143770b0091aa3c981c312a",
//             "date": "15.09.2021",
//             "description": "Моя зарплата",
//             "amount": 100,
//             "category": "salary",
//             "transactionType": "income",
//             "__v": 0,
//              'owner': "61437b7e811ffd554c1a00b1",
//         },

5. POST - http://localhost:3000/api/v1/transactions/expense - запрос на транзакции (расходы)

// Возвращает при успешном запросе
        // "addedExpense": {
        //     "_id": "61437b7e811ffd554c1a00b1",
        //     "date": "15.09.2021",
        //     "description": "Макароны",
        //     "amount": 100,
        //     "category": "groceries",
        //     "transactionType": "expense",
        //     "__v": 0,
        //     'owner': "61437b7e811ffd554c1a00b1",
        // },

// Руслан, Максим, Миша - category
5. GET - http://localhost:3000/api/v1/user/:userId - запрос на все данные о конкретном пользователе на конкретную дату
6. DELETE - http://localhost:3000/api/v1/user/:objId - запрос на удаление данных из списка (таблицы)

// Света - user
7. GET - http://localhost:3000/api/v1/user/ - запрос на баланс

// Возвращает при успешном запросе
// {
//     "status": "success",
//     "code": 201,
//     "balance": 305
// }

8. PATCH - http://localhost:3000/api/v1/user/ - запрос на изменение баланса

// Таня - brief
9. GET -  http://localhost:3000/api/v1/user/ ??? запрос на получение всех данных за год(пол года)

