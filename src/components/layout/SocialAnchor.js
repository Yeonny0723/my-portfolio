import styled from "styled-components";

const Anchors = () => {
  return (
    <SnsStyle>
      <a
        target="_blank"
        href="https://graceful-canary-e9f.notion.site/Juyeon-Kim-2a4e78ee019a4c0db4b56df3a6c8f1d1"
        rel="noreferrer"
      >
        <i className="fa-sharp fa-solid fa-file fa-2xl" />
      </a>
      <a target="_blank" href="https://github.com/Yeonny0723" rel="noreferrer">
        <i className="fa-brands fa-github fa-2xl" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/juyeon-kim-6a227a207/"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin-in fa-2xl"></i>
      </a>
    </SnsStyle>
  );
};

const SnsStyle = styled.div`
  padding-top: 1.5vh;
  & > * {
    color: white;
    padding: 8px;
  }
`;

export default Anchors;
