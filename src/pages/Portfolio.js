import Base from "../components/Base"
import Card from "../components/Card";
import styled from "styled-components";
import projects from "../data/data"
import { Underline } from "../components/Sharing";

const CardRowStyle = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    margin-bottom: 4vh;
    gap: 2vh;
`

const PortfolioStyle = styled.div`
    overflow:scroll;
    height:100%;
    scroll-behavior:smooth !important;
`

const Portfolio = () => {
    const content = (
        <PortfolioStyle>
            <div>
                <h3>Portfolio</h3>
                <Underline/>
            </div>
            <CardRowStyle className="fadeUp">
                {projects.map((props, idx)=>
                    <Card props={props} key={idx}/>
                )}
            </CardRowStyle>
        </PortfolioStyle>
    )
    return (
        <div>
            <Base content={content}/> 
        </div>
    );
}
export default Portfolio;