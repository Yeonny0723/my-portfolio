import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { DARK_SHADOW, SHADOW, TEXT_PINK } from "../styles/Variables";

const Card = (props) => {
  const [isOpen, setIsOpened] = useState(false);

  // Card event
  const onClick = () => {
    setIsOpened(!isOpen);
    const inactiveScreen = document.getElementById("screen-inactive");
    inactiveScreen.classList.toggle("screen-inactive");
  };

  return (
    <div>
      <CardStyled
        isopen={isOpen ? 1 : 0}
        thumburl={props.props.thumbnail}
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={onClick}
        whileHover={{
          scale: 0.98,
          opacity: isOpen ? 1 : 0.7,
          duration: 0.3,
        }}
      >
        <motion.h4 layout="position">
          <em>{props.props.title} </em>
        </motion.h4>
        {isOpen && (
          <CardOpen
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            layout
          >
            <img src={props.props.preview} alt="project preview img" />
            <div>
              <h4>Description</h4>
              <a
                href={props.props.link}
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
                ></i>{" "}
                &nbsp;{props.props.timeline}
              </p>
              <h5>
                <em># Summary</em>
              </h5>
              <Pstyle>{props.props.desc}</Pstyle>
              <h5>
                <em># Skills</em>
              </h5>
              <p>{props.props.skills}</p>
              <h5>
                <em># Takeaway</em>
              </h5>
              <ul>
                <p>
                  {props.props.takeaway.map((el, idx) => (
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

const CardStyled = styled(motion.div)`
  padding: 2.5vw 5vw;
  box-shadow: ${SHADOW};
  border-radius: 2rem;
  background-size: cover;
  z-index: 10;
  overflow: scroll;
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
