import { motion } from "framer-motion";
import { OnBlur } from "./AnimatePage";


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
            <div style={{display:"flex", alignItems:"center", height: "15%", width:"100%", backgroundColor:"#374151", padding:"5px", position:"sticky", top:"0"}}>
                <div style={{...btnStyle, backgroundColor:"tomato"}}></div>
                <div style={{...btnStyle, backgroundColor:"#FFBF2E"}}></div>
                <div style={{...btnStyle, backgroundColor:"#27CA40"}}></div>
            </div>
            <div style={{width:"100%", color:"white", padding:"15px", display:"flex", flexDirection:"column"}}>
                <Spacing white={"class Juyeon: "} num="1"/>
                {/* init */}
                <Spacing white={"def __init__(self): "} num="2"/>
                <Spacing white={"self.name: "} green={'"Juyeon Kim"'} num="3"/>
                <Spacing white={"self.__age: "} green={'"shhh"'} num="3"/>
                <Spacing white={"self.email: "} green={'"kkjuyeon@gmail.com"'} num="3"/>
                <Spacing white={"self.nationality: "} green={'"South korea"'} num="3"/>
                <Spacing white={"self.favorite_algorithm: "} green={'"Greedy algorithm"'} num="3"/>
                <br></br>
                {/* age getter */}
                <Spacing white={"@property"} green={""} num="2"/>
                <Spacing white={"def age_getter(self):"} green={""} num="2"/>
                <Spacing white={"return self.__age"} green={""} num="3"/>
                <br></br>
                {/* age setter */}
                <Spacing white={"@age_getter.setter"} green={""} num="2"/>
                <Spacing white={"def age_setter(self, age):"} green={""} num="2"/>
                <Spacing white={"self.__age = age"} green={""} num="3"/>
                <br></br>
                {/* about  me */}
                <Spacing white={"@staticmethod"} green={""} num="2"/>
                <Spacing white={"def about_me():"} green={""} num="2"/>
                <Spacing white={'print("This is me! :>")'} green={""} num="3"/>
                <br></br>
                {/* print */}
                <Spacing white={"juyeon = Juyeon();"} green={""} num="1"/>
                <Spacing white={"juyeon.age_setter = 23;"} green={""} num="1"/>
                <Spacing white={"juyeon.about_me();"} green={""} num="1"/>

            </div>
            <motion.div 
                onClick={OnBlur}
                initial={{ opacity: 0.7, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.2, x:-50 }}
                style={{position:"sticky", bottom:"25px", display:"flex",justifyContent:"end", margin:"0 20px"}}>
                <em style={{ 
                    width: "fit-content", 
                    backgroundColor: "#FFE2D9", 
                    padding:"7px 10px", 
                    borderRadius:"8px",
                    cursor:"pointer",
                }}>
                    Click to run
                </em>
            </motion.div>
        </div>
    )
}

export default Terminal