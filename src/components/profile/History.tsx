import Timeline from "./Timeline";
import { useState, useCallback, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { VIVID_PINK, GREY } from "../styles/Variables";
import { FadeIn } from "../styles/AnimatePage";
import { experienceData, skillsetData, educationData } from "../../data/data";

const HistoryContext = createContext({});

interface IInitialPinState {
  stories: boolean;
  experience: boolean;
  skills: boolean;
  education: boolean;
  certifications: boolean;
}

const initialPinState: IInitialPinState = {
  stories: true,
  experience: false,
  skills: false,
  education: false,
  certifications: false,
};

export default function History() {
  const [pins, setPins] = useState(initialPinState);

  const clickPin = useCallback((name: string) => {
    setPins((_pins: any) => ({
      ..._pins,
      [name]: !_pins[name],
    }));
  }, []);

  const { i18n } = useTranslation();

  const value = {
    pins,
    clickPin,
    i18n,
  };

  return (
    <HistoryContext.Provider value={value}>
      <HistoryContainerStyle id="history-container">
        <AboutMe />
        <Experience />
        <Skills />
        <Education />
        <Certificates />
      </HistoryContainerStyle>
    </HistoryContext.Provider>
  );
}

interface ContextInterface {
  pins?: any;
  clickPin?: (name: any) => void;
  i18n?: any;
}

/* Sub components */
const AboutMe = () => {
  const STORIES = "stories";

  const {
    pins: { stories },
    clickPin,
    i18n,
  } = useContext<ContextInterface>(HistoryContext);

  return (
    <div className="pin-container">
      {clickPin ? (
        <>
          {stories ? (
            <ContentBoxStyle pinned={false} onClick={() => clickPin(STORIES)}>
              <h3>📍 Who am I</h3>
              <div>
                <FadeIn>
                  <h5>[My stories]</h5>
                  <p>{i18n.t("portfolio.myStory")}</p>
                </FadeIn>
              </div>
            </ContentBoxStyle>
          ) : (
            <ContentBoxStyle pinned={true} onClick={() => clickPin(STORIES)}>
              <h3>📌 Who am I</h3>
            </ContentBoxStyle>
          )}
        </>
      ) : null}
    </div>
  );
};

const Experience = () => {
  const EXPERIENCE = "experience";

  const {
    pins: { experience },
    clickPin,
    i18n,
  } = useContext<ContextInterface>(HistoryContext);

  return (
    <div className="pin-container">
      {clickPin ? (
        <>
          {experience ? (
            <ContentBoxStyle
              pinned={false}
              onClick={() => clickPin(EXPERIENCE)}
            >
              <h3>📍 Experience</h3>
              <div>
                <FadeIn>
                  <Timeline data={experienceData} />
                </FadeIn>
              </div>
            </ContentBoxStyle>
          ) : (
            <ContentBoxStyle pinned={true} onClick={() => clickPin(EXPERIENCE)}>
              <h3>📌 Experience</h3>
            </ContentBoxStyle>
          )}
        </>
      ) : null}
    </div>
  );
};

const Skills = () => {
  const SKILLS = "skills";

  const {
    pins: { skills },
    clickPin,
    i18n,
  } = useContext<ContextInterface>(HistoryContext);

  // Badge images from: https://github.com/Ileriayo/markdown-badges
  // data engineering: pandas, scikit-learn, tensorflow
  return (
    <div className="pin-container">
      {clickPin ? (
        <>
          {skills ? (
            <ContentBoxStyle pinned={false} onClick={() => clickPin(SKILLS)}>
              <h3>📍 Skills</h3>
              <div>
                <FadeIn>
                  <>
                    {Object.keys(skillsetData).map((k) => (
                      <SkillSection key={k}>
                        <h5>#{k}</h5>
                        {skillsetData[k as keyof typeof skillsetData].map(
                          (v, idx) => (
                            <img key={idx} alt="skillset img" src={v} />
                          )
                        )}
                        <HrStyle />
                      </SkillSection>
                    ))}
                  </>
                  <SkillSection>
                    <h5>#Languages</h5>
                    <div>
                      <h6>English 🇺🇸</h6>
                      <Rating key="eng" rating={5} />
                    </div>
                    <div>
                      <h6>Korean 🇰🇷 </h6>
                      <Rating key="kr" rating={5} />
                    </div>
                    <div>
                      <h6>Vietnamese 🇻🇳 </h6>
                      <Rating key="vn" rating={3} />
                    </div>
                  </SkillSection>
                </FadeIn>
              </div>
            </ContentBoxStyle>
          ) : (
            <ContentBoxStyle pinned={true} onClick={() => clickPin(SKILLS)}>
              <h3>📌 Skills</h3>
            </ContentBoxStyle>
          )}
        </>
      ) : null}
    </div>
  );
};

const Education = () => {
  const EDUCATION = "education";

  const {
    pins: { education },
    clickPin,
    i18n,
  } = useContext<ContextInterface>(HistoryContext);

  return (
    <div className="pin-container">
      {clickPin ? (
        <>
          {education ? (
            <ContentBoxStyle pinned={false} onClick={() => clickPin(EDUCATION)}>
              <h3>📍 Education</h3>
              <div>
                <FadeIn>
                  <Timeline data={educationData} />
                </FadeIn>
              </div>
            </ContentBoxStyle>
          ) : (
            <ContentBoxStyle pinned={true} onClick={() => clickPin(EDUCATION)}>
              <h3>📌 Education</h3>
            </ContentBoxStyle>
          )}
        </>
      ) : null}
    </div>
  );
};

const Certificates = () => {
  const CERTIFICATIONS = "certifications";

  const {
    pins: { certifications },
    clickPin,
    i18n,
  } = useContext<ContextInterface>(HistoryContext);

  return (
    <div className="pin-container">
      {clickPin ? (
        <>
          {certifications ? (
            <ContentBoxStyle
              pinned={false}
              onClick={() => clickPin(CERTIFICATIONS)}
            >
              <h3>📍 Certifications</h3>
              <div>
                <FadeIn>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.credly.com/badges/af548962-e856-420d-90c8-6ec883768645/public_url"
                  >
                    <img
                      alt="certificate img"
                      style={{ width: "min(110px,10vw)" }}
                      src="https://images.credly.com/size/220x220/images/9fa03060-0fc9-4f0a-9ae5-b0ba1d8b8d1d/fea58a7414d4f03b5d2d86a63662b11e.png"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.credly.com/badges/f936dff8-1ca0-4b8b-94b4-7239607286a4/public_url"
                  >
                    <img
                      alt="certificate img"
                      style={{ width: "min(110px,10vw)" }}
                      src="https://images.credly.com/size/220x220/images/119d821a-8301-4323-a753-9c9f344960f4/9784fbfd1e03b1141eb2d6b18c9f7bec.png"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.credly.com/badges/d6939e80-2bc3-4011-9e32-99247d9a702c/public_url"
                  >
                    <img
                      alt="certificate img"
                      style={{ width: "min(110px,10vw)" }}
                      src="https://images.credly.com/size/220x220/images/4eb571eb-836d-4a9f-ba7b-d931259aa1cf/d2ca6189449219c78816b05e75c9a7a8.png"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.credly.com/badges/2ee9aaad-0c1b-4d07-9ce8-a2225943a617/public_url"
                  >
                    <img
                      alt="certificate img"
                      style={{ width: "min(110px,10vw)" }}
                      src="https://images.credly.com/size/220x220/images/3d65d267-c1ac-4508-a733-2ff86dc9bacb/PM-Cred-Badge-Image_-_Sarah_George.png"
                    />
                  </a>
                </FadeIn>
              </div>
            </ContentBoxStyle>
          ) : (
            <ContentBoxStyle
              pinned={true}
              onClick={() => clickPin(CERTIFICATIONS)}
            >
              <h3>📌 Certifications</h3>
            </ContentBoxStyle>
          )}
        </>
      ) : null}
    </div>
  );
};

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  let dotStyleArr = [];

  for (let i = 0; i < 5; i++) {
    if (rating === 0) {
      dotStyleArr.push(<DotStyle key={i} empty={true} />);
    } else {
      dotStyleArr.push(<DotStyle key={i} empty={false} />);
      rating -= 1;
    }
  }

  return <div style={{ display: "flex" }}>{dotStyleArr}</div>;
};

/* Style components */
const ContentBoxStyle = styled.div<{ pinned: boolean }>`
  h3 {
    margin-bottom: 1vh;
  }
  & > div {
    width: 100%;
    height: fit-content;
    padding: 2vh 4vh;
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 10px;
  }
  opacity: ${(props) => (props.pinned ? "40%" : "100%")};
`;

const SkillSection = styled.div`
  h5 {
    font-weight: 600;
    font-style: italic;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  img {
    height: max(15px, 4vh);
  }
`;

const DotStyle = styled.div<{ empty: boolean }>`
  width: 0.8vw;
  height: 0.8vw;
  border-radius: 100%;
  margin-left: 5px;
  background-color: ${(props) => (props.empty ? GREY : VIVID_PINK)} !important;
  z-index: 5;
`;

const HistoryContainerStyle = styled.div`
  min-height: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .pin-container {
    margin-bottom: 7vh;
    height: max(100%, fit-content);
  }
`;

const HrStyle = styled.hr`
  border: none;
  border-top: 1px dashed var(--grey);
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 100%;
  margin: 1vh 0;
`;
