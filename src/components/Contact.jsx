import { motion } from "framer-motion";
import Container from "./Container";

const Contact = () => {
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const buttonVariant = {
    initial: {
      backgroundColor: "var(--token-547b5c15-77fe-4f79-a0d6-e024d7d798f1)",
    },
    hover: {
      backgroundColor:
        "var(--token-547b5c15-77fe-4f79-a0d6-e024d7d798f1) opacity(0.5)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <Container>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="my-8"
      >
        <motion.div
          className="my-14 text-center gap-6 flex items-center flex-col pt-20"
          variants={variants}
        >
          <motion.h1 className="text-[20px] lg:text-[30px] font-thin">
            <span
              style={{
                display: "inline-block",
                width: "50px",
                height: "4px",
                background: "white",
                marginRight: "10px",
                verticalAlign: "middle",
              }}
            ></span>
            I'm available
            <span
              style={{
                display: "inline-block",
                width: "50px",
                height: "4px",
                backgroundColor: "rebeccapurple",
                marginLeft: "10px",
                verticalAlign: "middle",
              }}
            ></span>
          </motion.h1>

          <h2 className="text-[40px] lg:text-[72px] font-normal">Let's Connect</h2>
          <p className="text-[20px] lg:text-[26px] font-thin">
            Feel free to contact me. <br /> I'm available for new projects
          </p>
          
          
          <motion.button
            className=" gap-1 hover:opacity-75 shadow-[4px_-1px_24px_-12px_rgba(255,255,255,1)] py-1 px-6 rounded-full border-8  flex justify-center items-center"
            variants={buttonVariant}
            whileHover="hover"
            onClick={() =>
              (window.location.href = "mailto:jolaosowasiu01@gmail.com")
            }
          >
            <motion.h2 className="text-[20px] lg:text-[30px] font-medium">
              Contact me
            </motion.h2>
              
              <img src="/assets/link.png" width={28} height={28} alt="" />
          </motion.button>
        </motion.div>

        <div className="flex ">
          <div className="hidden lg:block lg:w-[300px]">
            <div className="border inline-block rounded-full p-2 ">
              <h2> Jolaoso Dev</h2>
            </div>
          </div>

          <div className="w-full px-4">
            <ul className="flex justify-center gap-28">
              <a href="https://github.com/" target="_blank">
                <img src="/assets/github.png" width={40} height={40} alt="" />
              </a>
              <a   href="https://x.com/" target="_blank">
                <img
                  src="/assets/x.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </a>
             
            </ul>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Contact;
