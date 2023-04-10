import React from "react";

const PersonalInfo = (props) => {
  return (
    <label>
      {props.label}
      <input value={props.value} disabled={props.isDisabled} />
    </label>
  );
};

export default PersonalInfo;
