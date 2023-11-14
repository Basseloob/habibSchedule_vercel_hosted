import React, { useEffect, useState } from "react";
import axios from "axios";

const RegisteredUsers = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/registeredUsers")
      .then((response) => {
        setRegisteredUsers(response.data.registeredUsers);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false);
      });

    console.log(registeredUsers);
  }, []);

  // if (loading) return <div>Loading...</div>;

  return (
    <div className="registeredUsers">
      <div>Number of registered users : </div>
      {registeredUsers.length > 0 ? (
        <div>
          <div>Number of registered users: {registeredUsers.length}</div>
          {registeredUsers.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))}
        </div>
      ) : (
        <div>No registered users found.</div>
      )}
    </div>
  );
};

export default RegisteredUsers;
