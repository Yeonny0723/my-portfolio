import {useReducer} from "react";
import {useTranslation} from 'react-i18next';
import styled from "styled-components"
import { Actions, initialState, reducer } from '../../reducer';
import { GREY } from "../styles/Variables";

const Language = ({color}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {lang} = state;
  
    const { i18n } = useTranslation(); // multi language

    const changeLanguage = (lang) => {
      dispatch({type: Actions.changeLanguage, payload: lang})
      i18n.changeLanguage(lang);
    }  

    return (
      <NavStyle>
        <ButtonStyle onClick={()=>changeLanguage('en')} isactive={lang === "en"} color={color}><span>English</span></ButtonStyle>
        <span>|</span>
        <ButtonStyle onClick={()=>changeLanguage('kr')} isactive={lang === "kr"} color={color}><span>한국어</span></ButtonStyle>
        <span>|</span>
        <ButtonStyle onClick={()=>changeLanguage('vn')} isactive={lang === "vn"} color={color}><span>Tiếng Việt</span></ButtonStyle>
      </NavStyle>
    )
}

const NavStyle = styled.nav`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2vh;
  font-size: 1.3rem;
  & > span{
    color: ${GREY}
  }
`

const ButtonStyle = styled.button`
  font-weight: 600;
  text-decoration: ${(props)=>props.isactive ? "underline" : null};
  color: ${(props)=>props.isactive ? props.color : GREY};
  background:none;
  border:none;
  margin: 0 0.5vw;
  padding:0;
  cursor: pointer;
`

export default Language