import { useState } from "react"
import styled from "styled-components"
import {useTranslation} from 'react-i18next';

import Layout from "../components/layout/Layout"
import WelcomeSlide from "../components/profile/WelcomeSlide";
import ContentSlide from "../components/profile/ContentSlide";


const Profile = () => {
    const { i18n } = useTranslation();

    const [skip, setSkip] = useState(false);

    const content = (
        <ProfileContainerStyle>
            {skip ? <ContentSlide i18n={i18n}/>  : <WelcomeSlide i18n={i18n} setSkip={setSkip}/> }
        </ProfileContainerStyle>
    )

    return (
        <Layout content={content} /> 
    );
}


const ProfileContainerStyle = styled.div`
    height: 100%;
    overflow: scroll;
    scroll-behavior:smooth !important;
`


export default Profile;
