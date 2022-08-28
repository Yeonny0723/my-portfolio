import {motion} from "framer-motion";
import {useState} from "react";

const Card = () => {

    const [isOpen, setIsOpened] = useState(false);

    const pStyle = {
        paddingTop: "1rem",
        lineHeight: "150%",
        width:"100%",
    }
    return (
            <motion.div 
                className="card"
                transition={{layout: {duration:1, type:"spring"}}}
                layout 
                onClick={()=>setIsOpened((isOpen)=>setIsOpened(!isOpen))}
                style={{
                    padding: "3rem 5rem",
                    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
                    backgroundColor: "#F7F7F7",
                    // backgroundImage: 'url("../img/proj_0.png")',
                    borderRadius: "2rem",
                }}>
                <motion.h2 layout="position">Web shopping mall development</motion.h2>
                {isOpen &&
                <motion.div 
                    className="expand"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 1}}
                    layout 
                    style={{width:"60vw"}}
                >
                    <p style={pStyle}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                    <p style={pStyle}>If you are happy and you know it clap your hand!</p>
                </motion.div> 
                }
            </motion.div>
    )
}

export default Card