import Link from "./Link"
import React, { useState } from 'react'
import ToggleButton from "./ToggleButton"
import { motion } from "framer-motion"
import OutsideClickHandler from 'react-outside-click-handler';

const Sidebar = () => {
  const [open, setOpen]= useState(false)

  const variants ={
    open:{
      clipPath:"circle(1200px at 50px 50px)",
      transition:{
        type: "spring",
        stiffness: 20
      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping:40,
      }
    }
  }
  const handleOutsideClick = () => {
    setOpen(false);
  }
  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>

    <motion.div className=" lg:hidden flex flex-col items-center justify-center bg-white text-black" animate={open ? "open" : "closed"}>
      <motion.div className="fixed top-0 left-0 bottom-0  w-48 bg-white z-50" variants={variants}>
        <Link/>
      </motion.div>
      <ToggleButton setOpen={setOpen}/>
    </motion.div>
    </OutsideClickHandler>
  )
}

export default Sidebar