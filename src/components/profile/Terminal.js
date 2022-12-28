import styled from "styled-components";
import { SHADOW } from "../styles/Variables";
import { ButtonHoverScale } from "../styles/AnimatePage";

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

const codeData = [
    {
        white: "abstract class Human {",
        green: '',
        size: 1
    },
    {
        white:'constructor (',
        green:'',
        size: 3
    },
    {
        white:'public',
        green:'firstname: string, ',
        size: 5
    },
    {
        white:'public',
        green:'lastname: string,',
        size: 5
    },
    {
        white:'public',
        green:'nationality: string,',
        size: 5
    },
    {
        white:'protected',
        green:'fav_algorithm: string,',
        size: 5
    },
    {
        white:'protected',
        green:'age: number,',
        size: 5
    },
    {
        white:'private',
        green:'hobby: string,',
        size:5
    },
    {
        white:'private',
        green:'mbti: string,',
        size: 5
    },
    {
        white:'){}',
        green:'',
        size:3
    },
    {
        white:'abstract',
        green:'welcome(): void',
        size: 3
    },
    {
        white:'getFullName(){',
        green:'',
        size:3
    },
    {
        white:'return',
        green:'`${this.firstname} ${this.lastname}`',
        size:5
    },
    {
        white:'}',
        green:'',
        size:3
    },
    {
        white:'}',
        green:'',
        size:1
    },
    {
        white:'class Developer',
        green:'extends Human{',
        size:1
    },
    {
        white:'welcome(){',
        green:'',
        size:3
    },
    {
        white:'',
        green:'console.log(`Welcome everybody!\n This is ${this.firstname} ${this.lastname}`)',
        size:5
    },
    {
        white:'}',
        green:'',
        size:3
    },
    {
        white:'}',
        green:'',
        size:1
    },
    {
        white:'const juyeon = new Developer',
        green:'("Juyeon","Kim", "South Korea", "Greedy", 23, "Weekly tracking challenge, Cafe tour", "entj")',
        size:1
    },
    {
        white:'juyeon.welcome();',
        green:'',
        size:1
    },
]

export default Terminal