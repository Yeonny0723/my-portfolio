import { useState } from "react";
import Language from "./Language"
import {useTranslation} from 'react-i18next';
import { motion } from "framer-motion";
import {moveToBottom, Bounce} from "../components/AnimatePage"

const Welcome = () => {
    // Welcome slide constant
    const slideStyle = {
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"center", 
        alignItems:"center", 
        width:"100%", 
        height:"100%",
    }

    // initialize const for translation
    const { t, i18n } = useTranslation();

    // lang byte animation
    const [clicked, setClicked] = useState(false);

    return (
    <div className="window-container" onClick={moveToBottom} style={{width:"100%", height:"100%", overflow:"scroll", scrollBehavior:"smooth"}}>
        <motion.div 
            style={slideStyle}
        >
        <motion.h1 
            style={{fontSize:"7vh", cursor:"pointer"}}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}
        ><em>{i18n.t("welcome.title")} 👋</em></motion.h1>
        <Bounce>
        <strong>{i18n.t("welcome.click")}</strong>
        <br></br>
        <i style={{width:"100%", textAlign:"center"}} className="fa-solid fa-angles-down"></i>
        </Bounce>
        </motion.div>
        <div style={slideStyle}>
        <motion.h1 
            style={{fontSize:"5vh"}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
            transition={{
              default: {
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01]
              },
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}

        ><em>{i18n.t("welcome2.title.0")} <span className='highlight-pink'>{i18n.t("welcome2.title.1")}</span></em></motion.h1>
        <div onClick={()=>{
          setClicked((clicked)=>!clicked)
          }}
          >
          <Language cls={"highlight-pink"}/> 
        </div>
        <br></br>
        <br></br>
        <motion.img 
            animate = {{
              rotateY: clicked? [90,null] : [90,180],
              rotateX: clicked? [10,-10,10,-10,5,-5,3,-3] : [-10,10,-10,10,-5,5,-3,3],
              opacity: 1,
              duration: 0.5,
              transition:{
                ease: "circOut",
              }
            }}
            onClick={()=>{
              setClicked((clicked)=>!clicked)
            }}
            alt="en bytes" 
            src={require(`../img/${i18n.language}.png`)} 
            style={{width: "25%", minWidth:"300px", opacity:"80%"}}
        />
        <br></br>
        <br></br>
        <p>(<span className='highlight-pink' style={{textDecoration:"none"}}>"{i18n.t("welcome2.comment.0")}"</span>{i18n.t("welcome2.comment.1")})</p>
        </div>
    </div>
    )
}

export default Welcome