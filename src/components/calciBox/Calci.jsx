import React from "react";
import "../home/body.css";
import { motion, useAnimation } from "framer-motion";

const Calci = () => {
  const controlCal = useAnimation();
  const controlX = useAnimation();
  const addInfo = useAnimation();
  const controlHead = useAnimation();

  const xVar = {
    hidden: {
      opacity: 0,
      display: "none",
    },
    visible: {
      opacity: 1,
    },
  };
  const scrollVariants = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
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
              display: "none",
            });
            controlHead.start({
              display: "block",
            });
          }}
        >
          X
        </motion.div>
        <motion.h1
          className="calciHead"
          variants={scrollVariants}
          initial="hidden"
          animate={(controlHead, "visible")}
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
              display: "flex",
            });
            controlX.start({
              // display: "none",
              display: "flex",
            });
          }}
        >
          CALCULATOR
        </motion.h1>
        <motion.div
          className="info"
          variants={xVar}
          initial="hidden"
          animate={addInfo}
        >
          <p>This is a Calculator web-app.</p>
          <a href="https://r3tr0lastknight.github.io/Simple-Calculator/">
            <motion.div
              className="btn"
              onClick={() => {
                controlHead.start({
                  display: "none",
                });
                addInfo.start({
                  opacity: 0,
                });
                controlX.start({
                  zIndex: 5,
                  top: "-300%",
                });
              }}
            >
              {" "}
              ENTER
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Calci;
