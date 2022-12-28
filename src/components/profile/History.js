import Timeline from "./Timeline"
import {useState, useCallback} from "react";
import {useTranslation} from 'react-i18next';
import styled from "styled-components";
import { createContext, useContext } from "react";
import { VIVID_PINK, GREY } from '../styles/Variables';
import { FadeIn } from "../styles/AnimatePage";

const HistoryContext = createContext();

const initialPinState = {
    "stories": true,
    "experience": false,
    "skills": false,
    "education": false,
    "certifications": false,
}

export default function History(){
    const [pins, setPins] = useState(initialPinState);

    const clickPin = useCallback((name) => {
        setPins((pins)=> ({
            ...pins,
            [name]: !pins[name],
        }));
    },[]);

    const { i18n } = useTranslation();

    const value = {
        pins,
        clickPin,
        i18n,
    }
    return (
        <HistoryContext.Provider value={value}>
            <HistoryContainerStyle id="history-container">
                <AboutMe />
                <Experience />
                <Skills />
                <Education />
                <Certificates />
            </HistoryContainerStyle>
        </HistoryContext.Provider>
    )
}


/* Sub components */
const AboutMe = () => {
    const { pins: { stories }, clickPin, i18n} = useContext(HistoryContext);

    return (
        <div className="pin-container">
        {stories ?
            <ContentBoxStyle onClick={()=>clickPin("stories")}>
                <h3>📍 Who am I</h3>
                <div>
                    <FadeIn>
                        <h5>[My stories]</h5>
                        <p>{i18n.t("portfolio.myStory")}</p>
                        <br></br>
                        <h5>[Problem solving]</h5>
                        <p>{i18n.t("portfolio.pvSkill")}</p>
                    </FadeIn>
                </div>
            </ContentBoxStyle >
        :
            <ContentBoxStyle pinned  onClick={()=>clickPin("stories")}>
                <h3>📌 Who am I</h3>
            </ContentBoxStyle>
        }
    </div>
    )
}

const Experience = () => {
    const { pins: { experience }, clickPin} = useContext(HistoryContext);
    
    return (
        <div className="pin-container">
            {experience ?
            <ContentBoxStyle onClick={()=>clickPin("experience")}>
                <h3>📍 Experience</h3>
                <div>
                    <FadeIn>
                        <Timeline data={experienceData}/>
                    </FadeIn>
                </div>
            </ContentBoxStyle>
            :
            <ContentBoxStyle pinned onClick={()=>clickPin("experience")}>
                <h3>📌 Experience</h3>
            </ContentBoxStyle>
            }
        </div>
    )
}


const Skills = () => {
    const { pins: { skills }, clickPin} = useContext(HistoryContext);

    // Badge images from: https://github.com/Ileriayo/markdown-badges 
    // data engineering: pandas, scikit-learn, tensorflow
    return (
        <div className="pin-container">
            {skills ?
                <ContentBoxStyle onClick={()=>clickPin("skills")}>
                    <h3>📍 Skills</h3>
                    <div>
                        <FadeIn>
                            {Object.keys(skillsetData).map(k=>(
                                <SkillSection key={k}>
                                    <h5>#{k}</h5>
                                    {skillsetData[k].map(v=>(
                                        <img alt="skillset img" src={v}/>
                                    ))}
                                    <HrStyle/>
                                </SkillSection>
                            ))}
                            <SkillSection>
                                <h5>#Languages</h5>
                                <div>
                                    <h6>English 🇺🇸</h6>
                                    <Rating rating={5}/>
                                </div>
                                <div>
                                    <h6>Korean 🇰🇷 </h6>
                                    <Rating rating={5}/>
                                </div>
                                <div>
                                    <h6>Vietnamese 🇻🇳 </h6>
                                    <Rating rating={3}/>
                                </div>
                            </SkillSection>
                        </FadeIn>
                    </div>
            </ContentBoxStyle> :
            <ContentBoxStyle pinned onClick={()=>clickPin("skills")}>
                <h3>📌 Skills</h3>
            </ContentBoxStyle>
        }
    </div>
    )
}

