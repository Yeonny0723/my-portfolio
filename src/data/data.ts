// 이미지 import를 위한 @types/globa/index.d.ts 내 모듈 설정
import gui_tree from "../img/projects/gui_tree.png";
import film_memories from "../img/projects/film-emories.jpeg";
import soundTrip from "../img/projects/soundTrip.png";
import myPortfolio from "../img/projects/myPortfolio.png";
import balinne from "../img/projects/balinne.jpeg";
import balinneThumb from "../img/projects/balinne-thumb.jpeg";
import oatmeal from "../img/projects/oatmeal.jpeg";
import hotel from "../img/projects/hotel.jpeg";
import potentialCustomer from "../img/projects/potentialCustomer.jpeg";

export const projects = [
  // GUI Tree
  {
    idx: -1, // You can specify display order here
    title: "File System Tree GUI",
    thumbnail: gui_tree,
    link: "https://github.com/Yeonny0723/tree-gui",
    preview: gui_tree,
    timeline: "2023.Jan.23 ~ 2023.Jan.26",
    desc: "This is an GUI application that updates file system tree graph by user inputting commands. ",
    skills: "React, Redux-toolkit, lodash, styled-component, typescript",
    takeaway: [
      "Recursive component rendering of state with unknown depth",
      "Exception handling",
    ],
  },
  // Film-emories
  {
    idx: 0, // You can specify display order here
    title: "Online Photobooth: Film-emories",
    thumbnail: film_memories,
    link: "https://github.com/Yeonny0723/film-emories",
    preview: film_memories,
    timeline: "2022.Oct.14 ~ 2022.Oct.07",
    desc: "This is an online photo booth service where you can capture your memorable moment. You can take a photo using a webcam and it will generate you a downloadable links for photo card and video. You will have an access to your own photobook where you can keep your photos forever and share it with your friends.",
    skills:
      "Pug, Webpack, Babel, SCSS, WebAssembly, FFmpeg, Express, Ajax, MongoDB",
    takeaway: [
      "I used the modern JS ES6 and compiled them using webpack and babel. I used webassembly-based ffmpeg to be able to run on the javascript environment. The recorded video is later saved to the browser memory which reduces the burden on the server. I am now comfortable customizing middlewares / making use of sessions and cookies / creating API.",
    ],
  },
  // My portfolio
  {
    idx: 1,
    title: "My Portfolio website",
    thumbnail: myPortfolio,
    link: "https://github.com/Yeonny0723/my-portfolio",
    preview: myPortfolio,
    timeline: "2022.Aug.05 ~ 2022.Aug.31",
    desc: "Starting my developer study in 2020, I wanted to prove my fast-learning curve + potential + creativity through this portfolio. As a non-cs student, I also wanted to appeal my algorithms and cs fundamentals and provide a compact overview of all the projects I've done so far.",
    skills:
      "React, i8next(multi-language), framer-motion, jest, react-dom, react-router-dom",
    takeaway: [
      "For the home page, I tried to make a page interactive and visually appealing with various animations and pictures. And I encoded all the welcome messages of each language I can speak into binary code and added a bit of fun point by visualizing them.",
      "Next for the profile page, I added the mac terminal view and describe myself using Python Object-oriented programming. On top of that, I would like to mention my favorite algorithm is the Greedy algorithm cuz I love the fact that it chooses the best option available at the moment, which is so close to my life motto!",
    ],
  },
  // Balinne web shopping mall
  {
    idx: 2,
    title: "Balinne Web shopping mall",
    thumbnail: balinneThumb,
    link: "https://github.com/Yeonny0723/balinne_proj",
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
    ],
  },
  // Sound-trip
  {
    idx: 3,
    title: "SoundTrip",
    thumbnail: soundTrip,
    link: "https://github.com/Yeonny0723/sound-trip",
    preview: soundTrip,
    timeline: "2022.Sep.27 ~ 2022.Sep.03",
    desc: "Ambient sound recommender",
    skills:
      "Front: React, React-howler Server: Flask, Pandas, Heroku Web-Scrapping: Selenium, Beautifulsoup, Chrome webdriver manager",
    takeaway: [
      "Scrap and tag 189 ambient sounds",
      "Let users to choose the environment that the most maximize their focus (choose sound preference)",
      "Show a list of audio sounds related to the chosen tags",
    ],
  },
  // Oatmeal project
  {
    idx: 4,
    title: "Oatmeal: AI diet plan ",
    thumbnail: oatmeal,
    link: "https://www.youtube.com/watch?v=djnRc7b8Lk4&t=161s",
    preview: oatmeal,
    timeline: "2021.July ~ 2021.Dec",
    desc: "AI diet plan & supplement reccomendation service [Food safety korea contest]",
    skills:
      "Scikit-learn · ALS algorithm · Tensorflow · matplotlib · cs2 · User CF · Content-based CF · Image classification · Django",
    takeaway: [
      "Studied effective data storage structure",
      "Implemented various ML algorithm (CF, tf-idf, ALS algorithm)",
      "Used scrum framework using Trello",
    ],
  },
  // Hotel reservation
  {
    idx: 5,
    title: "Hotel reservation system",
    thumbnail:
      "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGF0YXNjaWVuY2V8fHx8fHwxNjYxNzc4MTkw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source",
    link: "https://github.com/Yeonny0723/rmit/tree/main/info_sys_solution_n_design/asgnt-02",
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
    idx: 6,
    title: "Potential customer prediction",
    thumbnail: "",
    link: "https://github.com/Yeonny0723/rmit/tree/main/info_sys_solution_n_design/asgnt_3",
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
    ],
  },
];

