const express = require("express");

const { transactions: ctrl } = require("../../controllers");
// const authentificate = require("../../middlewares/authentificate");
// Правильно импортировать схему
// const {
//   user: { joiSchema },
// } = require("../../models/schemas");
const { validation, authentificate } = require("../../middlewares"); // лучше так импортировать
const router = express.Router();
// router.post("/expense", authentificate, validation(joiSchema),  ctrl.addExpense); // нужна валидация и джойсхема
// router.post("/income", authentificate, validation(joiSchema), ctrl.addIncome); // нужна валидация и джойсхема


/**
 * @swagger
 * components:
 *   schemas:
 *     Transactions:
 *       type: object
 *       required:
 *         - date
 *         - description
 *         - amount
 *        - category
 *        - transactionType
 *       properties:
 *         _id:
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

 *       example:
 *          "_id": "6143770b0091aa3c981c312a",
 *           "date": "15.09.2021",
 *           "description": "Моя зарплата",
 *           "amount": 100, 
 *           "category": "salary",
 *           "transactionType": "income",
 */

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: The transactions API
 */

// 6.* Отправка данных о транзакциях (доходы/расходы) _Алена

/**
 * @swagger
 * /expense:
 *   post:
 *     summary: Add new expense
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transactions'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transactions'
 *       500:
 *         description: Some server error
 */

// 6.* Отправка данных о транзакциях (доходы/расходы) _Алена
router.post("/expense", () => {
    console.log("expense");
});

router.post("/income", () => {
  console.log("expense");
});


// 12. Получение данных в сводку по пользователю за год _Таня

/**
 * @swagger
 * /:type/currentYear:
 *   get:
 *     summary: Returns brief
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Transactoins'
 *        401:
 *          description: Unauthorized
 *        404:
 *          description: Not found*
 *        500:
 *        description: Some error happened
 */

router.get("/:type/currentYear", authentificate, ctrl.getByYear);
router.get("/brief", ctrl.readBrief);


// 13. Запрос на получение данных о доходах и расходах за месяц _Миша

/**
 * @swagger
 * /count/:month:
 *   get:
 *     summary: Returns costs for month
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Transactoins'
 *        401:
 *          description: Unauthorized
 *        404:
 *          description: Not found*
 *        500:
 *        description: Some error happened
 */
router.get("/count/:month", ctrl.getCount);

module.exports = router;
