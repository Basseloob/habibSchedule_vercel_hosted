const mongoose = require("mongoose");
const dotenv = require("dotenv"); //  --> Enviroment variable...need to be before ./app file.
dotenv.config({ path: ".././config.env" });

const fs = require("fs");
const habib_Doctors = require("../models/habib_Doctors_model");

const { dir } = require("console");
const { dirname } = require("path");

// const DB = process.env.DATABASE;
const DB =
  "mongodb://basseloob:Basilpsp9111@ac-7hgzxvl-shard-00-00.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-01.nnbcxyh.mongodb.net:27017,ac-7hgzxvl-shard-00-02.nnbcxyh.mongodb.net:27017/?replicaSet=atlas-x2jk5t-shard-0&ssl=true&authSource=admin";

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
    dbName: "Habib_Doctors",
  })
  .then((connectionObj) => {
    // console.log(connectionObj.connections);
    console.log(
      "DB connections successfully connected : " //, connectionObj.connections
    );
  })
  .catch((err) => console.log("Server Connection Error ", err));

////////////////////////////////////////////////////////////////////////////////////////////////////

const habibKBR_Nephro_data = JSON.parse(
  fs.readFileSync(
    // `${__dirname}/httpshmgeservices.comloginProjectID=60&ClinicID=30&StrDate=%27%27&lang=en.json`,
    `${__dirname}/nephroKBR.json`,
    "utf-8"
  )
);

// IMPORT DATA INTO THE DATABASE
const importData = async () => {
  try {
    await habib_Doctors.create(habibKBR_Nephro_data);
    console.log("Data successfully loaded into database !");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM THE DATABASE COLLECTION
const deleteData = async () => {
  try {
    await habib_Doctors.deleteMany();
    console.log("Data successfully deleted from database !");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
