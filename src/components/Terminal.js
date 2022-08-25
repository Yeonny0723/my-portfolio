
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
        <div class="terminal-container" style={{height: "30vh", width:"50vh", borderRadius:"10px", overflow:"scroll", backgroundColor:"#111827"}}>
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
        </div>
    )
}

export default Terminal