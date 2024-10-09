import React from "react";

import Hero from "../components/homehero";
import Features from "../components/features";
import Blog from "../components/blogs";
import Ussd from "../components/uss";

const home = () => {
  return (
    <>
      <Hero />
      <Features />

      <Ussd />
    </>
  );
};

export default home;
