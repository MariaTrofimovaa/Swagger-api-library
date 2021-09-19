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
 *         - id -- ????
 *         - token -- ????
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
 *       example:
 *         _id: "6144ddead400134d14916c99"
 *         email: "trofimovamariaa@gmail.com"
 *         password: "123123"
 */

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The authorization API
 */

// 1. Запрос на регистрацию пользователя

// В Swagger это будет так?: /api/v1/auth/signup

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       201:
 *         description: Successfully registered. Please verify your email!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       500:
 *         description: Some server error
 */
router.post("/signup", (req, res) => {
  console.log("hello signup");
});

// 2. Запрос на верификацию email зарегистрированного пользователя

// В Swagger это будет так?: /api/v1/auth/verify/:verifyToken

/**
 * @swagger
 * /verify/:verifyToken:
 *   get:
 *     summary: Returns -- so WHAT does it return? token ? --
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Verification success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Auth'
 *        401:
 *          description: Unauthorized
 *        404:
 *          description: Not found*
 *        500:
 *        description: Some error happened
 */

router.get("/verify/:verifyToken", () => {
  console.log("hello verify");
});

// 3. Запрос на логинизацию пользователя

// В Swagger это будет так?: /api/v1/auth/signin ? --

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       400:
 *          description: Wrong email or password / email is not verified
 *       500:
 *         description: Some server error
 */

router.post("/signin", () => {
  console.log("hello signin");
});

// 4. Запрос на получение данных о пользователе

// В Swagger это будет так?: /api/v1/auth/current ? --

/**
 * @swagger
 * /current:
 *   get:
 *     summary: Returns user info
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Auth'
 *        401:
 *          description: Unauthorized
 *        404:
 *          description: Not found*
 *        500:
 *        description: Some error happened
 */

router.get("/current", () => {
  console.log("hello current");
});

 // 5. Запрос на разлогинивание пользователя

// В Swagger это будет так?: /api/v1/auth/logout ? --

/**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logout user 
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Logout success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Auth'
 *        401:
 *          description: Unauthorized
 *        404:
 *          description: Not found*
 *        500:
 *        description: Some error happened
 */

router.get("/logout", () => {
  console.log("hello logout");
});

module.exports = router;
