const fs = require("fs");
const mongoose = require("mongoose");
const habib_Doctors_Model = require("../models/habib_Doctors_model");
const nephroKBR = require("../output/httpshmgeservices.comloginProjectID=60&ClinicID=30&StrDate=%27%27&lang=en.json");

const habibKBR_Nephro_data = JSON.parse(fs.readFileSync(nephroKBR, "utf-8"));

exports.saveHabib_Data_to_Mongodb = async (req, res) => {
  try {
    // 1)
    await habib_Doctors_Model.create(habibKBR_Nephro_data);
    console.log("Data successfully Loaded !!!!");
  } catch (err) {
    console.log(err);
  }
};
