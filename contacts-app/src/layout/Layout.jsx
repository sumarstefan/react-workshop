import React from "react";
import Navigation from "../components/Navigation/Navigation";

const Layout = (props) => {
  return <>
    <section className="container header">
      <h1>Contacts</h1>
    </section>
    <section className="container global">
      <Navigation />
      {props.children}
    </section>
  </>;
};

export default Layout;
