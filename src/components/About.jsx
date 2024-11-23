import { useRef } from "react";
import {  motion,  useInView, } from "framer-motion";
import Container from "./Container";

const About = () => {

  const ref = useRef()

  const variants ={
    initial:{
        x:-500,
        y: 100,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
  }
  

  const isInView = useInView(ref, { margin: "-50px 0px -50px 0px" });

  const textShadow = {
    initial:{
      textShadow: "0 0 0 rgba(0, 0, 0, 0)"
    },
    animate:{
      textShadow: "0 0 18px rgba(0, 0, 0, 0.35)"
    }
  }

  const buttonVariant = {
    initial: { backgroundColor: "var(--token-547b5c15-77fe-4f79-a0d6-e024d7d798f1)" },
    hover: { backgroundColor: "var(--token-547b5c15-77fe-4f79-a0d6-e024d7d798f1) opacity(0.5)", transition: { duration: 0.2 } }
  }
  
const AnimatedText =({text})=>{
  const words = text.split(" ")
  return(
    <p>
      {words.map((word, index)=>(
        <motion.span key={index}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay: index * 0.3}}
        >
          {word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </p>
  )
}
  return (
    <Container>

    <motion.div 
        className="p-3 my-20 lg:flex justify-between gap-10" 
    
    >
 
      {/* RIGHT */}
      <motion.div className="flex-1 flex flex-col gap-6 ">
        <motion.div className="rounded-md border-none text-center border shadow-[4px_-1px_24px_-12px_rgba(255,255,255,1)]">
          
          <motion.p className="text-[30px] py-6">
          Driven by a Passion <br /> for Innovation
          </motion.p>
          </motion.div> 
          <motion.div className="rounded-md border-none text-center  shadow-[4px_-1px_24px_-12px_rgba(255,255,255,1)]">
          
          <p className="text-[30px] py-6"> Let's Collaborate on <br /> a Project </p>
        
        <div className="flex items-center justify-center mb-3">

        <motion.button 
          className="flex border rounded-md p-2" 
          variants={buttonVariant} 
          whileHover="hover"
          onClick={() =>
            (window.location.href = "mailto:jolaosowasiu01@gmail.com")
          }
        >
           
        <motion.h3 variants={textShadow}>    Contact Me  </motion.h3>
        <motion.span>
           <img src="/assets/link.png" width={20} height={20} alt="" />
         </motion.span>
          </motion.button>
          </div>
        
        </motion.div>
      </motion.div >
   
      {/* LEFT */}
      <motion.div className="flex-1 flex items-center shadow-[4px_-1px_24px_-12px_rgba(255,255,255,1)]">
      <div className="text-center p-6">

      <AnimatedText
        text="Through relentless experimentation and innovation, I continually elevate my craft, pushing the boundaries of what's possible and delivering exceptional results"
        />     
        </div>
      </motion.div>
    </motion.div>
            </Container>
      )
}

export default About
