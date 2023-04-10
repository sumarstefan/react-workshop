import React from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

const PersonalDetails = (props) => {
  return (
    <section className="container details">
      <PersonalInfo label="First name:" value={props.firstName} isDisabled />
      <PersonalInfo label="Last name:" value={props.lastName} isDisabled />
      <PersonalInfo label="Email:" value={props.email} isDisabled />
    </section>
  );
};

export default PersonalDetails;
