import styled from "styled-components";
import Terminal from "./Terminal";
import History from "./History";
import SelfIntro from "./SelfIntro";
import { BounceUp, FadeIn } from "../styles/AnimatePage";
import { TEXT_PINK } from "../styles/Variables";

const ContentSlide: React.FC<{ i18n: any }> = ({ i18n }) => {
  return (
    <>
      <ContentStyle>
        <FadeIn>
          <SelfIntro />
          <div>
            <div>
              <BounceUp>
                <em>"Click to run"&nbsp;</em>
              </BounceUp>
              {i18n.t("profile.terminal")}
            </div>
            <Terminal />
          </div>
        </FadeIn>
      </ContentStyle>
      <History />
    </>
  );
};

const ContentStyle = styled.div`
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2vw;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 65vh;
    font-size: calc(2.5px + 0.8vw);
    & > div:last-child > div:first-child {
      display: flex;
      margin-bottom: 1.5vh;
      em {
        color: ${TEXT_PINK};
      }
    }
  }
`;

export default ContentSlide;
