import Base from "../components/Base"
import Terminal from "../components/Terminal"
import SelfIntro from "../components/SelfIntro"
import History from "../components/History"

const Profile = () => {
    // Slide 
    const slideStyle = {
        display:"flex", 
        alignItems:"center", 
        justifyContent: "space-between",
        height:"100%",
        padding: "0 15%",
    }
    const content = (
        <div className="window-container" style={{width:"100%", height:"100%", overflow:"scroll", scrollBehavior:"smooth"
        }}>
            <div style={slideStyle}>
                <SelfIntro/>
                <Terminal/> 
            </div>
            <div style={slideStyle}>
                <History/>
            </div>
        </div>
    )
    return (
        <Base content={content} /> 
    );
}
export default Profile;
