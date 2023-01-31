import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { DARK_SHADOW, SHADOW, TEXT_PINK } from "../styles/Variables";

interface ICard {
  contents: {
    idx: number;
    title: string;
    thumbnail: any;
    link: string;
    preview: any;
    timeline: string;
    desc: string;
    skills: string;
    takeaway: string[];
  };
}

const Card: React.FC<ICard> = ({ contents }) => {
  const [isOpen, setIsOpened] = useState(false);

  // Card event
  const onClick = () => {
    setIsOpened(!isOpen);
    const inactiveScreen = document.getElementById("screen-inactive");
    inactiveScreen?.classList.toggle("hide");
  };

  return (
    <div>
      <CardStyled
        isopen={isOpen ? 1 : 0}
        onClick={onClick}
        thumburl={contents.thumbnail}
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        whileHover={{
          scale: 0.98,
          opacity: isOpen ? 1 : 0.7,
          duration: 0.3,
        }}
      >
        <motion.h4 layout="position">
          <em>{contents.title} </em>
        </motion.h4>
        {isOpen && (
          <CardOpen
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            layout
          >
            <img src={contents.preview} alt="project preview img" />
            <div>
              <h4>Description</h4>
              <a
                href={contents.link}
                target="_blank"
                style={{ color: TEXT_PINK }}
                rel="noreferrer"
              >
                <p>
                  <i className="fa-solid fa-code fa-sm"></i> &nbsp;Github ||
                  Demo &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </a>
              <p>
                <i
                  className="fa-solid fa-calendar-days fa-lg"
                  style={{ color: TEXT_PINK }}
                ></i>
                &nbsp;{contents.timeline}
              </p>
              <h5>
                <em># Summary</em>
              </h5>
              <Pstyle>{contents.desc}</Pstyle>
              <h5>
                <em># Skills</em>
              </h5>
              <p>{contents.skills}</p>
              <h5>
                <em># Takeaway</em>
              </h5>
              <ul>
                <p>
                  {contents.takeaway.map((el, idx) => (
                    <li key={idx}>{el}</li>
                  ))}
                </p>
              </ul>
            </div>
          </CardOpen>
        )}
      </CardStyled>
    </div>
  );
};

interface ICardStyled {
  readonly isopen: number;
  readonly thumburl: string;
  readonly transition: {
    layout: {
      duration: number;
      type: string;
    };
  };
  readonly whileHover: {
    scale: number;
    opacity: number;
    duration: number;
  };
}

const CardStyled = styled(motion.div)<ICardStyled>`
  padding: 2.5vw 5vw;
  box-shadow: ${SHADOW};
  border-radius: 2rem;
  background-size: cover;
  overflow: scroll;
  z-index: 5;
  background-color: ${(props) => (props.isopen ? "white" : "rgba(0,0,0,0.15)")};
  color: ${(props) => (props.isopen ? "black" : "white")};
  background-image: ${(props) =>
    props.isopen ? `url("")` : `url(${props.thumburl})`};
  width: ${(props) => (props.isopen ? "72vw" : "100%")};
  height: ${(props) => (props.isopen ? "59vh" : "30vh")};
  position: ${(props) => (props.isopen ? "fixed" : "static")};
  top: ${(props) => (props.isopen ? "25%" : null)};
  left: ${(props) => (props.isopen ? "15%" : null)};
  text-shadow: ${(props) => (props.isopen ? SHADOW : DARK_SHADOW)};
`;

const Pstyle = styled.p`
  padding-top: 1rem;
  line-height: 150%;
  width: 100%;
`;

const CardOpen = styled(motion.div)`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 4fr 5fr;
  & > * {
    max-width: 100%;
    border-radius: 20px;
  }
  div {
    background-color: #fcfcfc;
    padding: 0.2vh 2vh;
    margin-left: 1vh;
    h5 {
      padding-top: 2vh;
    }
  }
`;

export default Card;
