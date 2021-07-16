import React from "react";

const Input = (props) => {
  return (
    <input
      className="styledInput"
      type={props.type}
      onChange={props.handleOnChange}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
