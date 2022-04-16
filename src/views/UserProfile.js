import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

function UserProfile() {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h3>User Profile : </h3>
      <h5>email : {userData && userData.email}</h5>
      <Link to='/'>Home</Link>
    </div>
  );
}

export default UserProfile;
