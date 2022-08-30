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
                className={`${isOpen ? null : "card"}`}
                transition={{layout: {duration:1, type:"spring"}}}
                layout 
                onClick={onClick}
                style={{
                    padding: "1.5vw 4vw",
                    boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
                    backgroundColor: `${isOpen? "white" : "rgba(0,0,0,0.15)"}`,
                    borderRadius: "2rem",
                    color: `${isOpen? "black" : "white"}`,
                    backgroundImage: `${isOpen? `url("")` : `url(${props.props.thumbnail})`}`,
                    backgroundSize: "cover",
                    zIndex:"10",
                    width: `${isOpen? "72vw" : "100%"}`,
                    height: `${isOpen? "59vh" : "30vh"}`,
                    position: `${isOpen? "fixed" : "static"}`,
                    top: `${isOpen? "25%" : null}`,
                    left: `${isOpen? "15%" : null}`,
                    overflow: "scroll",
                    textShadow: `${isOpen? "1px 1px 2px rgba(0,0,0,0.1)" :"2px 2px 10px rgba(0,0,0,1)"}`,
                }}>
                <motion.h4 
                    layout="position"
                ><em>{props.props.title} ></em></motion.h4>
                {isOpen &&
                <motion.div 
                    className="expand"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 1}}
                    layout 
                    style={{
                        display:"flex",
                        justifyContent:"space-between"
                    }}
                    >
                    <div style={{width:"40%", marginTop:"3%"}}>
                        <img 
                            src={props.props.preview}
                            className="shadow"
                            style={{maxWidth:"100%", borderRadius:"20px"}}
                        />
                    </div>
                    <div 
                        style={{width:"55%", backgroundColor:"#FCFCFC", padding:"1% 3.5%",}}>
                        <h4 style={{marginBottom:"0"}}>Description</h4>
                        <div className="underline"></div>
                        {/* Project summary */}
                        <div>
                            <a href={props.props.link} target="_blank" style={{color:"#F08C6F"}}><span><i className="fa-solid fa-code fa-sm"></i> &nbsp;Demo</span></a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><i className="fa-solid fa-calendar-days fa-lg" style={{color:"#F08C6F", marginBottom:"5vh"}}></i> &nbsp;{props.props.timeline}</span>
                            <h5><em># Summary</em></h5>
                            <p style={pStyle}>{props.props.desc}</p>
                        </div>
                        <br></br>
                        {/* Used skills */}
                        <div>
                            <h5><em># Skills</em></h5>
                            <p>{props.props.skills}</p>
                        </div>
                        <br></br>
                        {/* Takeaway */}
                        <div>
                            <h5><em># Takeaway</em></h5>
                            <p>{props.props.takeaway}</p>
                        </div>
                        <br></br>
                    </div>
                </motion.div> 
                }
            </motion.div>
        </div>
    )
}

export default Card