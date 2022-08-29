import {motion} from "framer-motion";
import {useState} from "react";

const Card = (props) => {

    const [isOpen, setIsOpened] = useState(false);

    const pStyle = {
        paddingTop: "1rem",
        lineHeight: "150%",
        width:"100%",
    }

    // Card event
    const onClick = () => {
        setIsOpened(!isOpen);
        const inactiveScreen = document.getElementById("screen-inactive");
        inactiveScreen.classList.toggle("screen-inactive");
    }

    return (
        <div style={{width:`${props.props.width}`}}>
            <motion.div 
                className="card"
                transition={{layout: {duration:1, type:"spring"}}}
                layout 
                onClick={onClick}
                style={{
                    padding: "3rem 5rem",
                    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
                    backgroundColor: "#F7F7F7",
                    borderRadius: "2rem",
                    color: `${isOpen? "black" : "white"}`,
                    backgroundImage: `${isOpen? `url("")` : `url(${props.props.img})`}`,
                    zIndex:"10",
                    width: `${isOpen? "70vw" : "100%"}`,
                    height: `${isOpen? "55vh" : "30vh"}`,
                    position: `${isOpen? "fixed" : "static"}`,
                    top: `${isOpen? "26%" : null}`,
                    left: `${isOpen? "15%" : null}`,
                    overflow: "scroll",
                    textShadow: "1px 1px 5px rgba(0,0,0,0.1)",
                }}>
                <motion.h2 
                    layout="position"
                >{props.props.title}</motion.h2>
                {isOpen &&
                <motion.div 
                    className="expand"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 1}}
                    layout 
                    >
                    <p style={pStyle}>{props.props.desc}</p>
                </motion.div> 
                }
            </motion.div>
        </div>
    )
}

export default Card