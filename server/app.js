const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: `./config.env` });

const express = require("express");
const app = express();
const cors = require("cors");

// Routes :
const habibRouter = require("./routes/habibUrl");

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// 1) Global Middle Ware :

// Serving static files :
app.use(
  express.static(
    path.join(`${__dirname}/output
`)
  )
);

app.use(express.json());

app.use(
  cors({
    origin: [],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log("Hello from the MiddleWare !");
  next();
});

// Time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//Including the Tabel - Schema :
// const db = require("./models");

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/

// Routers :

app.use("/habibUrl", habibRouter);

// Error route handler :

app.all("*", (req, res, next) => {
  // // all for get,post,delete..
  res.status(404).json({
    status: "fail",
    message: `Cant find ${req.originalUrl} on this server`,
  });

  // // Creating an error :
  // const err = new Error(`Cant find ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;

  // next(err); // Passing the err inside the next --> will skip all the middleware and move directly to the error.

  // next(
  //   new AppError(`Heeeeey Cant find ${req.originalUrl} on this server!`, 404)
  // );
  next();
});

module.exports = app;