// https://github.com/Ileriayo/markdown-badges
export const skillsetData = {
  "Programming language": [
    "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
  ],
  FE: [
    "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  ],
  BE: [
    "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
  ],
  "DB & Hosting": [
    "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
  ],
};

export const experienceData = [
  {
    date: "Nov 2022 ~ Dec 2022",
    title: "Programming Tutor at Elice",
    contents: [
      "Provide problem solving lecture: React, Redux, Jest, Styled components etc",
      `<a
        style = "color: #F08C6F;"
        target="_blank"
        rel="noreferrer"
        href="https://graceful-canary-e9f.notion.site/React-Tutoring-f6d7f371c0fa427dbcf33fe62a1e0579"
      >
        Tutoring material
      </a>`,
    ],
  },
  {
    date: "Aug 2021 - Nov 2021",
    title: "Data Science Intern",
    contents: [
      "Data scrapping & Error handling using Python, Selenium",
      "Wrote text preprocessing algorithm using Regular expression",
      "Managed DB using Sequel Pro, Pymysql",
      `<a
        style = "color: #F08C6F;"
        target="_blank"
        rel="noreferrer"
        href="https://graceful-canary-e9f.notion.site/1-48de072f0cda4d978c61fa98ef095b78"
      >
        Intern Summary
      </a>`,
    ],
  },
];

export const educationData = [
  {
    date: "July 2018 - Dec 2022",
    title: "Majored Information systems at RMIT University [Graduated]",
    contents: [
      "GPA: 3.8/4.0",
      `<a

        style="color:#F08C6F"  
        target="_blank"
        rel="noreferrer"
        href="https://graceful-canary-e9f.notion.site/Uni-Coursework-aab41c38280c4ba2b8adcb4f57640d8b"
      >
        Course summary
      </a>`,
      "Project Management",
      "Web development",
      "SQL Data management",
      "Python data analysis, visualization",
      "IT Operations",
    ],
  },
  {
    date: "May 2021 - Aug 2021",
    title: "Likelion AI school",
    contents: [
      `<a
        style="color:#F08C6F"  
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Yeonny0723/food-safety-korea_contest"
      >
        Team Project
      </a>`,
      "Data analysis",
      "Data visualization",
      "Statistics / Web scrapping",
    ],
  },
  {
    date: "2021 - now",
    title: "Self-taught online courses",
    contents: [
      "CS Fundamentals",
      "Algorithms",
      "Python, ReactJS, Go lang, Solidity, Django",
    ],
  },
];

export const reservedWords = new Set([
  "abstract",
  "class",
  "constructor",
  "public",
  "string",
  "string,",
  "number",
  "number,",
  "private",
  "void",
  "protected",
  "return",
  "extends",
  "const",
  "new",
]);

export const codeData = [
  {
    text: "abstract class Human {",
    size: 1,
  },
  {
    text: "constructor (",
    size: 3,
  },
  {
    text: "public firstname: string,",
    size: 5,
  },
  {
    text: "public lastname: string,",
    size: 5,
  },
  {
    text: "public nationality: string,",
    size: 5,
  },
  {
    text: "protected fav_algorithm: string,",
    size: 5,
  },
  {
    text: "protected age: number,",
    size: 5,
  },
  {
    text: "private hobby: string,",
    size: 5,
  },
  {
    text: "private mbti: string,",
    size: 5,
  },
  {
    text: "){},",
    size: 3,
  },
  {
    text: "abstract welcome(): void",
    size: 3,
  },
  {
    text: "getFullName(){",
    size: 3,
  },
  {
    text: "return `${this.firstname} ${this.lastname}`",
    size: 5,
  },
  {
    text: "}",
    size: 3,
  },
  {
    text: "}",
    size: 1,
  },
  {
    text: "class Developer extends Human{",
    size: 1,
  },
  {
    text: "welcome(){",
    size: 3,
  },
  {
    text: "console.log(`Welcome everybody!\n This is ${this.firstname} ${this.lastname}`)",
    size: 5,
  },
  {
    text: "}",
    size: 3,
  },
  {
    text: "}",
    size: 1,
  },
  {
    text: 'const juyeon = new Developer ("Juyeon","Kim", "South Korea", "Greedy", 23, "Weekly tracking challenge, Cafe tour", "entj")',
    size: 1,
  },
  {
    text: "juyeon.welcome();",
    size: 1,
  },
];
