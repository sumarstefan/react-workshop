import React from "react";
import PersonalDetails from "../../components/Personal/PersonalDetails/PersonalDetails";
import Layout from "../../layout/Layout";

const PersonalInfoPage = () => {
  return (
    <Layout>
      <PersonalDetails
        firstName="Stefan"
        lastName="Sumar"
        email="s.sumar@vega.dev"
      />
    </Layout>
  );
};

export default PersonalInfoPage;
