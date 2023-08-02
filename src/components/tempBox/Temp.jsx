import React from "react";
import "../home/body.css";
import { motion, useAnimation } from "framer-motion";

const Temp = () => {
  const controlTemp = useAnimation();
  const controlX = useAnimation();

  const xVar = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { when: "afterParent" },
    },
  };

  return (
    <div>
      <motion.div className="box" id="temp" animate={controlTemp}>
        <motion.div
          className="out"
          variants={xVar}
          initial="hidden"
          animate={controlX}
          onClick={() => {
            controlX.start({
              opacity: 0,
            });
            controlTemp.start({
              width: "100%",
              height: "50vh",
              x: 0,
              y: 0,
              zIndex: 0,
            });
          }}
        >
          X
        </motion.div>
        <motion.h1
          onClick={() => {
            controlX.start({
              opacity: 1,
              transition: { delay: 0.5 },
            });
            controlTemp.start({
              y: " -50%",
              width: "200%",
              height: "200%",
              zIndex: 5,
            });
          }}
        >
          TEMPS
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Temp;
