import Base from "../components/Base"
import Card from "../components/Card";
import proj_0 from "../img/proj_0.png"
import proj_0_preview from "../img/proj_0_preview.png"

const props_0 = [
    {
        width: "48%",
        title: "Balinne Web shopping mall",
        img: proj_0,
        link : "https://www.youtube.com/watch?v=DsCSNfDMI24&t=6s",
        preview: proj_0_preview, 
        timeline: "2021.07~2022.12",
        desc: "Hello this is Balinne website mall",
        skills: "Node.js / View.js",
        takeaway: "Web general programming"
    },
    {
        width: "24%",
        title: "Data Science Intern",
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


const props_1 = [
    {
        width: "48%",
        title: "Balinne Web shopping mall",
        img: "",
        desc: "Hello this is Balinne website mall"
    },
    {
        width: "48%",
        title: "Balinne Web shopping mall",
        img: "",
        desc: "Hello this is Balinne website mall"
    },
]


const Portfolio = () => {
    const styleCardRow = {    
        display:"flex",
        justifyContent: "space-between",
        alignItems:"center",
        width: "100%",
        marginBottom: "4vh",
    }
    const content = (
        <div className="card-container" style={{ paddingTop:"6vh", height:"100%", overflow: "scroll"}}>
            <div className="page-title" style={{ position:"fixed", marginTop:"-8vh"}}>
                <h1 style={{marginBottom:0}}>Portfolio</h1>
                <div className="underline"></div>
            </div>
            <div className="fadeUp" style={styleCardRow}>
                {props_0.map((props)=>
                    <Card props={props}/>
                )}
            </div>
            <div className="fadeUp" style={styleCardRow}>
                {props_1.map((props)=>
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