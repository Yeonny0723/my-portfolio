import Base from "../components/Base"
import Card from "../components/Card";

import proj_0_thumbnail from "../img/proj_0_thumbnail.jpeg"
import proj_0_preview from "../img/proj_0_preview.jpeg"

import proj_1_preview from "../img/proj_1_preview.jpeg"

import proj_2_preview from "../img/proj_2_preview.jpeg"

import proj_3_preview from "../img/proj_3_preview.jpeg"

import proj_4_thumbnail from "../img/proj_4_thumbnail.jpeg"

import proj_5_thumbnail from "../img/proj_5_thumbnail.jpeg"
import proj_5_preview from "../img/proj_5_thumbnail.jpeg"




const props_0 = [
    // Balinne web shopping mall
    {
        width: "48%",
        title: "Balinne Web shopping mall",
        thumbnail: proj_0_thumbnail,
        link : "https://www.youtube.com/watch?v=DsCSNfDMI24&t=6s",
        preview: proj_0_preview, 
        timeline: "2021.12 ~ 2022.04",
        desc: "To create an E-commerce website from scratch",
        skills: "Django · MySQL · JavaScript · AWS Elastic Beanstalk ",
        takeaway: 
        <ol>
            <li>Elicit client’s functional & non-functional requirements</li>
            <li>Take an iterative approach for prototype mockup with Adobe XD</li>
            <li>ERD Database design</li>
            <li>Responsive front-end development with HTML5, SCSS, and Bootstrap5</li>
            <li>Develop social login, direct e-mail transfer via the web, admin page login with Django and JavaScript</li>
            <li>Website deployment and database storage on AWS</li>
        </ol>
        },
    // Hotel reservation
    {
        width: "24%",
        title: "Hotel reservation system",
        thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGF0YXNjaWVuY2V8fHx8fHwxNjYxNzc4MTkw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source",
        link : "https://github.com/Yeonny0723/rmit/tree/main/info_sys_solution_n_design/asgnt-02",
        preview: proj_1_preview, 
        timeline: "2022.05 ~ 2022.05",
        desc: "AHS hotel reservation system to streamline manual booking process",
        skills: "SQLite · Tkinter",
        takeaway: <ol>
            <li>Python oop</li>
            <li>Database design</li>
            <li>Pip8 practice</li>
            <li>PEP naming conventions</li>
            <li>Parameterized coding</li>
            <li>Testing and validation</li>
        </ol>,
    },
    // Potential customer prediction
    {
        width: "24%",
        title: "Potential customer prediction",
        thumbnail: "",
        link :  "https://github.com/Yeonny0723/rmit/tree/main/info_sys_solution_n_design/asgnt_3",
        preview: proj_2_preview, 
        timeline: "2022.06 ~ 2022.06",
        desc: "This project aims to give an insight for Nationale Azur on how to conduct a more targeted marketing approach to their potential group of customers who are likely to repay their loan",
        skills: "Pandas · scikit-learn · matplotlib · seaborn",
        takeaway: <ol>
            <li>Business analysis</li>
            <li>Explanatory data analysis</li>
            <li>Data cleaning</li>
            <li>KNN & Random forest modeling</li>
            <li>Feature selection</li>
            <li>Parameter tuning</li>
        </ol>
    },

]

// https://source.unsplash.com/random/?program

const props_1 = [
    // Fruity pang pang
    {
        width: "24%",
        title: "Fruity pang pang",
        thumbnail: "",
        link : "https://fruitypangpang.netlify.app/",
        preview: proj_3_preview, 
        timeline: "2021.03 ~ 2021.03",
        desc: "Following the korean trend labeling celebrities look as a fruit, this is an AI based test to find out your face reminds of which fruit.",
        skills: "Flask · HTML5 · Teachable macine · Web scrapping",
        takeaway: <ol>
            <li>Scrap thousands of kpop images on google</li>
            <li>Improve accuracy by (1) adjusting brightness & saturation, (2) using face extraction</li>
            <li>Image classification model was trained using teachable machine</li>
        </ol>
    },
    // Social distancing
    {
        width: "24%",
        title: "Korean Covid19 distancing rules",
        thumbnail: "https://images.unsplash.com/photo-1584652812805-2192cf80731d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y292aWR8fHx8fHwxNjYxNzc4NDc5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source",
        link : "https://covid-business-restriction-kr.herokuapp.com/",
        preview: proj_4_thumbnail, 
        timeline: "2021.02 ~ 2021.2",
        desc: "A service showing according sanitary rules by social distancing level during pandemic",
        skills: "Flask · HTML5",
        takeaway: "...",
    },
    // Oatmeal project
    {
        width: "48%",
        title: "Oatmeal: AI diet plan ",
        thumbnail: proj_5_thumbnail,
        link : "https://www.youtube.com/watch?v=djnRc7b8Lk4&t=161s",
        preview: proj_5_preview, 
        timeline: "2021.07 ~ 2021.11",
        desc: "AI diet plan & supplement reccomendation service [Food safety korea contest]",
        skills: "Scikit-learn · ALS algorithm · Tensorflow · matplotlib · cs2 · User CF · Content-based CF · Image classification · Django",
        takeaway: <ol>
            <li>Studied effective data storage structure</li>
            <li>Implemented various ML algorithm (CF, tf-idf, ALS algorithm)</li>
            <li>Used scrum framework using Trello</li>
        </ol>
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
        <div className="window-container" style={{overflow:"scroll", height:"100%"}}>
            <div className="page-title">
                <h3 style={{margin:0}}>Portfolio</h3>
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