const Education = () => {
    const { pins: { education }, clickPin, i18n} = useContext(HistoryContext);

    return (
        <div  className="pin-container">
        {education ?
            <ContentBoxStyle onClick={()=>clickPin("education")}>
                <h3>📍 Education</h3>
                <div>
                    <FadeIn>
                        <Timeline data={educationData}/>
                    </FadeIn>
                </div>
            </ContentBoxStyle>:
            <ContentBoxStyle pinned onClick={()=>clickPin("education")}>
                <h3 >📌 Education</h3>
            </ContentBoxStyle>
            }
        </div>
    )
}

const Certificates = () => {
    const { pins: {certifications}, clickPin} = useContext(HistoryContext);

    return (
        <div  className="pin-container">
            {certifications?
                <ContentBoxStyle onClick={()=>clickPin("certifications")}>
                    <h3>📍 Certifications</h3>
                    <div>
                        <FadeIn>
                            <a target="_blank" rel="noreferrer" href="https://www.credly.com/badges/af548962-e856-420d-90c8-6ec883768645/public_url">
                                <img alt="certificate img" style={{width:"min(110px,10vw)"}} src="https://images.credly.com/size/220x220/images/9fa03060-0fc9-4f0a-9ae5-b0ba1d8b8d1d/fea58a7414d4f03b5d2d86a63662b11e.png"/>
                            </a>
                            <a target="_blank" rel="noreferrer"  href="https://www.credly.com/badges/f936dff8-1ca0-4b8b-94b4-7239607286a4/public_url">
                                <img alt="certificate img" style={{width:"min(110px,10vw)"}} src="https://images.credly.com/size/220x220/images/119d821a-8301-4323-a753-9c9f344960f4/9784fbfd1e03b1141eb2d6b18c9f7bec.png"/>
                            </a>
                            <a target="_blank" rel="noreferrer"  href="https://www.credly.com/badges/d6939e80-2bc3-4011-9e32-99247d9a702c/public_url">
                                <img alt="certificate img" style={{width:"min(110px,10vw)"}} src="https://images.credly.com/size/220x220/images/4eb571eb-836d-4a9f-ba7b-d931259aa1cf/d2ca6189449219c78816b05e75c9a7a8.png"/>
                            </a>
                            <a target="_blank" rel="noreferrer"  href="https://www.credly.com/badges/2ee9aaad-0c1b-4d07-9ce8-a2225943a617/public_url">
                                <img alt="certificate img" style={{width:"min(110px,10vw)"}} src="https://images.credly.com/size/220x220/images/3d65d267-c1ac-4508-a733-2ff86dc9bacb/PM-Cred-Badge-Image_-_Sarah_George.png"/>
                            </a>
                        </FadeIn>
                    </div>
                </ContentBoxStyle> :
                <ContentBoxStyle pinned onClick={()=>clickPin("certifications")}>
                    <h3>📌 Certifications</h3>
                </ContentBoxStyle>
                }
            </div>
    )
}


const Rating = ({rating}) => {
    let dotStyleArr = []

    for(let i=0; i<5; i++){
        if (rating === 0){
            dotStyleArr.push(<DotStyle empty/>)
        } else {
            dotStyleArr.push(<DotStyle/>)
            rating -= 1
        }
    }

    return (
        <div style={{display:"flex"}}>
            {dotStyleArr}
        </div>
    )
}
  


/* Style components */
const ContentBoxStyle = styled.div`
    h3 {
        margin-bottom: 1vh;
    }
    & > div {
        width: 100%;
        height: fit-content;
        padding: 2vh 4vh;
        background-color: rgba(0,0,0,0.02);
        border-radius: 10px;
    }
    opacity: ${(props)=>props.pinned ? "40%": "100%"};
`

const SkillSection = styled.div`
    h5{
        font-weight:600;
        font-style:italic;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
    img{
        height: max(15px, 4vh);
    }
`

const DotStyle = styled.div`
    width: 0.8vw;
    height: 0.8vw;
    border-radius: 100%;
    margin-left: 5px;
    background-color: ${(props)=>props.empty ? GREY: VIVID_PINK} !important;
    z-index: 5;
`

const HistoryContainerStyle = styled.div`
    min-height:100%;
    height: fit-content;
    display:flex; 
    flex-direction:column;
    justify-content:center;
    .pin-container {
        margin-bottom: 7vh;
        height: max(100%, fit-content);
    }
`

const HrStyle = styled.hr`
    border:none;
    border-top:1px dashed var(--grey);
    color:#fff;
    background-color:#fff;
    height:1px;
    width:100%;
    margin: 1vh 0;
`

