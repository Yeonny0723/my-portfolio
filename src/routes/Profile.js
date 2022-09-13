import Base from "../components/Base"
import Terminal from "../components/Terminal"
import SelfIntro from "../components/SelfIntro"
import History from "../components/History"


const Profile = () => {
    // Slide 
    const slideStyle = {
        display:"flex", 
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        height:"100%",
        overflow:"scroll", 
        scrollBehavior:"smooth"
    }

    const content = (
        <div className="window-container" style={{display:"flex", justifyContent:"space-between", alignItems:"center",
        width: "100%", height:"100%"}}>
            <div style={{...{slideStyle}, width:"45%", fontSize:"0.9rem",height: "100%",
    overflow: "scroll"}}>
                <SelfIntro/>
                <Terminal/> 
            </div>
            <div style={{...{slideStyle},width:"50%", fontSize:"0.8rem", height: "100%",
    overflow: "scroll"}}>
                <History/>
            </div>
        </div>
    )

    return (
        <Base content={content} /> 
    );
}
export default Profile;
