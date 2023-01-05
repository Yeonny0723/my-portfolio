import { useEffect } from "react"
import styled from "styled-components"
import Typewriter from 'typewriter-effect'


const WelcomeSlide = ({setSkip, i18n}) => {

    const handleSkip = () => {
        setSkip(true);
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setSkip(true);
        }, 10000);
        return ()=>{
            clearTimeout(timer);
        }
    },[]);

    return (
        <WelcomeSlideStyle onClick={handleSkip}>
            <h2>This is Juyeon👩‍💻</h2>
            <div>
                <h3>who wants to&nbsp;</h3>
                <Typewriter
                    onInit={(typewriter)=>{
                        typewriter.pauseFor(800)
                        .typeString('be a changemaker').start()
                        .pauseFor(100)
                        .deleteAll()
                        .typeString('solve a big world problem').start()
                        .pauseFor(100)
                        .deleteAll();
                    }}
                    options={{
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <small>({i18n.t("profile.skip")})</small>
        </WelcomeSlideStyle>
    )
} 

const WelcomeSlideStyle = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-style: italic;
    cursor: pointer;
    & > h2{
        margin: 0;
        margin-bottom: 5vh;
    }
    & > div {
        display: flex;
        & > h3 {
            margin: 0;
        }
    }
    & > small {
        opacity: 25%;
        position: absolute;
        bottom: 15%;
    }
    .Typewriter__wrapper, .Typewriter__cursor{
        color: #F08C6F;
        font-size: calc(6px + 1.5vw) !important;
        font-weight: 800;
        font-style: italic;
    }
`


export default WelcomeSlide;