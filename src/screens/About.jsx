import React from "react";
import AboutComponent from "./components/AboutComponent";
import AboutHeader from "./components/AboutHeader";
import AboutContact from "./components/AboutContact";

function About() {
  return (
    <div>
      <AboutHeader></AboutHeader>
      <AboutComponent></AboutComponent>
      <AboutContact></AboutContact>
    </div>
  );
}

export default About;
