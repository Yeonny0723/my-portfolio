import Layout from "../components/layout/Layout";
import Card from "../components/portfolio/Card";
import styled from "styled-components";
import { projects } from "../data/data";
import { Underline } from "../components/styles/Sharing";
import { TEXT_PINK } from "../components/styles/Variables";

const Portfolio = () => {
  const content = (
    <PortfolioStyle>
      <div>
        <h3>Portfolio</h3>
        <br></br>
        <span>
          요약본은 &nbsp;
          <a
            href="https://graceful-canary-e9f.notion.site/584bad5911cb4b899b46ec8fe97ce9ce?v=282b66f569ca41a7959d9da5065ee220"
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
            href="https://graceful-canary-e9f.notion.site/584bad5911cb4b899b46ec8fe97ce9ce?v=282b66f569ca41a7959d9da5065ee220"
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
      <ScreenInactiveStyle
        id="screen-inactive"
        className="hide"
      ></ScreenInactiveStyle>
      <CardRowStyle className="fadeUp">
        {projects
          .sort((a, b) => a.idx - b.idx)
          .map((props, idx) => (
            <Card contents={props} key={idx} />
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

const ScreenInactiveStyle = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`;

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
  z-index: 5;
`;

export default Portfolio;
