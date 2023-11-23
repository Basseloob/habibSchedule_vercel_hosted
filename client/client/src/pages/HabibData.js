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
      .get(
        // "https://habib-schedule-vercel-hosted.vercel.app/habibUrl/habibSchedule_FM"
        "http://localhost:3001/habibUrl/habibSchedule_FM"
      )
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
        "http://localhost:3001/habibUrl/habibSchedule_Nephrology"
        // "https://habib-schedule-vercel-hosted.vercel.app/habibUrl/habibSchedule_Nephrology"
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
      <div className="habibPageContainer">
        {/* <div className="basicInfo"></div> */}
        <div className="column1">
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

        <div className="column2" style={{ marginLeft: "6rem", width: "100vh" }}>
          {allDoctors.map((doctor, key) => {
            return (
              <div className="doctorData" key={key}>
                <div className="img&name" style={{ marginRight: "5rem" }}>
                  <img src={`${doctor.Img}`}></img>
                  <h4>
                    {key + 1}- {doctor.Name}
                  </h4>
                </div>

                <div
                  className="date_times"
                  style={{
                    width: "700px",
                    overflowX: "visible",
                    whiteSpace: "nowrap",
                    // marginLeft: "5rem",
                  }}
                >
                  <div
                    className="element"
                    style={{
                      maxWidth: "30px",
                      borderBottom: "1px solid #ccc",
                      paddingBottom: "10px",
                    }}
                  >
                    <h4
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "5px",
                        // gridAutoRows: "minmax(100px, auto)",
                      }}
                    >
                      {/* Times : */}
                      {doctor.DateObj.map((time, id) => (
                        // <div style={{ display: "block", marginRight: "20px" }}>
                        <div style={{ width: "150px", marginRight: "20px" }}>
                          <p>{time.Date}</p>
                          <ul
                            style={{
                              color: "blue",
                              gap: "5px",
                            }}
                          >
                            {/* {time.Times} */}
                            {time.Times.map((time, timeIndex) => (
                              <li key={timeIndex}>{time}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="listOfAppointments"></div>
    </div>
  );
};

export default HabibData;
