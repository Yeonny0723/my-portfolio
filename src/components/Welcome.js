import React, { useState } from "react";
import Language from "./Language"
import {useTranslation} from 'react-i18next';
import { motion } from "framer-motion";
import {Bounce} from "../components/AnimatePage"
import {NavLink} from 'react-router-dom';

const Welcome = () => {
    // Welcome slide constant
    const slideStyle = {
        display:"flex", 
        flexDirection:"column", 
        justifyContent:"center", 
        alignItems:"center", 
        width:"100%", 
        height:"60vh",
    }

    // initialize const for translation
    const { t, i18n } = useTranslation();

    // lang byte animation
    const [clicked, setClicked] = useState(false);


    // show if a lang was at least clicked once
    const [firstClicked, setFirstClicked] = useState(false);


    return (
    <div className="window-container" style={{width:"100%", height:"100%", overflow:"scroll"}}>
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
        ><em>{i18n.t("home.title")} 👋</em></motion.h1>
        <Bounce>
        <a href="#home-lang" style={{color:"black"}}>
        <h5  style={{cursor:"pointer", margin:"0"}}>
          {i18n.t("home.click")}
        </h5>
        <br></br>
        <i style={{width:"100%", textAlign:"center"}} className="fa-solid fa-angles-down"></i>
        </a>
        </Bounce>
        </motion.div>
        <div style={{...slideStyle, justifyContent:"space-around"}}>
        <motion.h2 
            id="home-lang"
            style={{fontSize:"5vh", margin:"0"}}
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

        ><em>{i18n.t("home.lang.0")} <em className='highlight-pink'> {i18n.t("home.lang.1")}</em></em></motion.h2>
        <div onClick={()=>{
          setClicked((clicked)=>!clicked);
          setFirstClicked(true);
          }}
          >
          <Language cls={"highlight-pink"}/> 
        </div>
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
            alt="byte img"
            src={require(`../img/${i18n.language}.png`)} 
            style={{width: "25%", minWidth:"50px", opacity:"80%"}}
        />
        <p>(<span className='highlight-pink' style={{textDecoration:"none"}}>"{i18n.t("home.comment.0")}"</span> {i18n.t("home.comment.1")})</p>
        {firstClicked?
          <Bounce>
            <NavLink to="/profile"><i style={{width:"100%", textAlign:"center", color:"grey"}} className="fa-solid fa-angles-down"></i></NavLink>
          </Bounce>
        : 
          <div></div>
        }
        </div>
    </div>
    )
}

export default Welcome