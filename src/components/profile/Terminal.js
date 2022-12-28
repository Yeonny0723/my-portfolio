import styled from "styled-components";
import { SHADOW } from "../styles/Variables";
import { ButtonHoverScale } from "../styles/AnimatePage";
import { codeData } from "../../data/data";

const Terminal = () => {
    return (
        <TerminalContainerStyle>
            <TerminalNavStyle>
                <div style={{backgroundColor: "tomato"}}></div>
                <div style={{backgroundColor: "#FFBF2E"}}></div>
                <div style={{backgroundColor: "#27CA40"}}></div>
            </TerminalNavStyle>

            <TerminalCodesStyle>
                {codeData.map(line=>(
                    <CodeLine white={line["white"]} green={line["green"]} indent={line["size"]}/>
                ))}
            </TerminalCodesStyle>

            <ButtonHoverScale>
                <a href="#history-container"><em style={{color:"black"}}>Click to run</em></a>
            </ButtonHoverScale>
        </TerminalContainerStyle>
    )
}


const CodeLineStyle = styled.div`
    margin-left: ${(props)=>props.indent}px;
    line-height: 1.7;
    span {
        font-size: 0.95em;
    }
    & > span:last-child{
        color: #43CB46
    }
`


const CodeLine = ({white, green, indent}) => {
    indent = indent * 10
    return (
        <CodeLineStyle indent={indent}>
            <span>{white} </span>
            <span>{green}</span>
        </CodeLineStyle>
    )
}


const TerminalContainerStyle = styled.div`
    height: 35vh;
    width:100%;
    border-radius:10px;
    overflow:scroll;
    background-color:#111827;
    position:relative;
    box-shadow: ${SHADOW};
`

const TerminalNavStyle = styled.div`
    display:flex;
    align-items:center;
    height: 15%;
    width:100%;
    border-radius:10px 10px 0px 0px;
    background-color: #374151;
    padding:min(1.5vh, 5px);
    overflow:hidden;
    position:sticky;
    top:0;
    & > div {
        border-radius:100%;
        margin-left: min(1vw, 10px);
        width: min(1.5vw, 15px);
        height: min(1.5vw, 15px);
    }
`

const TerminalCodesStyle = styled.div`
    width: 100%;
    color: white;
    padding: 1vh;
    display: flex;
    flex-direction: column; 
`


export default Terminal