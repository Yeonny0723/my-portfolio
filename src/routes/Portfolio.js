import Base from "../components/Base"
import Card from "../components/Card";
import proj_0 from "../img/proj_0.png"

const props_0 = [
    {
        width: "48%",
        title: "Balinne Web shopping mall",
        img: proj_0,
        desc: "Hello this is Balinne website mall"
    },
    {
        width: "24%",
        title: "Balinne Web shopping mall",
        img: "",
        desc: "Hello this is Balinne website mall"
    },
    {
        width: "24%",
        title: "Balinne Web shopping mall",
        img: "",
        desc: "Hello this is Balinne website mall"
    },
]



const Portfolio = () => {
    const content = (
        <div
            className="card-container"
            style={{
                overflow: "scroll"
        }}>
            <h1 style={{marginBottom:0}}>Portfolio</h1>
            <div class="underline"></div>
            <div
            style={{    
                display:"flex",
                justifyContent: "space-between",
                alignItems:"center",
                width: "100%",
                marginBottom: "4vh",
            }}>
                {props_0.map((props)=>
                    <Card props={props}/>
                )}
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