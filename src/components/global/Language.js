import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { GREY } from "../styles/Variables";

const initialLangSetting = {
  // 서로 다른 Language 컴포넌트 간 같은 값 업데이트하고 그게 모든 Language 컴포넌트에 반영되도록
  lang: "en",
};

const Language = ({ color }) => {
  const { i18n } = useTranslation(); // multi language

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    initialLangSetting.lang = lang;
  };

  return (
    <NavStyle>
      <ButtonStyle
        onClick={() => changeLanguage("en")}
        isactive={initialLangSetting.lang === "en"}
        color={color}
      >
        <span>English</span>
      </ButtonStyle>
      <span>|</span>
      <ButtonStyle
        onClick={() => changeLanguage("kr")}
        isactive={initialLangSetting.lang === "kr"}
        color={color}
      >
        <span>한국어</span>
      </ButtonStyle>
      <span>|</span>
      <ButtonStyle
        onClick={() => changeLanguage("vn")}
        isactive={initialLangSetting.lang === "vn"}
        color={color}
      >
        <span>Tiếng Việt</span>
      </ButtonStyle>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
  font-size: 1.3rem;
  & > span {
    color: ${GREY};
  }
`;

const ButtonStyle = styled.button`
  font-weight: 600;
  text-decoration: ${(props) => (props.isactive ? "underline" : null)};
  color: ${(props) => (props.isactive ? props.color : GREY)};
  background: none;
  border: none;
  margin: 0 0.5vw;
  padding: 0;
  cursor: pointer;
`;

export default Language;
