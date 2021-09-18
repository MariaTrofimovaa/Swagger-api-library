const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// импорты для сваггера
const low = require("lowdb");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const booksRouter = require("./routes/books");
// мои роуты
// const api = require("./routes/api");
// const api = require("./routes/auth");

const PORT = process.env.PORT || 4000;

const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ books: [] }).write();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:4000/api-docs",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.db = db;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/books", booksRouter);

// app.use("/auth", api);
// app.use("/api/v1/transactions", api.transactions); //обработчик маршрута transactions
// app.use("/api/v1/user", api.users);

app.listen(PORT, () => console.log(`The port is running on port ${PORT}`));
