import { motion } from "framer-motion";
import { moveToBottom } from "./AnimatePage";

const Terminal = () => {
    const btnStyle = {
        borderRadius:"100%",
        marginLeft: "10px",
        width:"15px",
        height:"15px",
    }
    const textGreen = {
        color: "#43CB46"
    }

    return (
        <div className="terminal-container fadeUp" style={{height: "30vh", width:"40%", borderRadius:"10px", overflow:"scroll", backgroundColor:"#111827", position:"relative"}}>
            <div style={{display:"flex", alignItems:"center",height: "10%", width:"100%", backgroundColor:"#374151", padding:"3px 5px"}}>
                <div style={{...btnStyle, backgroundColor:"tomato"}}></div>
                <div style={{...btnStyle, backgroundColor:"#FFBF2E"}}></div>
                <div style={{...btnStyle, backgroundColor:"#27CA40"}}></div>
            </div>
            <div style={{width:"100%",height:"50vh" , color:"white", padding:"15px"}}>
                <span>&#123;</span>
                <br></br>
                <span style={textGreen}> " Name " :</span>&nbsp;<span>" Juyeon Kim ", </span> 
                <br></br>
                <span style={textGreen}> " Email " :</span>&nbsp;<span>" kkjuyeon@gmail.com  ", </span> 
                <br></br>
                <span>&#125;</span>
            </div>
            <motion.div 
                onClick={moveToBottom}
                initial={{ opacity: 0.7, scale: 0.9 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                style={{position:"absolute", bottom:"25px", right:"25px", backgroundColor: "#FFE2D9", padding:"7px 10px", borderRadius:"8px"}}
            ><em>Click to run</em></motion.div>
        </div>
    )
}

export default Terminal