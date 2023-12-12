const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: [],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use(express.json());
// // const dotenv = require("dotenv"); //  --> Enviroment variable...need to be before ./app file.
// // dotenv.config({ path: "./config.env" });

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// Routes :

app.get("/", (req, res) => {
  res.json("Hello from habibUrl file...");
});
s;

// const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log("UNHANDELED EXCEPTION! 💥💥💥 Shutting down...");
  // console.log(err.name, err.message);
  console.log(err); // printing the entire error.
});

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/

// MongoDB DB :

// const DB = process.env.DATABASE;
const DB =
  // "mongodb://basseloob:Basilpsp9111@alhabib-database.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-01.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-02.nnbcxyh.mongodb.net:27017/?replicaSet=atlas-x2jk5t-shard-0&ssl=true&authSource=admin";
  "mongodb+srv://basseloob:Basilpsp9111@alhabib-cluster.nnbcxyh.mongodb.net/testname2?retryWrites=true&w=majority";

// .replace(
// "<DATABASE_PASSWORD>",
// process.env.DATABASE_PASSWORD
// );

// // Connecting to the database.
mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
    dbName: "Habib_Doctors",
  })
  .then((connectionObj) => {
    // console.log(connectionObj.connections[0].name);
    console.log(
      "DB connections successfully connected to Alhabib_Cluster and the name of the collection is : ",
      connectionObj.connections[0].name
    );
  })
  .catch((err) => console.log("Server Connection Error ", err));

// if (process.env.NODE_ENV === "development") {
//   console.log("We are in the DEVELOPMENT env");
// } else {
//   console.log("We are in the PRODUCTION env");
// }

// // Showing the Environment we are on :
// console.log(app.get("env"));
// console.log(
//   "/////////////////////////////////////////////////////////////////////"
// );
// console.log(process.env);

// const port = process.env.PORT || 3001;
const port = 3001;
// const server = app.listen(port, () => {
app.listen(port, () => {
  console.log(`App is running on port ${process.env.PORT}...`);
});

// process.on("unhandledRejection", (err) => {
//   console.log(err.name, err.message);
//   // console.log(err); // printing the entire error.
//   console.log("UNHANDELED REJECTION! 💥💥💥 Shutting down...");
//   server.close(() => {
//     process.exit(1); // 0 = success , 1 = uncaught exception.
//   });
// });
