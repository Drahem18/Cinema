import React from "react";
import "./main.css";
import Scheduel from "./Scheduel";
import Trends from "./Trends";
import Blogs from "./Blogs";
import Footer from "./Footer";

function Main() {
  return (
    <main>
      <Scheduel />
      <Trends />
      <Blogs />
      <Footer />
    </main>
  );
}

export default Main;
