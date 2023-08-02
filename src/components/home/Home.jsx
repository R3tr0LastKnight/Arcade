import React from "react";
import Nav from "./Nav";
import Body from "./Body";
import { motion, useAnimation } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Nav />
      <motion.div>
        <Body />
      </motion.div>
    </div>
  );
};

export default Home;
