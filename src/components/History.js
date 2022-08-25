import Timeline from "../components/Timeline"

const History = () => {
    return (
        
        <div style={{width:"100%"}}>
            <div style={{display: 'flex',  width: '100%', justifyContent: 'space-between'}}>
                <div style={{width:"50%"}}>
                    <h2 style={{marginBottom:"0"}}>Experience</h2>
                    <div className="underline"></div>
                    <ul style={{listStyle:"none"}}>
                        <Timeline date={"March 12 2016"} title={"Event Title"} content={"Python project"}/>
                        <Timeline date={"March 12 2016"} title={"Event Title"} content={"Python project"}/>
                        <Timeline date={"March 12 2016"} title={"Event Title"} content={"Python project"}/>
                    </ul>
                </div>
                <div style={{width:"40%"}}>
                    <h2 style={{marginBottom:"0"}}>Education</h2>
                    <div className="underline"></div>
                    <ul style={{listStyle:"none"}}>
                        <Timeline date={"March 12 2016"} title={"Event Title"} content={"Python project"}/>
                        <Timeline date={"March 12 2016"} title={"Event Title"} content={"Python project"}/>
                    </ul>
                </div>
            </div>
            <div style={{display: 'flex',  width: '100%', justifyContent: 'space-between'}}>
                <div style={{width:"50%"}}>
                    <h2 style={{marginBottom:"0"}}>Skills</h2>
                    <div className="underline"></div>
                    {/* Hosting */}
                    <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/>

                    {/* Data engineering */}
                    <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
                    <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"/>
                    <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white"/>
                    <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white"/>
                    {/* Database */}
                    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
                    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>

                    {/* Backend */}
                    <img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"/>
                    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
                    {/* Frontend */}
                    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
                    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
                    <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
                    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
                    <img src=""/>
                </div>
                <div style={{width:"40%"}}>
                    <h2 style={{marginBottom:"0"}}>Certifications</h2>
                    <div className="underline"></div>
                    <a target="_blank" href="https://www.credly.com/badges/af548962-e856-420d-90c8-6ec883768645/public_url">
                    <img width="160px" src="https://images.credly.com/size/220x220/images/9fa03060-0fc9-4f0a-9ae5-b0ba1d8b8d1d/fea58a7414d4f03b5d2d86a63662b11e.png"/></a>
                    <a target="_blank" href="https://www.credly.com/badges/f936dff8-1ca0-4b8b-94b4-7239607286a4/public_url">
                    <img width="160px" src="https://images.credly.com/size/220x220/images/119d821a-8301-4323-a753-9c9f344960f4/9784fbfd1e03b1141eb2d6b18c9f7bec.png"/></a>
                    <a target="_blank" href="https://www.credly.com/badges/d6939e80-2bc3-4011-9e32-99247d9a702c/public_url"><img width="160px" src="https://images.credly.com/size/220x220/images/4eb571eb-836d-4a9f-ba7b-d931259aa1cf/d2ca6189449219c78816b05e75c9a7a8.png"/></a>
                    <a target="_blank" href="https://www.credly.com/badges/2ee9aaad-0c1b-4d07-9ce8-a2225943a617/public_url"><img width="160px" src="https://images.credly.com/size/220x220/images/3d65d267-c1ac-4508-a733-2ff86dc9bacb/PM-Cred-Badge-Image_-_Sarah_George.png"/></a>
                </div>
            </div>
      
        </div>
    )
}

export default History