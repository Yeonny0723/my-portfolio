import Layout from "../components/layout/Layout";
import Card from "../components/portfolio/Card";
import styled from "styled-components";
import { projects } from "../data/data";
import { Underline } from "../components/styles/Sharing";
import { TEXT_PINK } from "../components/styles/Variables";

const Portfolio = () => {
  const content = (
    <PortfolioStyle>
      <div id="screen-inactive"></div>
      <div>
        <h3>Portfolio</h3>
        <br></br>
        <span>
          요약본은 &nbsp;
          <a
            href="https://graceful-canary-e9f.notion.site/Juyeon-Kim-2a4e78ee019a4c0db4b56df3a6c8f1d1"
            target="_blank"
            style={{ color: TEXT_PINK }}
            rel="noreferrer"
          >
            여기서 &nbsp;
          </a>
          확인해주세요.
        </span>
        <br></br>
        <span>
          Find out the &nbsp;
          <a
            href="https://graceful-canary-e9f.notion.site/Juyeon-Kim-2a4e78ee019a4c0db4b56df3a6c8f1d1"
            target="_blank"
            style={{ color: TEXT_PINK }}
            rel="noreferrer"
          >
            summary &nbsp;
          </a>
          here.
        </span>
        <br></br>
        <Underline />
      </div>
      <CardRowStyle className="fadeUp">
        {projects
          .sort((a, b) => a.idx - b.idx)
          .map((props, idx) => (
            <Card props={props} key={idx} />
          ))}
      </CardRowStyle>
    </PortfolioStyle>
  );
  return (
    <div>
      <Layout content={content} />
    </div>
  );
};

const CardRowStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 4vh;
  gap: 2vh;
`;

const PortfolioStyle = styled.div`
  overflow: scroll;
  height: 100%;
  scroll-behavior: smooth !important;
  .screen-inactive {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default Portfolio;
