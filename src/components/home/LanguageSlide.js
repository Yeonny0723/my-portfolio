import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import styled from "styled-components";

import Language from "../global/Language"
import {Bounce, TextTitleAnimate, ShakingImageAnimate} from "../styles/AnimatePage"
import { TEXT_PINK } from "../styles/Variables";
import { SlideStyle } from '../styles/Sharing';


const LanguageSlide = () => {

    const [clicked, setClicked] = useState(false);
    const [firstClicked, setFirstClicked] = useState(false); // if lang selected at once

    const { i18n } = useTranslation(); // multi language

    const onClick = () => {
        setClicked((clicked)=>!clicked);
        setFirstClicked(true);
    }

    return (
        <SlideStyle>
            <TextTitleAnimate duration={0.5}>
                <h2 id="home-lang"><em>
                    {i18n.t("home.lang.0")}&nbsp;  
                    <EmStyle>
                    {i18n.t("home.lang.1")}
                    </EmStyle>
                </em></h2>
            </TextTitleAnimate>

            <div onClick={onClick}>
                <Language color={TEXT_PINK}/> 
                <ShakingImageAnimate clicked={clicked} src={require(`../../img/bytes/${i18n.language}.png`)} />
            </div>

            <p><EmStyle>"{i18n.t("home.comment.0")}"</EmStyle> {i18n.t("home.comment.1")}</p>
            <br></br>
            {firstClicked?
                <Bounce>
                    <NavLink to="/profile"><i style={iconStyle} className="fa-solid fa-angles-down"></i></NavLink>
                </Bounce>
            : null}
        </SlideStyle>
    )
}

const iconStyle = {
    width: "100%",
    textAlign:"center",
    color:"grey"
}

const EmStyle = styled.em`
    color: ${TEXT_PINK};
    text-decoration: underline;
`


export default LanguageSlide;