/* Dataset */

const skillsetData = {
    "Programming language" : [
        "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
    ],
    "Backend": [
        "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
        "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
    ],
    "Frontend": [
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
    ], 
    "DB & Hosting": [
        "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
        "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
    ]
}

const experienceData = [
    {
        date: "Nov 7 2022 ~ Now",
        title: "Modern React & Redux coach at Alice",
        contents: ["Etc: Tutoring 60 students about JSX, React, React Hooks, Jest, Docker theory and problem solving"],
    },
    {
        date: "Dec 2021 - April 2022 [5mos]",
        title: "Balinne Full-stack freelancer",
        contents: [
            "FE: Responsive website view, Dynamic menu bar, Provide multi-lang, Flash message",
            "BE: Sending direct email on web, Social login authentication, Auto delivery address updates on purchase, Search address using Post Address API",
            "DB: ERD modeling for ordering & payment system",
            "Etc: Web hosting with AWS elastic beans, Cloud S3 storage, Functional & non-functional requirements report, Wrote terms of privacy policy ",
        ],
    },
    {
        date: "Oct 2021 - Dec 2021 [2mos]",
        title: "UN Research Volunteer",
        contents: [
            "Assessed South Korean & Australian digital e-governmence website",
            "Verified the peer assessments and checked the discrepancies"
        ],
    },
    {
        date: "Aug 2021 - Nov 2021 [4mos]",
        title: "Data Science Intern",
        contents: [
            "Scrapped and pre-processed 10 millions of text and image data with Python OOP reusable code in a very short amount of time",
            "Increased model accuracy by 5% by identifying and removing stop word patterns",
            "Created an optimal NLP model using TF-IDF and Mecab",
            "Designed and conducted CRUD operations on the database using MySQL",
        ],
    },
]

const educationData = [
    {
        date: "July 2018 - Dec 2022",
        title: "Majored Information systems at RMIT University [Graduated]",
        contents: [
            "GPA: 3.8/4.0", 
            <a style={{color:VIVID_PINK}} target="_blank" rel="noreferrer" href="https://graceful-canary-e9f.notion.site/Uni-Coursework-aab41c38280c4ba2b8adcb4f57640d8b">My Coursework</a>,
            '"Project management": IT/IS strategy & governance, Sprint, Use case & Class & Acitivty & State diagram, ERD',
            '"Programming": Python, SQL, PHP, JavaScript',
            '"IT operations": Network, Linux, OS Cloud',
            '"Data science": ML modeling, Visualization'
        ],
    },
    {
        date: "May 2021 - Aug 2021",
        title: "Likelion AI school",
        contents: [
            <a style={{color:VIVID_PINK}} target="_blank" rel="noreferrer" href="https://github.com/Yeonny0723/Titanic-data-modelling/blob/main/0705_semi2_Titanic_modeling_v1.ipynb">Coursework part 1</a>,
            <a style={{color:VIVID_PINK}} target="_blank" rel="noreferrer" href="https://github.com/Yeonny0723/Company-recommendation-system">Coursework part 2</a>,
            '"What I learned" : "Statistics, EDA,  Data collection & Visualization, Web scrapping, Text similarity analysis, Data modeling, SQL, ML, DL"',
            '"Libraries": "Matplotlib, Seaborn, Scikit-learn, tensorflow"',
        ],
    },
    {
        date: "2021 - now",
        title: "Self-taught online courses",
        contents: [
            '"CS50 EDX": CS fundamentals,',
            '"YouTube cloning, CSS Masterclass": NodeJS, ES6, Express, Babel, Pug, AJAX, Webpack, SCSS, MongoDB, Mongoose, HTML5, CSS3,',
            '"Webscrapper with Pyhton class": Python3, BeautifulSoup4, Flask,',
            '"Movie service with ReactJS class": React, Axios, React Router, ',
            '"Go lang beginner class": Go lang,',
            '"Painting app, JS To Do List class": Vanilla JS, ',
            '"NFT blockchain market app class": Solidity, Smart contract, BApp a-z,',
            '"Advanced Django web application": Django, MVT pattern , AWS RDS Postgres, S3',
            '"Udemy Algorithm a-z, Fastcampus": Python3, CS fundamentals, Data structure, algorithms',
        ],
    },
]
