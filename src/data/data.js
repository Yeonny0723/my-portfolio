import film_memories from "../img/projects/film-emories.jpeg"
import soundTrip from "../img/projects/soundTrip.png"
import myPortfolio from "../img/projects/myPortfolio.png"
import balinne from "../img/projects/balinne.jpeg"
import balinneThumb from "../img/projects/balinne-thumb.jpeg"
import oatmeal from "../img/projects/oatmeal.jpeg"
import hotel from "../img/projects/hotel.jpeg"
import potentialCustomer from "../img/projects/potentialCustomer.jpeg"
import { VIVID_PINK } from "../components/styles/Variables"


export const projects = [
    // Film-emories
    {
        idx:0, // You can specify display order here
        title: "Online Photobooth: Film-emories",
        thumbnail: film_memories,
        link : "https://github.com/Yeonny0723/film-emories",
        preview: film_memories, 
        timeline: "2022.Oct.14 ~ 2022.Oct.07",
        desc: "This is an online photo booth service where you can capture your memorable moment. You can take a photo using a webcam and it will generate you a downloadable links for photo card and video. You will have an access to your own photobook where you can keep your photos forever and share it with your friends.",
        skills: "Pug, Webpack, Babel, SCSS, WebAssembly, FFmpeg, Express, Ajax, MongoDB",
        takeaway: [
            "I used the modern JS ES6 and compiled them using webpack and babel. I accept this MVC divide and conquer pattern to avoid duplicates and for easy maintenance and reusability. I used WebAssembly to allow the big program like ffmpeg to be able to run on the browser. The recorded video is later saved to the browser memory which reduces the burden on the server. I am now comfortable customizing middlewares / making use of sessions and cookies / creating API."
        ]
    },
    // My portfolio
    {
        idx:1,
        title: "My Portfolio website",
        thumbnail: myPortfolio,
        link : "https://github.com/Yeonny0723/my-portfolio",
        preview: myPortfolio, 
        timeline: "2022.Aug.05 ~ 2022.Aug.31",
        desc: "Starting my developer study in 2020, I wanted to prove my fast-learning curve + potential + creativity through this portfolio. As a non-cs student, I also wanted to appeal my algorithms and cs fundamentals and provide a compact overview of all the projects I've done so far.",
        skills: "React, i8next(multi-language), framer-motion, jest, react-dom, react-router-dom",
        takeaway: [
            "For the home page, I tried to make a page interactive and visually appealing with various animations and pictures. And I encoded all the welcome messages of each language I can speak into binary code and added a bit of fun point by visualizing them.",
            "Next for the profile page, I added the mac terminal view and describe myself using Python Object-oriented programming. On top of that, I would like to mention my favorite algorithm is the Greedy algorithm cuz I love the fact that it chooses the best option available at the moment, which is so close to my life motto!",
        ],
    },
    // Balinne web shopping mall
    {
        idx:2,
        title: "Balinne Web shopping mall",
        thumbnail: balinneThumb,
        link : "https://github.com/Yeonny0723/balinne_proj",
        preview: balinne, 
        timeline: "2021.Dec ~ 2022.April",
        desc: "To create an E-commerce website from scratch",
        skills: "Django · MySQL · JavaScript · AWS Elastic Beanstalk ",
        takeaway: [
            "Elicit client’s functional & non-functional requirements",
            "Take an iterative approach for prototype mockup with Adobe XD",
            "ERD Database design",
            "Responsive front-end development with HTML5, SCSS, and Bootstrap5",
            "Develop social login, direct e-mail transfer via the web, admin page login with Django and JavaScript",
            "Website deployment and database storage on AWS",
        ]
    },
    // Sound-trip
    {
        idx:3,
        title: "SoundTrip",
        thumbnail: soundTrip,
        link : "https://github.com/Yeonny0723/sound-trip",
        preview: soundTrip, 
        timeline: "2022.Sep.27 ~ 2022.Sep.03",
        desc: "Ambient sound recommender",
        skills: "Front: React, React-howler Server: Flask, Pandas, Heroku Web-Scrapping: Selenium, Beautifulsoup, Chrome webdriver manager",
        takeaway: 
        [
            "Scrap and tag 189 ambient sounds",
            "Let users to choose the environment that the most maximize their focus (choose sound preference)",
            "Show a list of audio sounds related to the chosen tags",
        ]
        },
    // Oatmeal project
    {
        idx:4,
        title: "Oatmeal: AI diet plan ",
        thumbnail: oatmeal,
        link : "https://www.youtube.com/watch?v=djnRc7b8Lk4&t=161s",
        preview: oatmeal, 
        timeline: "2021.July ~ 2021.Dec",
        desc: "AI diet plan & supplement reccomendation service [Food safety korea contest]",
        skills: "Scikit-learn · ALS algorithm · Tensorflow · matplotlib · cs2 · User CF · Content-based CF · Image classification · Django",
        takeaway: [
        "Studied effective data storage structure",
        "Implemented various ML algorithm (CF, tf-idf, ALS algorithm)",
        "Used scrum framework using Trello",
        ]
    },
    // Hotel reservation
    {
        idx:5,
        title: "Hotel reservation system",
        thumbnail: "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGF0YXNjaWVuY2V8fHx8fHwxNjYxNzc4MTkw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source",
        link : "https://github.com/Yeonny0723/rmit/tree/main/info_sys_solution_n_design/asgnt-02",
        preview: hotel, 
        timeline: "2022.May ~ 2022.May",
        desc: "AHS hotel reservation system to streamline manual booking process",
        skills: "SQLite · Tkinter",
        takeaway: [
            "Python oop",
            "Database design",
            "Pip8 practice",
            "PEP naming conventions",
            "Parameterized coding",
            "Testing and validation",
        ],
    },
    // Potential customer prediction
    {
        idx:6,
        title: "Potential customer prediction",
        thumbnail: "",
        link :  "https://github.com/Yeonny0723/rmit/tree/main/info_sys_solution_n_design/asgnt_3",
        preview: potentialCustomer, 
        timeline: "2022.June ~ 2022.June",
        desc: "This project aims to give an insight for Nationale Azur on how to conduct a more targeted marketing approach to their potential group of customers who are likely to repay their loan",
        skills: "Pandas · scikit-learn · matplotlib · seaborn",
        takeaway: [
            "Business analysis",
            "Explanatory data analysis",
            "Data cleaning",
            "KNN & Random forest modeling",
            "Feature selection",
            "Parameter tuning",
        ]
    },
]

