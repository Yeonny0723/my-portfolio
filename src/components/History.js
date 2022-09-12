import Timeline from "../components/Timeline"

const History = () => {
    const tagStyle = {
        fontWeight:"600",
        fontStyle:"italic",
        fontSize:"0.7rem",
    }

    return (
        <div className="history-container blur" style={{
            width:"100%", 
            padding: "0 5%",
            }}>
                {/* Experience */}
                <div>
                    <h3 style={{marginBottom:"0", marginTop:"10px"}}>Experience</h3>
                    <div className="underline"></div>
                    <ul style={{listStyle:"none", padding:"0"}}>
                        <Timeline date={"Dec 2021 - April 2022 [5mos]"} title={"Balinne Full-stack freelancer"} content={<ul>
                            <li><p>Developed the responsive e-commerce website from scratch reflecting the ordering and payment use cases.</p></li>
                            <li><p>Conducted an iterative approach to elicit clients’ functional and non-functional requirements, design an ERD database, and write a functional specification.</p></li>
                        </ul>}/>
                        <br></br>
                        <Timeline date={"Oct 2021 - Dec 2021 [2mos]"} title={"UN Research Volunteer"} content={<ul>
                            <li><p>Assessed South Korean & Australian digital e-governmence website</p></li>
                            <li><p>Verified the peer assessments and checked the discrepancies</p></li>
                        </ul>}/>
                        <br></br>
                        <Timeline date={"Aug 2021 - Nov 2021 [4mos]"} title={"Data Science Intern"} content={<ul>
                            <li><p>Scrapped and pre-processed 10 millions of text and image data with Python OOP reusable code in a very short amount of time</p></li>
                            <li><p>Increased model accuracy by 5% by identifying and removing stop word patterns</p></li>
                            <li><p>Created an optimal NLP model using TF-IDF and Mecab</p></li>
                            <li><p>Designed and conducted CRUD operations on the database using MySQL</p></li>
                        </ul>}/>
                    </ul>
                </div>
                {/* Skills */}
                <div>
                    <h4 style={{marginBottom:"0"}}>Skills</h4>
                    <div className="underline"></div>
                    {/* Programming language */}
                    <p style={tagStyle}>#Programming language</p><br></br>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
                    <br></br>
                    <hr></hr>
                    {/* Back-en
                    <hr></hr>d */}
                    <p style={tagStyle}>#Backend</p><br></br>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"/>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
                    <br></br>
                    <hr></hr>
                    {/* Front-end */}
                    <p style={tagStyle}>#Frontend</p><br></br>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
                    <br></br>
                    <hr></hr>
                    {/* Data engineering
                    <p style={tagStyle}>#Data engineering</p><br></br>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white"/>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white"/>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white"/>
                    <br></br> */}
                    {/* Database & Hosting */}
                    <p style={tagStyle}>#DB & Hosting</p><br></br>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
                    <img style={{height:"max(20px,5vh)"}} src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"/>
                    <br></br>
                    <hr></hr>
                    {/* Language */}
                    <p style={tagStyle}>#Languages</p><br></br>
                    <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                        <span>English 🇺🇸</span>
                        <div style={{display:"flex"}}>
                            <div className="dot-filled"></div>
                            <div className="dot-filled"></div>
                            <div className="dot-filled"></div>
                            <div className="dot-filled"></div>
                            <div className="dot-empty"></div>
                        </div>
                    </div>
                    <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                        <span>Korean 🇰🇷 </span>
                        <div style={{display:"flex"}}>
                            <div className="dot-filled"></div>
                            <div className="dot-filled"></div>
                            <div className="dot-filled"></div>
                            <div className="dot-filled"></div>
                            <div className="dot-filled"></div>
                        </div>
                    </div>
                    <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
                        <span>Vietnamese 🇻🇳 </span>
                        <div style={{display:"flex"}}>
                            <div className="dot-filled"></div>
                            <div className="dot-filled"></div>
                            <div className="dot-filled"></div>
                            <div className="dot-empty"></div>
                            <div className="dot-empty"></div>
                        </div>
                    </div>
                    <br></br>
                </div>
                
                {/* Education */}
                <div>
                    <h4 style={{marginBottom:"0"}}>Education</h4>
                    <div className="underline"></div>
                    <ul style={{listStyle:"none", padding:"0"}}>
                        <Timeline date={"July 2018 - June 2022"} title={"Majored Information systems at RMIT"} content={
                            <span>
                                <span>GPA: 3.8/4.0</span> <br></br>
                                <span>Explore my <a style={{color:"#F7C1B1"}} target="_blank" href="https://yeonny-kim.notion.site/RMIT-Uni-Information-Systems-924373c5ff5446e08e9558e566e4f527"><em>COURSEWORK</em></a></span>
                            </span>
                            }/>
                        <br></br>
                        <Timeline date={"May 2021 - Aug 2021"} title={"Likelion AI school"} content={
                            <span>Explore my 
                                <br></br>
                                <a style={{color:"#F7C1B1"}} target="_blank" href="https://github.com/Yeonny0723/Titanic-data-modelling/blob/main/0705_semi2_Titanic_modeling_v1.ipynb"><em>COURSEWORK</em></a> | <a style={{color:"#F7C1B1"}} target="_blank" href="https://github.com/Yeonny0723/Company-recommendation-system"><em>COURSEWORK</em></a>
                            </span>
                        }/>
                    </ul>
                </div>
                {/* Certifications */}
                <div>
                    <h4 style={{marginBottom:"0"}}>Certifications</h4>
                    <div className="underline"></div>
                    <a target="_blank" href="https://www.credly.com/badges/af548962-e856-420d-90c8-6ec883768645/public_url">
                    <img style={{width:"min(110px,10vw)"}} src="https://images.credly.com/size/220x220/images/9fa03060-0fc9-4f0a-9ae5-b0ba1d8b8d1d/fea58a7414d4f03b5d2d86a63662b11e.png"/>
                    </a>
                    <a target="_blank" href="https://www.credly.com/badges/f936dff8-1ca0-4b8b-94b4-7239607286a4/public_url">
                    <img style={{width:"min(110px,10vw)"}} src="https://images.credly.com/size/220x220/images/119d821a-8301-4323-a753-9c9f344960f4/9784fbfd1e03b1141eb2d6b18c9f7bec.png"/>
                    </a>
                    <a target="_blank" href="https://www.credly.com/badges/d6939e80-2bc3-4011-9e32-99247d9a702c/public_url">
                        <img style={{width:"min(110px,10vw)"}} src="https://images.credly.com/size/220x220/images/4eb571eb-836d-4a9f-ba7b-d931259aa1cf/d2ca6189449219c78816b05e75c9a7a8.png"/>
                    </a>
                    <a target="_blank" href="https://www.credly.com/badges/2ee9aaad-0c1b-4d07-9ce8-a2225943a617/public_url">
                        <img style={{width:"min(110px,10vw)"}} src="https://images.credly.com/size/220x220/images/3d65d267-c1ac-4508-a733-2ff86dc9bacb/PM-Cred-Badge-Image_-_Sarah_George.png"/>
                    </a>
                </div>
            </div>
    )
}

export default History