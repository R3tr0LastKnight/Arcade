import React from "react";
import "./nav.css";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const Nav = () => {
  const controlTri = useAnimation();

  return (
    <div>
      <div className="nav">
        <motion.div
          className="triangle"
          variants={{
            initial: {
              scale: 0,
              // transition: { delay: 1 },
            },
            stay: {
              scale: 1,
              opacity: 1,
              transition: { delay: 1 },
            },
            gone: {
              opacity: 0,
              transition: { delay: 2 },
            },
          }}
          // initial="initial"
          // initial={{ opacity: 0 }}
          animate={("initial", "stay", "gone")}
          exit="gone"
        >
          {/* <div className="retro">R3tr0's</div> */}
          <div className="arcade">Arcade</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Nav;
