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
    }

    const content = (
        <div className="window-container" style={{display:"flex", justifyContent:"space-between",
        width: "86%", height: "80%" , padding:"5% 7%"}}>
            <div style={{...{slideStyle}, overflow:"scroll", scrollBehavior:"smooth", width:"45%", fontSize:"0.8rem"}}>
                <SelfIntro/>
                <Terminal/> 
            </div>
            <div style={{...{slideStyle}, overflow:"scroll", scrollBehavior:"smooth", width:"50%", height:"100%", fontSize:"0.8rem"}}>
                <History/>
            </div>
        </div>
    )

    return (
        <Base content={content} /> 
    );
}
export default Profile;
