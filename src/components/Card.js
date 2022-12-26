import {motion} from "framer-motion";
import {useState} from "react";
import styled from "styled-components";
import {TEXT_PINK} from "./Variables"

const Card = (props) => {

    const [isOpen, setIsOpened] = useState(false);

    // Card event
    const onClick = () => {
        setIsOpened(!isOpen);
        const inactiveScreen = document.getElementById("screen-inactive");
        inactiveScreen.classList.toggle("screen-inactive");
    }

    return (
        <div>
            <CardStyled
                isopen={isOpen ? 1 : 0}
                thumburl={props.props.thumbnail}
                transition={{layout: {duration:1, type:"spring"}}}
                layout 
                onClick={onClick}
                whileHover={{
                    scale:0.98,
                    opacity: 0.7,
                    duration: 0.3,
                }}
                >
                <motion.h4 
                    layout="position"
                ><em>{props.props.title} </em></motion.h4>
                {isOpen &&
                <CardOpen
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 1}}
                    layout 
                    >
                    <img 
                        src={props.props.preview}
                        className="shadow"
                    />
                    <div>
                        <h4>Description</h4>
                        <a href={props.props.link} target="_blank" style={{color:TEXT_PINK}}><p><i className="fa-solid fa-code fa-sm"></i> &nbsp;Github || Demo &nbsp;&nbsp;&nbsp;&nbsp;</p></a>
                        <p><i className="fa-solid fa-calendar-days fa-lg" style={{color:TEXT_PINK}}></i> &nbsp;{props.props.timeline}</p>
                        <h5><em># Summary</em></h5>
                        <Pstyle>{props.props.desc}</Pstyle>
                        <h5><em># Skills</em></h5>
                        <p>{props.props.skills}</p>
                        <h5><em># Takeaway</em></h5>
                        <ul>
                            <p>
                            {props.props.takeaway.map((el, idx)=>
                                <li key={idx}>{el}</li>
                            )}
                            </p>
                        </ul>
                    </div>
                </CardOpen> 
                }
            </CardStyled>
        </div>
    )
}


export default Card


const CardStyled = styled(motion.div)`
    padding: 2.5vw 5vw;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
    border-radius: 2rem;
    background-size: cover;
    z-index: 10;
    overflow: scroll;
    background-color: ${(props)=>props.isopen? "white" : "rgba(0,0,0,0.15)"};
    color: ${(props)=>props.isopen? "black" : "white"};
    background-image: ${(props)=>props.isopen? `url("")` : `url(${props.thumburl})`};
    width: ${(props)=>props.isopen? "72vw" : "100%"};
    height: ${(props)=>props.isopen? "59vh" : "30vh"};
    position: ${(props)=>props.isopen? "fixed" : "static"};
    top: ${(props)=>props.isopen? "25%" : null};
    left: ${(props)=>props.isopen? "15%" : null};
    text-shadow: ${(props)=>props.isopen? "1px 1px 2px rgba(0,0,0,0.1)" :"2px 2px 10px rgba(0,0,0,1)"};
`

const Pstyle = styled.p`
    padding-top: 1rem;
    line-height: 150%;
    width:100%;
`

const CardOpen = styled(motion.div)`
    display:grid;
    justify-content:space-between;
    grid-template-columns: 4fr 5fr;
    & > * {
        max-width:100%;
        border-radius:20px
    }
    div{
        background-color:#FCFCFC;
        padding: 0.2vh 2vh;
        margin-left: 1vh;
        h5 {
            padding-top: 2vh;
        }
    }
`