export const skillsetData = {
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

export const experienceData = [
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

export const educationData = [
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

export const codeData = [
    {
        white: "abstract class Human {",
        green: '',
        size: 1
    },
    {
        white:'constructor (',
        green:'',
        size: 3
    },
    {
        white:'public',
        green:'firstname: string, ',
        size: 5
    },
    {
        white:'public',
        green:'lastname: string,',
        size: 5
    },
    {
        white:'public',
        green:'nationality: string,',
        size: 5
    },
    {
        white:'protected',
        green:'fav_algorithm: string,',
        size: 5
    },
    {
        white:'protected',
        green:'age: number,',
        size: 5
    },
    {
        white:'private',
        green:'hobby: string,',
        size:5
    },
    {
        white:'private',
        green:'mbti: string,',
        size: 5
    },
    {
        white:'){}',
        green:'',
        size:3
    },
    {
        white:'abstract',
        green:'welcome(): void',
        size: 3
    },
    {
        white:'getFullName(){',
        green:'',
        size:3
    },
    {
        white:'return',
        green:'`${this.firstname} ${this.lastname}`',
        size:5
    },
    {
        white:'}',
        green:'',
        size:3
    },
    {
        white:'}',
        green:'',
        size:1
    },
    {
        white:'class Developer',
        green:'extends Human{',
        size:1
    },
    {
        white:'welcome(){',
        green:'',
        size:3
    },
    {
        white:'',
        green:'console.log(`Welcome everybody!\n This is ${this.firstname} ${this.lastname}`)',
        size:5
    },
    {
        white:'}',
        green:'',
        size:3
    },
    {
        white:'}',
        green:'',
        size:1
    },
    {
        white:'const juyeon = new Developer',
        green:'("Juyeon","Kim", "South Korea", "Greedy", 23, "Weekly tracking challenge, Cafe tour", "entj")',
        size:1
    },
    {
        white:'juyeon.welcome();',
        green:'',
        size:1
    },
]