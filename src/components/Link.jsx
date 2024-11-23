import { motion } from "framer-motion"

const Links = () => {

    const variants ={
   open:
        { transition:{
        staggerChildren: 0.1
    }
},
   closed:
        { transition:{
        staggerChildren: 0.05,
        staggarDirection: -1
    },
}
}
    const itemVariants ={
   open:
        { y:0,
        opacity: 1,
},
   closed:
        {
            y:50,
            opacity: 0,
}
}

    const items =[
        {
           id : 1,
           title: "Homepage",
           link: "#Homepage"

        },
        {
            id : 2,
            title:"About",
            link:"#About"
        },
        {
            id : 1,
            title:"Project",
            link:"#Project"
        },
        {
            id : 1,
            title:"Contact",
            link:"#Contact"
        },
        
    ]
  return (
    <motion.div className='absolute w-full h-full flex flex-col items-center justify-center gap-3' variants={variants}>
      
        {items.map((item)=>(
            <motion.a href={item.link}  key={item.id} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}
                className="text-[28px]"
            >
                {item.title}
            </motion.a>
        ))}
    </motion.div>
  )
}

export default Links