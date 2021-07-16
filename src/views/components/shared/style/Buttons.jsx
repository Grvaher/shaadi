import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="styledButton"
      onClick={props.handleOnClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
