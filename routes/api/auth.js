const express = require("express");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - id - ????
 *         - token - ????
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         email:
 *           type: string
 *           description: Urer email
 *         password:
 *           type: string
 *           description: Urer password
 *  *      id - ????
 *         token - ????
 *       example:
 *         _id: "6144ddead400134d14916c99"
 *         email: "trofimovamariaa@gmail.com"
 *         password: "123123"
 *  *      id - ????
 *         token - ????
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The authorization API
 */

// 1. Запрос на регистрацию пользователя
/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Register a new user
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */
router.post("/signup", (req, res) => {
  try {
    console.log("signup");
      res.status(201).json({
      status: "success",
      code: 201,
      message: "Successfully registered. Please verify your email!",
    });
  } catch (error) {
    next(error);
  }
});

// 2. Запрос на верификацию email зарегистрированного пользователя

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get("/verify/:verifyToken", (req, res, next) => {
  try {
    console.log("verify");
    // const { verifyToken } = req.params; //считываем токен
    // const user = await service.getOne({ verifyToken }); //ищем юзера с таким токеном
    // if (!user) {
      // если такого юзера нет - выдаем ошибку 404
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found***",
      });
     } catch (error) {
    next(error);
  }
})

// 3. Запрос на логинизацию пользователя
// router.post("/signin", validation(joiSchema), ctrl.signin);

// // 4. Запрос на получение данных о пользователе
// router.get("/current", authentificate, ctrl.getCurrentUser);

// // 5. Запрос на разлогинивание пользователя
// router.get("/logout", authentificate, ctrl.logout);

module.exports = router;
