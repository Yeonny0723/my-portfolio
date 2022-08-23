import {useState} from 'react';
import { motion } from "framer-motion";
import eng from "../img/en.png";
import kr from "../img/kr.png";
import vn from "../img/vn.png";
import {changeLanguage} from "../index"
import { useTranslation } from 'react-i18next';

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

    // Click move down event
    const moveToBottom = (event) => {
        event.preventDefault();
        event.currentTarget.scrollTop = event.currentTarget.scrollHeight
    }

    // click button styling
    const [isActive, setActive] = useState({'en':true, 'kr':false, 'vn':false});
    // multi language
    const {t, i18n} = useTranslation();

    return (
    <div onClick={moveToBottom} style={{width:"100%", height:"100%", overflow:"scroll", scrollBehavior:"smooth"}}>
        <motion.div 
            style={slideStyle}
        >
        <motion.h1 
            style={{fontSize:"7vh"}}
            animate = {{scale:1}}
            initial = {{scale:0}}
            transition={{duration:0.6, repeat:1}}
            whileHover={{scale:1.1}}
        ><em>{t("welcome.title")} 👋</em></motion.h1>
        <motion.span
            animate={{
                y:["30%","-30%"]
            }}
            transition={{
                duration:0.4,
                yoyo: Infinity,
                ease: "easeOut"
            }}
            style={{textAlign:"center", cursor:"pointer"}}
        ><strong>Click to continue</strong><br></br> <i className="fa-solid fa-angles-down"></i></motion.span>
        </motion.div>
        <div style={slideStyle}>
        <motion.h1 
            style={{fontSize:"5vh"}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 }
            }}
        ><em>Select your <span className='highlight-pink'>language!</span></em></motion.h1>
      <nav className="lang" style={{height: 'fit-content'}}>
        <button onClick={()=>changeLanguage(isActive, setActive, "en", i18n)} className={isActive['en'] ? "highlight-pink": null}>English</button>
        <span>|</span>
        <button onClick={()=>changeLanguage(isActive, setActive, "kr", i18n)} className={isActive['kr'] ? "highlight-pink": null} >한국어</button>
        <span>|</span>
        <button onClick={()=>changeLanguage(isActive, setActive, "vn", i18n)} className={isActive['vn'] ? "highlight-pink": null} >Tiếng Việt</button>
      </nav>
        <img alt="eng bytes" src={eng} style={{width: "25%", minWidth:"300px", opacity:"80%"}}/>
        <p>(<p className='highlight-pink' style={{textDecoration:"none"}}>“Hello”</p> 'converted to binary code using utf8 encoding')</p>
        </div>
    </div>
    )
}

export default Welcome