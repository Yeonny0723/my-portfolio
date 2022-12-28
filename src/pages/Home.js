import styled from "styled-components";
import WelcomeSlide from "../components/home/WelcomeSlide"
import LanguageSlide from "../components/home/LanguageSlide"
import Layout from "../components/layout/Layout"

const Home = () => {
    const welcome = (
        <HomeStyle>
            <WelcomeSlide />
            <LanguageSlide/>
        </HomeStyle>
    )
    return (
        <Layout content={welcome}/> 
    );
}

const HomeStyle = styled.div`
    scroll-behavior:smooth !important;
    width: 100%;
    height: 100%;
    overflow: scroll;
`

export default Home;
