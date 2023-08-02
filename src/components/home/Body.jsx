import React from "react";
import "./body.css";
// import { motion, useAnimation } from "framer-motion";

import Calci from "../calciBox/Calci";
import Task from "../taskBox/Task";
import Temp from "../tempBox/Temp";
import Rick from "../rickBox/Rick";

const Body = () => {
  return (
    <div className="body">
      <Calci />
      <Task />
      <Temp />
      <Rick />
    </div>
  );
};

export default Body;
