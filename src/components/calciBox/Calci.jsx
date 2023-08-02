import React from "react";
import "../home/body.css";
import { motion, useAnimation } from "framer-motion";

const Calci = () => {
  const controlCal = useAnimation();
  const controlX = useAnimation();
  const addInfo = useAnimation();

  const xVar = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const pVar = {
    hidden: {
      //   x: "-550px",
      opacity: 0,
    },
    visible: {
      x: 0,
      transition: { when: "afterParent" },
    },
  };

  return (
    <div>
      <motion.div className="box" id="calci" animate={controlCal}>
        <motion.div
          className="out"
          variants={xVar}
          initial="hidden"
          animate={controlX}
          onClick={() => {
            controlX.start({
              opacity: 0,
            });
            controlCal.start({
              width: "100%",
              height: "50vh",
              x: 0,
              y: 0,
              zIndex: 0,
            });
            addInfo.start({
              //   x: "-550px",
              opacity: 0,
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
            controlCal.start({
              width: "200%",
              height: "200%",
              zIndex: 5,
            });
            addInfo.start({
              opacity: 1,
              transition: { delay: 1 },
              //   duration: 0.15,
            });
          }}
        >
          CALCULATOR
        </motion.h1>
        <motion.div
          className="info"
          variants={pVar}
          initial="hidden"
          animate={addInfo}
        >
          <p>This is a Calculator web-app.</p>
          <div className="btn">ENTER</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Calci;
