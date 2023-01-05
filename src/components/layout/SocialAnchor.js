import styled from "styled-components"

const Anchors = () => {
    return (
        <SnsStyle>
            <a target="_blank" href="https://github.com/Yeonny0723" rel="noreferrer"><i className="fa-brands fa-github fa-2xl" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/juyeon-kim-6a227a207/" rel="noreferrer"><i className="fab fa-linkedin-in fa-2xl"></i></a>
            <a target="_blank" href="mailto:kkjuyeon@gmail.com" rel="noreferrer"><i className="fa-solid fa-envelope fa-2xl" /></a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a target="_blank" href="https://www.youtube.com/channel/UCNKzJr3lPwz13sCzrDCuc1A" rel="noreferrer"><i className="fa-brands fa-youtube fa-2xl"></i></a>
            <a target="_blank" href="https://graceful-canary-e9f.notion.site/History-5bc12ab684a04089b675ca4fcd071f09" rel="noreferrer"><i className="fa-brands fa-blogger fa-2xl"></i></a>
        </SnsStyle>
    )
}

const SnsStyle = styled.div`
    padding-top: 1.5vh;
    & > * {
        color: white;
        padding: 8px;
    }
`


export default Anchors;