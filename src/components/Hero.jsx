import { motion } from "framer-motion";
import React from "react";
import Container from "./Container";

const textVariant = {
  initial: {
    y: -50,
    opacity: 1,
  },
  animate: {
    y: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const buttonVariant = {
  initial: {
    backgroundColor:  "var(--secondary-background-color) ",
  },
  hover: {
    backgroundColor:
     
      "var( --secondary-background-color)",
    transition: { duration: 0.2 },
  },
};

const Hero = () => {
  return (
    <Container>
      {/* <div className="hero"> */}
        <div className="pt-20 flex justify-center h-screen">
          <motion.div
            className="flex flex-col gap-6"
            variants={textVariant}
            initial="initial"
            animate="animate"
          >
            <div className="flex items-center justify-center">
            <div className="w-40 h-40 flex border items-center justify-center rounded-full">
            <img src="/assets/profile.jpeg" className="w-full h-full object-cover rounded-full" alt="" />
            </div>
          </div>
            <motion.h2
              variants={textVariant}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            className="text-[30px] lg:text-[60px] font-medium text-center "
            >
              I'm Jolaoso Wasiu, <br /> a frontend{" "}
              <span style={{ color: "rebeccapurple" }}>web designer,</span>
            </motion.h2>
            <motion.h1
              variants={textVariant}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="text-[20px] lg:text-[25px] text-center"
            >
              dedicated to creating visually stunning and{" "}
              <span style={{ color: "rebeccapurple" }}>
                {" "}
                user-friendly websites{" "}
              </span>
            </motion.h1>
            <motion.div
              className="flex justify-center items-center"
              variants={textVariant}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
            >
                
          <motion.button
            className="hover:opacity-75 shadow-[4px_-1px_24px_-12px_rgba(255,255,255,1)] py-3 px-6 rounded-full border-8  flex justify-center items-center"
            variants={buttonVariant}
            whileHover="hover"
            onClick={() =>
              (window.location.href = "mailto:jolaosowasiu01@gmail.com")
            }
          >
            <motion.h2 className="text-[30px] font-medium">
              Contact Me
            </motion.h2>
              
              <img src="/assets/link.png" width={28} height={28} alt="" />
          </motion.button>
            </motion.div>
          </motion.div>
        </div>
      {/* </div> */}
    </Container>
  );
};

export default Hero;
