const express = require("express");

const { transactions: ctrl } = require("../../controllers");
// const authentificate = require("../../middlewares/authentificate");
// Правильно импортировать схему
// const {
//   user: { joiSchema },
// } = require("../../models/schemas");
const { validation, authentificate } = require("../../middlewares"); // лучше так импортировать

const router = express.Router();

router.get("/brief", ctrl.readBrief);
router.get("/count/:month", ctrl.getCount);


// router.post("/expense", authentificate, validation(joiSchema),  ctrl.addExpense); // нужна валидация и джойсхема
router.post("/expense", authentificate, ctrl.addExpense);
// router.post("/income", authentificate, validation(joiSchema), ctrl.addIncome); // нужна валидация и джойсхема
router.post("/income", authentificate, ctrl.addIncome);

module.exports = router;
