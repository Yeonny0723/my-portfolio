import Timeline from "../components/Timeline"

const History = () => {
    return (
        <div style={{width:"100%"}}>
            <div style={{width:"100%"}}>
                <h2 style={{marginBottom:"0"}}>Experience</h2>
                <div className="underline"></div>
                <ul style={{listStyle:"none"}}>
                    <Timeline date={"March 12 2016"} title={"Event Title"} content={"Python project"}/>
                    <Timeline date={"March 12 2016"} title={"Event Title"} content={"Python project"}/>
                    <Timeline date={"March 12 2016"} title={"Event Title"} content={"Python project"}/>
                </ul>
            </div>
            <div style={{width:"100%"}}>
                <h2 style={{marginBottom:"0"}}>Education</h2>
                <div className="underline"></div>
            </div>
            <div style={{display:"flex", width:"100%"}}>
                <div style={{width:"50%"}}>
                    <h2 style={{marginBottom:"0"}}>Skills</h2>
                    <div className="underline"></div>
                </div>
                <div style={{width:"50%"}}>
                    <h2 style={{marginBottom:"0"}}>Certifications</h2>
                    <div className="underline"></div>
                </div>
            </div>
      
        </div>
    )
}

export default History