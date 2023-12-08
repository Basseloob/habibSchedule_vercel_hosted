const mongoose = require("mongoose");
// const TourModel = require('./tourModel');

const habib_Doctors_Schema = new mongoose.Schema({
  Img: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Speciality: {
    type: String,
    required: true,
  },
  Hospital: {
    type: String,
    required: true,
  },
  DateObj: [
    {
      Date: {
        type: String,
        required: true,
      },
      Times: [String],
    },
  ],
});

const habib_Doctors = mongoose.model(
  "habib_Doctors_Schema",
  habib_Doctors_Schema
);

module.exports = habib_Doctors;
