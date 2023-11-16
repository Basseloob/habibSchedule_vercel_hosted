import React, { useState } from "react";
import axios from "axios";

const HabibData = () => {
  const [chooseClinic, setChooseClinic] = useState("Choose Clinic");
  const [allDoctors, setAllDoctors] = useState([]);
  const [doctorAvailableTimes, setDoctorAvailableTimes] = useState([]);

  // Family Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  //  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_FamilyMedicine = (event) => {
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    axios
      .get("http://localhost:3001/habibUrl/habibSchedule_FM")
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  // Internal Medicine : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_InternalMedicine = (event) => {
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    axios
      .get("http://localhost:3001/habibUrl/habibSchedule_IM")
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  // Cardiology      : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_Cardiology = (event) => {
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    axios
      .get("http://localhost:3001/habibUrl/habibSchedule_Cardio")
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  // Endocrinology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_Endocrinology = (event) => {
    const innerText = event.target.innerText;
    setChooseClinic(innerText);

    axios
      .get("http://localhost:3001/habibUrl/habibSchedule_Endo")
      .then((response) => {
        console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  // Nepherology : \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const choosedClinic_Nepherology = (event) => {
    const innerText = event.target.innerText;
    console.log("Nehphro innerText : ", innerText);
    setChooseClinic(innerText);

    axios
      .get(
        "https://habib-schedule-vercel-hosted.vercel.app/habibUrl/habibSchedule_Nephrology"
      )
      .then((response) => {
        // console.log(response.data);
        setAllDoctors(response.data);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "310px" }} className="habibPageContainer">
        {/* <div className="basicInfo"></div> */}
        <div className="column">
          <div className="dropdown">
            <button className="dropbtn2">{chooseClinic}</button>
            <div className="dropdown-content">
              <a href="#" onClick={choosedClinic_FamilyMedicine}>
                Family Medicine
              </a>
              <a href="#" onClick={choosedClinic_InternalMedicine}>
                Internal Medicine
              </a>
              <a href="#" onClick={choosedClinic_Endocrinology}>
                Endocrinology
              </a>
              <a href="#" onClick={choosedClinic_Cardiology}>
                Cardiology
              </a>{" "}
              <a href="#" onClick={choosedClinic_Nepherology}>
                Nephrology
              </a>
            </div>
          </div>
        </div>

        {/* List Of Doctors */}

        <div className="column">
          {allDoctors.map((doctor, key) => {
            return (
              <div key={key}>
                <img src={`${doctor.Img}`}></img>
                <h4>
                  {key + 1}- {doctor.Name}
                </h4>
                {/* <h5>{doctor.Speciality}</h5> */}
                <h4>Date: {doctor.Date}</h4>
                {/* <p>Times:{doctor.Times[0]}</p> */}
                <h4>
                  Times :
                  {doctor.Times.map((time, id) => (
                    <p
                      style={{
                        // fontWeight: "lighter",
                        display: "inline-block",
                        marginRight: "10px",
                        color: "blue",
                      }}
                      key={id}
                    >
                      {time}
                    </p>
                  ))}
                </h4>
              </div>
            );
          })}
        </div>

        <div className="listOfAppointments"></div>
      </div>
    </div>
  );
};

export default HabibData;
