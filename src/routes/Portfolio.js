import Base from "../components/Base"
import Card from "../components/Card";

import proj_0_thumbnail from "../img/proj_0_thumbnail.jpeg"
import proj_0_preview from "../img/proj_0_preview.jpeg"

import film_memories from "../img/film-emories.jpeg"
import soundTrip from "../img/soundTrip.png"
import myPortfolio from "../img/myPortfolio.png"

import proj_1_preview from "../img/proj_1_preview.jpeg"

import proj_2_preview from "../img/proj_2_preview.jpeg"

import proj_3_preview from "../img/proj_3_preview.jpeg"

import proj_4_thumbnail from "../img/proj_4_thumbnail.jpeg"

import proj_5_thumbnail from "../img/proj_5_thumbnail.jpeg"
import proj_5_preview from "../img/proj_5_thumbnail.jpeg"


const props_0 = [
    // Film-emories
    {
        width: "32%",
        title: "Online Photobooth: Film-emories",
        thumbnail: film_memories,
        link : "https://github.com/Yeonny0723/film-emories",
        preview: film_memories, 
        timeline: "2022.Oct.14 ~ 2022.Oct.07",
        desc: "This is an online photo booth service where you can capture your memorable moment. You can take a photo using a webcam and it will generate you a downloadable links for photo card and video. You will have an access to your own photobook where you can keep your photos forever and share it with your friends.",
        skills: "Pug, Webpack, Babel, SCSS, WebAssembly, FFmpeg, Express, Ajax, MongoDB",
        takeaway: 
        <p>I used the modern JS ES6 and compiled them using webpack and babel. I accept this MVC divide and conquer pattern to avoid duplicates and for easy maintenance and reusability. I used WebAssembly to allow the big program like ffmpeg to be able to run on the browser. The recorded video is later saved to the browser memory which reduces the burden on the server. I am now comfortable customizing middlewares / making use of sessions and cookies / creating API.</p>
        },
    // My portfolio
    {
        width: "32%",
        title: "My Portfolio website",
        thumbnail: myPortfolio,
        link : "https://github.com/Yeonny0723/my-portfolio",
        preview: myPortfolio, 
        timeline: "2022.Aug.05 ~ 2022.Aug.31",
        desc: "Starting my developer study in 2020, I wanted to prove my fast-learning curve + potential + creativity through this portfolio. As a non-cs student, I also wanted to appeal my algorithms and cs fundamentals and provide a compact overview of all the projects I've done so far.",
        skills: "React, i8next(multi-language), framer-motion, jest, react-dom, react-router-dom",
        takeaway: 
        <ul>
            <li>For the home page, I tried to make a page interactive and visually appealing with various animations and pictures. And I encoded all the welcome messages of each language I can speak into binary code and added a bit of fun point by visualizing them.</li>
            <li>Next for the profile page, I added the mac terminal view and describe myself using Python Object-oriented programming. On top of that, I would like to mention my favorite algorithm is the Greedy algorithm cuz I love the fact that it chooses the best option available at the moment, which is so close to my life motto!</li>
        </ul>
        },
    // Balinne web shopping mall
    {
        width: "32%",
        title: "Balinne Web shopping mall",
        thumbnail: proj_0_thumbnail,
        link : "https://github.com/Yeonny0723/balinne_proj",
        preview: proj_0_preview, 
        timeline: "2021.Dec ~ 2022.April",
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
        
    ]
    
    // https://source.unsplash.com/random/?program
    
    const props_1 = [
        // Sound-trip
        {
            width: "24%",
            title: "SoundTrip",
            thumbnail: soundTrip,
            link : "https://github.com/Yeonny0723/sound-trip",
            preview: soundTrip, 
            timeline: "2022.Sep.27 ~ 2022.Sep.03",
            desc: "Ambient sound recommender",
            skills: "Front: React, React-howler Server: Flask, Pandas, Heroku Web-Scrapping: Selenium, Beautifulsoup, Chrome webdriver manager",
            takeaway: 
            <ol>
                <li>Scrap and tag 189 ambient sounds</li>
                <li>Let users to choose the environment that the most maximize their focus (choose sound preference)</li>
                <li>Show a list of audio sounds related to the chosen tags</li>
            </ol>
            },
        // Oatmeal project
        {
            width: "24%",
            title: "Oatmeal: AI diet plan ",
            thumbnail: proj_5_thumbnail,
            link : "https://www.youtube.com/watch?v=djnRc7b8Lk4&t=161s",
            preview: proj_5_preview, 
            timeline: "2021.July ~ 2021.Dec",
            desc: "AI diet plan & supplement reccomendation service [Food safety korea contest]",
            skills: "Scikit-learn · ALS algorithm · Tensorflow · matplotlib · cs2 · User CF · Content-based CF · Image classification · Django",
            takeaway: <ol>
            <li>Studied effective data storage structure</li>
            <li>Implemented various ML algorithm (CF, tf-idf, ALS algorithm)</li>
            <li>Used scrum framework using Trello</li>
        </ol>
    },
    // Hotel reservation
    {
        width: "24%",
        title: "Hotel reservation system",
        thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGF0YXNjaWVuY2V8fHx8fHwxNjYxNzc4MTkw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source",
        link : "https://github.com/Yeonny0723/rmit/tree/main/info_sys_solution_n_design/asgnt-02",
        preview: proj_1_preview, 
        timeline: "2022.May ~ 2022.May",
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
        timeline: "2022.June ~ 2022.June",
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