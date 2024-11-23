
import { motion } from "framer-motion";
import Container from "./Container";

const items=[
  {
    id: "1",
    title: "Finance Project",
    img: "/assets/welnes.png",
    purpose: "Transaction",
    type: "Bank",
    link: "https://wellness-ebon.vercel.app/"
  },
  {
    id: "2",
    title: "Hotel Project",
    img: "/assets/aochotel.png",
    purpose: "Relaxation",
    type: "Hospitality",
    link: "https://aochotelsuit.vercel.app/"
  },
  {
    id: "3",
    title: "School Project",
    img: "/assets/schools.png",
    purpose: "Community",
    type: "Education",
    link: "https://tbschool.vercel.app/"
  },
  {
    id: "4",
    title: "Shipping Project",
    img: "/assets/shipping.png",
    purpose: "Logistics",
    type: "Freight",
    link: "https://tbschool.vercel.app/"
  },
]

const Portfolio = () => {
  const variants = {
    hover: {
      scale: 1.03,
      rotate: 2,
      transition: { duration: 0.3 },
    },
  };

  const handleClick=(link)=>{
    window.open(link, "_blank")
  }
  return (
    <Container>
      <div className="p-3">

      <h1 className="text-[40px]">Featured Project</h1> 
      <div className="flex flex-col gap-2 lg:grid grid-cols-2 lg:gap-10">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded-2xl cursor-pointer">     
           <div className="image-container">
            <motion.div className="img-container"variants={variants} whileHover="hover">
              <img src={item.img} alt="" className="object-cover rounded-2xl" />
            </motion.div>
            <div className="flex justify-between items-center pt-4">
              <h3 className="text-[14px] lg:text-[18px] font-medium border rounded-md p-1 ">{item.title}</h3>             
       
              <div className="flex items-center gap-3 lg:gap-6">
                <span className="text-[14px] lg:text-[18px] font-medium border rounded-md p-1 ">{item.purpose}</span>
              <span className="hover:opacity-75 flex  items-center  text-[14px] lg:text-[18px] font-medium border rounded-md p-1 " onClick={()=>handleClick(item.link)}> 
               <img src="/assets/link.png" className="w-6 h-6" alt="" />
                
                 Live Demo
              </span>
              </div>
            </div>
            
            </div>
          </div>
        ))}
      </div>

      </div>
    </Container>
  )
}

export default Portfolio