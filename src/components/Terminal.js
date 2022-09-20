import { motion } from "framer-motion";
import { OnBlur } from "./AnimatePage";

const Terminal = () => {
    const btnStyle = {
        borderRadius:"100%",
        marginLeft: "min(1vw, 10px)",
        width: "min(1.5vw, 15px)",
        height: "min(1.5vw, 15px)",
    }
    const textGreen = {
        color: "#43CB46"
    }

    const Spacing = ({white, green, num}) => {
        num = parseInt(num) * 10
        return (
            <span style={{marginLeft: `${num}px`, lineHeight:"1.5"}}>
                {white} <span style={textGreen}>{green}</span>
            </span>
        )
    }

    return (
        <div className="terminal-container fadeUp shadow" style={{height: "30vh", width:"100%", borderRadius:"10px", overflow:"scroll", backgroundColor:"#111827", position:"relative"}}>
            <div style={{display:"flex", alignItems:"center", height: "15%", width:"100%", borderRadius:"10px 10px 0px 0px", backgroundColor:"#374151", padding:"min(1.5vh, 5px)", overflow:"hidden", position:"sticky", top:"0"}}>
                <div style={{...btnStyle, backgroundColor:"tomato"}}></div>
                <div style={{...btnStyle, backgroundColor:"#FFBF2E"}}></div>
                <div style={{...btnStyle, backgroundColor:"#27CA40"}}></div>
            </div>
            <div style={{width:"100%", color:"white", padding:"1vh", display:"flex", flexDirection:"column"}}>
                <Spacing white={"class Juyeon: "} num="1"/>
                {/* init */}
                <Spacing white={"def __init__(self): "} num="2"/>
                <Spacing white={"self.name: "} green={'"Juyeon Kim"'} num="3"/>
                <Spacing white={"self.age: "} green={'23'} num="3"/>
                <Spacing white={"self.__mbti: "} green={'"shhh"'} num="3"/>
                <Spacing white={"self.email: "} green={'"kkjuyeon@gmail.com"'} num="3"/>
                <Spacing white={"self.nationality: "} green={'"South Korea"'} num="3"/>
                <Spacing white={"self.favorite_algorithm: "} green={'"Greedy algorithm"'} num="3"/>
                <Spacing white={"self.hobby: "} green={'"Weekly walking challenge, cafe tour"'} num="3"/>
                <br></br>
                {/* age getter */}
                <Spacing white={"@property"} green={""} num="2"/>
                <Spacing white={"def mbti_getter(self):"} green={""} num="2"/>
                <Spacing white={"return self.__mbti"} green={""} num="3"/>
                <br></br>
                {/* age setter */}
                <Spacing white={"@mbti_getter.setter"} green={""} num="2"/>
                <Spacing white={"def age_setter(self, mbti):"} green={""} num="2"/>
                <Spacing white={"self.__mbti = mbti"} green={""} num="3"/>
                <br></br>
                {/* about  me */}
                <Spacing white={"@staticmethod"} green={""} num="2"/>
                <Spacing white={"def about_me():"} green={""} num="2"/>
                <Spacing white={'print("This is me! :>")'} green={""} num="3"/>
                <br></br>
                {/* print */}
                <Spacing white={"juyeon = Juyeon();"} green={""} num="1"/>
                <Spacing white={'juyeon.mbti_setter = "ENTJ";'} green={""} num="1"/>
                <Spacing white={"juyeon.about_me();"} green={""} num="1"/>

            </div>
            <motion.div 
                onClick={OnBlur}
                initial={{ opacity: 0.7, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.2, x:-50 }}
                style={{position:"sticky", bottom:"4vh", display:"flex",justifyContent:"end", margin:"0 2vw"}}>
                <em style={{ 
                    width: "fit-content", 
                    backgroundColor: "#FFE2D9", 
                    padding:"1vh 1vw",
                    borderRadius:"0.8vw",
                    cursor:"pointer",
                    display:"flex",
                    justifyContent:"center",
                }}>
                    <span>Click to run</span>
                </em>
            </motion.div>
            <a href="/files/new_resume.docx" download>Click to download</a>
            
        </div>
    )
}

export default Terminal