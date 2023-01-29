import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Underline } from "../styles/Sharing";
import { TEXT_PINK } from "../styles/Variables";

const SelfIntro = () => {
  const { t, i18n } = useTranslation();

  return (
    <IntroDivStyle>
      <h3>
        About <em>Juyeon</em>
      </h3>
      <Underline />

      {i18n.t("profile.intro.0")}
      <ul>
        <li>{i18n.t("profile.intro.1")}</li>
        <li>{i18n.t("profile.intro.2")}</li>
        <li>{i18n.t("profile.intro.3")}</li>
        <li>{i18n.t("profile.intro.4")}</li>
      </ul>
      <br></br>

      <div>
        <ResumeButtonStyle
          target="_blank"
          href="https://graceful-canary-e9f.notion.site/Juyeon-Kim-2a4e78ee019a4c0db4b56df3a6c8f1d1"
        >
          <i className="fa-regular fa-file fa-lg"></i>&nbsp;Resume
        </ResumeButtonStyle>
        {/* <ResumeButtonStyle target="_blank" href="https://graceful-canary-e9f.notion.site/Yeonny-2a4e78ee019a4c0db4b56df3a6c8f1d1"><i className="fa-regular fa-file fa-lg"></i>&nbsp;이력서 (kr)</ResumeButtonStyle> */}
      </div>
    </IntroDivStyle>
  );
};

const ResumeButtonStyle = styled.a`
  background-color: ${TEXT_PINK};
  font-weight: 600;
  width: fit-content;
  height: fit-content;
  padding: calc(0px + 0.6vw);
  border-radius: 10px;
  transition: 0.1s linear;
  color: white;
  &:hover,
  &:focus {
    opacity: 60%;
  }
`;

const IntroDivStyle = styled.div`
  font-size: calc(2.5px + 0.8vw);
  h3 {
    font-style: italic;
    em {
      color: ${TEXT_PINK};
    }
  }
  ul {
    line-height: 160%;
    display: inline;
  }
  div {
    display: flex;
    gap: 1vw;
  }
`;

export default SelfIntro;
