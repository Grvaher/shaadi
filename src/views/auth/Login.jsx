import React from "react";
import Button from "../components/shared/style/Buttons";
import Input from "../components/shared/style/Inputs";
import {
  setValueInLocalStorage,
  getValueFromLocalStorage,
} from "../../utils/Helpers";

const Login = (props) => {
  const { useState } = React;
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    let credentials = { ...userCredentials };
    credentials[name] = value;

    setUserCredentials(credentials);
  };

  const handleOnSubmit = () => {
    setValueInLocalStorage("userCredentials", userCredentials);
    const isLoggedIn = getValueFromLocalStorage("userCredentials")
      ? true
      : false;

    if (isLoggedIn) {
      props.history.push({
        pathname: "/home",
      });
    }
  };

  return (
    <div id="login-container">
      <div className="form-wrap">
        <h1>Welcome</h1>
        <p>Login Here</p>
        <form>
          <div className="form-group">
            <label for="username">User Name</label>
            <Input
              type="text"
              name="username"
              handleOnChange={handleOnChange}
              placeholder="User Name"
            />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <Input
              type="password"
              name="password"
              handleOnChange={handleOnChange}
              placeholder="Password"
            />
            <Button name="Login" type="submit" handleOnClick={handleOnSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
