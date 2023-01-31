import React from "react";
import { useTranslation } from "react-i18next";
import { NavStyle, ButtonStyle } from "./Language.styles";

const initialLangSetting = {
  // 서로 다른 Language 컴포넌트 간 같은 값 업데이트하고 그게 모든 Language 컴포넌트에 반영되도록
  lang: "en",
};

const LANGUAGE_LST = {
  en: "English",
  kr: "한국어",
  vn: "Tiếng Việt",
};

interface LanguageProps {
  color: string;
}

const Language: React.FC<LanguageProps> = ({ color }) => {
  const { i18n } = useTranslation(); // multi language

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
    initialLangSetting.lang = lang;
  };

  return (
    <NavStyle>
      {/* <>
        {Object.keys(LANGUAGE_LST).map((LANG) => {
          <>
            <ButtonStyle
              onClick={() => changeLanguage(LANG)}
              isactive={LANG === initialLangSetting[LANG]}
              color={color}
            >
              <span>{LANGUAGE_LST[LANG]}</span>
            </ButtonStyle>
            <span>|</span>
          </>;
        })}
      </> */}
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

export default Language;
