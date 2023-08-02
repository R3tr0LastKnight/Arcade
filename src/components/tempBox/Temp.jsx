import React from "react";
import "../home/body.css";
import { motion, useAnimation } from "framer-motion";

const Temp = () => {
  const controlTemp = useAnimation();
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
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
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
            addInfo.start({
              display: "none",
              opacity: 0,
            });
            controlHead.start({
              display: "block",
            });
          }}
        >
          X
        </motion.div>
        <motion.h1
          className="tempHead"
          variants={scrollVariants}
          initial="hidden"
          animate={(controlTemp, "visible")}
          onClick={() => {
            controlX.start({
              opacity: 1,
              transition: { delay: 0.5 },
              display: "flex",
            });
            controlTemp.start({
              y: " -50%",
              width: "200%",
              height: "200%",
              zIndex: 5,
            });
            addInfo.start({
              opacity: 1,
              transition: { delay: 1 },
              display: "flex",
            });
          }}
        >
          TEMPS
        </motion.h1>
        <motion.div
          className="info"
          variants={xVar}
          initial="hidden"
          animate={addInfo}
        >
          <p>This is a Temprature Conversion web-app.</p>
          <a href="https://r3tr0lastknight.github.io/TempConverter-TEMPS/">
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

export default Temp;
