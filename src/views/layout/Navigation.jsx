import React from "react";
import { getValueFromLocalStorage } from "../../utils/Helpers";

const Navigation = (props) => {
  const userCredentials = getValueFromLocalStorage("userCredentials");

  const handleLogout = () => {
    localStorage.removeItem("userCredentials");
    props.handleLogOut(true);
  };

  return (
    <div>
      <ul className="navbar">
        <li>
          <a href="">{userCredentials && userCredentials.username}</a>
        </li>
        <li>
          <a href="" onClick={handleLogout}>
            Sign Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
