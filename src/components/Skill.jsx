import { motion } from "framer-motion";
import Container from "./Container";

const Skill = () => {
    const variants = {
        initial: {
          y: 0, 
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.1,
            staggerDirection: 1, // Stagger from top to bottom
          },
        },
      };

  const itemsVariants = {
    open: { y: 0, opacity: 1 },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <Container>
      <div className="">
    <motion.div
      className="mb-10 w-full  lg:flex justify-between items-center"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div variants={variants} className="flex-1 px-3">
        <motion.h1 className="text-2xl font-medium text-center mb-10">SKILLS </motion.h1>

        <motion.ul className=" items-center justify-center flex flex-wrap gap-8 lg:gap-16 font-medium text-[14px]">
          <motion.li variants={variants}>
            <span>Html5</span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>CSS</span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>JavaScript</span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>TypeScript</span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>React Js</span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>TailwindCSS</span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>NextJS</span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>GitHub</span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>SASS</span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>Backend </span>
          </motion.li>
          <motion.li variants={variants}>
            
            <span>Many more</span>
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.article
        className="flex-1"
        variants={itemsVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="text-center px-3-1 ">
          <h2 className="font-medium text-[22px]">INTEREST</h2>
          <p className=" font-medium  text-[14px]">
            Brand Strategy, Animations, Creative Development, E-Commerce, Art
            Direction, maximizing user experience.
            <span>See my Github</span>
          </p>
        </div>
      </motion.article>
    </motion.div>
        </div>
    </Container>
  );
};

export default Skill;
