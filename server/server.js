const mongoose = require("mongoose");
const dotenv = require("dotenv"); //  --> Enviroment variable...need to be before ./app file.
dotenv.config({ path: "./config.env" });

const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log("UNHANDELED EXCEPTION! 💥💥💥 Shutting down...");
  // console.log(err.name, err.message);
  console.log(err); // printing the entire error.
});

// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// /\//\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/
// Starting the Server & Connecting to the DB:

// MySQL DB :

// db.sequelize.sync().then(() => {
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
// });

// MongoDB DB :

// //replacing the PASSWORD with real one.
const DB = process.env.DATABASE;
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

if (process.env.NODE_ENV === "development") {
  console.log("We are in the DEVELOPMENT env");
} else {
  console.log("We are in the PRODUCTION env");
}

// Showing the Environment we are on :
console.log(app.get("env"));
console.log(
  "/////////////////////////////////////////////////////////////////////"
);
// console.log(process.env);

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`App is running on port ${process.env.PORT}...`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  // console.log(err); // printing the entire error.
  console.log("UNHANDELED REJECTION! 💥💥💥 Shutting down...");
  server.close(() => {
    process.exit(1); // 0 = success , 1 = uncaught exception.
  });
});
