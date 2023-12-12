// const mongoose = require("mongoose");
// // const dotenv = require("dotenv"); //  --> Enviroment variable...need to be before ./app file.
// // dotenv.config({ path: "./config.env" });

// const app = require("./app");

// process.on("uncaughtException", (err) => {
//   console.log("UNHANDELED EXCEPTION! 💥💥💥 Shutting down...");
//   // console.log(err.name, err.message);
//   console.log(err); // printing the entire error.
// });

// // /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// // /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// // Starting the Server & Connecting to the DB:

// // MySQL DB :

// // db.sequelize.sync().then(() => {
// // const port = 3001;
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });
// // });

// // MongoDB DB :

// // //replacing the PASSWORD with real one.
// // const DB = process.env.DATABASE;
// const DB =
//   "mongodb://basseloob:Basilpsp9111@alhabib-database.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-01.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-02.nnbcxyh.mongodb.net:27017/?replicaSet=atlas-x2jk5t-shard-0&ssl=true&authSource=admin";
// // .replace(
// // "<DATABASE_PASSWORD>",
// // process.env.DATABASE_PASSWORD
// // );

// // // Connecting to the database.
// mongoose
//   .connect(DB, {
//     // useNewUrlParser: true,
//     // useCreateIndex: true,
//     // useFindAndModify: false,
//     // useUnifiedTopology: true,
//     dbName: "Habib_Doctors",
//   })
//   .then((connectionObj) => {
//     // console.log(connectionObj.connections[0].name);
//     console.log(
//       "DB connections successfully connected to Alhabib_Cluster and the name of the collection is : ",
//       connectionObj.connections[0].name
//     );
//   })
//   .catch((err) => console.log("Server Connection Error ", err));

// // if (process.env.NODE_ENV === "development") {
// //   console.log("We are in the DEVELOPMENT env");
// // } else {
// //   console.log("We are in the PRODUCTION env");
// // }

// // Showing the Environment we are on :
// console.log(app.get("env"));
// console.log(
//   "/////////////////////////////////////////////////////////////////////"
// );
// // console.log(process.env);

// // const port = process.env.PORT || 3001;
// const port = 3001;
// const server = app.listen(port, () => {
//   console.log(`App is running on port ${process.env.PORT}...`);
// });

// process.on("unhandledRejection", (err) => {
//   console.log(err.name, err.message);
//   // console.log(err); // printing the entire error.
//   console.log("UNHANDELED REJECTION! 💥💥💥 Shutting down...");
//   server.close(() => {
//     process.exit(1); // 0 = success , 1 = uncaught exception.
//   });
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const RegisterModel = require("./models/Register");

const app = express();
app.use(
  cors({
    origin: ["https://deploy-mern-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());

mongoose
  .connect(
    // "mongodb://basseloob:Basilpsp9111@alhabib-database.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-01.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-02.nnbcxyh.mongodb.net:27017/?replicaSet=atlas-x2jk5t-shard-0&ssl=true&authSource=admin"
    "mongodb+srv://basseloob:Basilpsp9111@alhabib-cluster.nnbcxyh.mongodb.net/testname?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

app.get("/", (req, res) => {
  res.json("Hello");
});

// app.post("/register", (req, res) => {
//   const { name, email, password } = req.body;
//   RegisterModel.findOne({ email: email })
//     .then((user) => {
//       if (user) {
//         res.json("Already have an account");
//       } else {
//         RegisterModel.create({ name: name, email: email, password: password })
//           .then((result) => res.json(result))
//           .catch((err) => res.json(err));
//       }
//     })
//     .catch((err) => res.json(err));
// });

app.listen(3001, () => {
  console.log("Server is Running");
});
