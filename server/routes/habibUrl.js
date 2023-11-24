// 1) create reusable puppetteer function for each clinic.

const fs = require("fs");
const express = require("express");
const router = express.Router();
const sanitize = require("sanitize-filename");
// const { URL } = require("url");

// const { Habib } = require("../models");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { validateToken } = require("../middlewares/authMiddleWare");

// puppeteer
const { get_Habib_Data } = require("../middlewares/habibPuppeteer_Ware");
const { url } = require("inspector");
const { log } = require("console");

// Khobar : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const habib_Im_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=1&StrDate=%27%27&lang=en";
const habib_Family_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=26&StrDate=%27%27&lang=en";
const habib_Cardio_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=21&StrDate=%27%27&lang=en";
const habib_Endo_Url =
  "https://hmgeservices.com/login?ProjectID=60&ClinicID=14&StrDate=%27%27&lang=en";
const habib_Nephro_Url =
  'https://hmgeservices.com/login?ProjectID=60&ClinicID=30&StrDate=%27%27&lang=en"';

// Ryiadh : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Jeddah : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Family Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_FM", async (req, res) => {
  try {
    // 1) Get the Data :
    // await get_Habib_Data(habib_Family_Url);
    // 2) Sanitize the link removing / / :
    const sanitized_Clinic_Parameter_Link = sanitize(habib_Family_Url);
    // 3) Get the file Path :
    const filePath = require(`../output/${sanitized_Clinic_Parameter_Link}`);
    // 4) Response :
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Internal Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_IM", async (req, res) => {
  try {
    // 1) Get the Data :
    // await get_Habib_Data(habib_Im_Url);
    // 2) Sanitize the link removing / / :
    const sanitized_Clinic_Parameter_Link = sanitize(habib_Im_Url);
    // 3) Get the file Path :
    const filePath = require(`../output/${sanitized_Clinic_Parameter_Link}`);
    // 4) Response :
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Cardiology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_Cardio", async (req, res) => {
  try {
    // 1) Get the Data :
    await get_Habib_Data(habib_Cardio_Url);
    // 2) Sanitize the link removing / / :
    const sanitized_Clinic_Parameter_Link = sanitize(habib_Cardio_Url);
    // 3) Get the file Path :
    const filePath = require(`../output/${sanitized_Clinic_Parameter_Link}`);
    // 4) Response :
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endocrinology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_Endo", async (req, res) => {
  try {
    // 1) Get the Data :
    await get_Habib_Data(habib_Endo_Url);
    // 2) Sanitize the link removing / / :
    const sanitized_Clinic_Parameter_Link = sanitize(habib_Endo_Url);
    // 3) Get the file Path :
    const filePath = require(`../output/${sanitized_Clinic_Parameter_Link}`);
    // 4) Response :
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Nephrology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
router.get("/habibSchedule_Nephrology", async (req, res) => {
  try {
    // 1) Get the Data :
    // await get_Habib_Data(habib_Nephro_Url);
    // 2) Sanitize the link removing / / :
    const sanitized_Clinic_Parameter_Link = sanitize(habib_Nephro_Url);
    // 3) Get the file Path :
    const filePath = require(`../output/${sanitized_Clinic_Parameter_Link}`);
    // 4) Response :
    res.json(filePath);
  } catch (error) {
    console.error("Error in /habibSchedule Nephro route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
