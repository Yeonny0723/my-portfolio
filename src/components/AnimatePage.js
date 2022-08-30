import { motion } from "framer-motion";


export const moveToBottom = (event) => {
  event.preventDefault();
  const totalHeight = document.getElementById("window").scrollHeight;
  const windowContainer = document.getElementsByClassName("window-container");
  windowContainer[0].scrollTop = totalHeight;
}

export const LeftSlide = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export const RightSlide = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export const UpSlide = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        y: {
          ease: "easeInOut",
          duration: 1.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
};


export const Bounce = ({children}) => {
  const transitionValues = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };
  return(
  <motion.div
    transition={{
      delay: 0.5,
      y: transitionValues,
    }}
    animate={{
      y: ["2vh","6vh"],
    }}
  >{children}
  </motion.div>
  )
}

export const BounceUp = ({children}) => {
  const transitionValues = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
  };
  return(
  <motion.div
    transition={{
      delay: 0.5,
      y: transitionValues,
    }}
    animate={{
      y: ["0rem","-1rem"],
    }}
  >{children}
  </motion.div>
  )
}


export const OnBlur = (e) => {
  const target = document.getElementsByClassName("history-container")[0]
  target.classList.toggle("blur")
  target.classList.toggle("fadeUp")
}


export const Rotate360 = ({children}) => {
    return(
      <motion.div
      style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontWeight:"600",
          color:"white",
          height:"100%",
          textShadow:"5px 5px 5px rgba(0,0,0,0.2)",
      }}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale:1 }}
      transition={{
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        scale: {
            duration: 1,
          },
      }}
      >
        {children}
      </motion.div>
    )
}