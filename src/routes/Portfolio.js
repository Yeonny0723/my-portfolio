import Base from "../components/Base"
import Card from "../components/Card";

const Portfolio = () => {
    const content = (
        <div>
            <h1 style={{marginBottom:0}}>Portfolio</h1>
            <div class="underline"></div>
            <div
            style={{    
                display:"flex",
                justifyContent: "center",
                alignItems:"center",
                width: "100%",
            }}>
                <Card/>
                <Card/>
            </div>
        </div>
    )
    return (
    <div>
    <Base content={content}/> 
    </div>
    );
}
export default Portfolio;