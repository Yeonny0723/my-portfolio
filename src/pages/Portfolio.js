import Layout from "../components/layout/Layout"
import Card from "../components/portfolio/Card";
import styled from "styled-components";
import projects from "../data/data"
import { Underline } from "../components/styles/Sharing";

const Portfolio = () => {
    const content = (
        <PortfolioStyle>
            <div>
                <h3>Portfolio</h3>
                <Underline/>
            </div>
            <CardRowStyle className="fadeUp">
                {projects.sort((a, b) => a.idx - b.idx).map((props, idx)=>
                    <Card props={props} key={idx}/>
                )}
            </CardRowStyle>
        </PortfolioStyle>
    )
    return (
        <div>
            <Layout content={content}/> 
        </div>
    );
}


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

export default Portfolio;