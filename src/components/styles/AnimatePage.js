import { motion } from "framer-motion";
import { SHADOW } from "./Variables";

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

export const Bounce = ({ children }) => {
  const transitionValues = {
    duration: 0.5,
    repeatType: "mirror",
    repeat: Infinity,
    ease: "easeInOut",
  };
  return (
    <motion.div
      transition={{
        delay: 0.5,
        y: transitionValues,
      }}
      animate={{
        y: ["-1.5vh", "2.5vh"],
      }}
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      {children}
    </motion.div>
  );
};

export const BounceUp = ({ children }) => {
  const transitionValues = {
    duration: 0.5,
    repeatType: "mirror",
    repeat: Infinity,
    ease: "easeInOut",
  };
  return (
    <motion.div
      transition={{
        delay: 0.5,
        y: transitionValues,
      }}
      animate={{
        y: ["0rem", "-1rem"],
      }}
    >
      {children}
    </motion.div>
  );
};

export const Rotate360 = ({ children }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "600",
        color: "white",
        height: "100%",
        textShadow: SHADOW,
      }}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        repeat: Infinity,
        repeatDelay: 1,
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
  );
};

export const TextTitleAnimate = ({ children, duration }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      transition={{
        default: {
          duration: duration,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      exit={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        y: {
          ease: "linear",
          duration: 1,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const ButtonHoverScale = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.7, scale: 1 }}
      whileHover={{ opacity: 1, scale: 1.2, x: -50 }}
      style={{
        position: "sticky",
        bottom: "4vh",
        display: "flex",
        justifyContent: "end",
        margin: "0 2vw",
      }}
    >
      <em
        style={{
          width: "fit-content",
          backgroundColor: "#FFE2D9",
          padding: "1vh 1vw",
          borderRadius: "0.8vw",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </em>
    </motion.div>
  );
};

export const ShakingImageAnimate = ({ clicked, src }) => {
  return (
    <motion.img
      animate={{
        rotateY: clicked ? [90, 0] : [90, 180],
        rotateX: clicked
          ? [10, -10, 10, -10, 5, -5, 3, -3]
          : [-10, 10, -10, 10, -5, 5, -3, 3],
        opacity: 1,
        duration: 0.5,
        transition: {
          ease: "circOut",
        },
      }}
      alt="byte img"
      src={src}
      style={{ height: "23vh", minWidth: "50px", opacity: "80%" }}
    />
  );
};
