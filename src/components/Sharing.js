import styled from "styled-components";

const UnderlineStyle = styled.div`
    width: 5vh;
    height: 0.5vh;
    background-color: var(--inactive);
    margin-bottom: min(3vh, 60px);
    opacity: 50%;
`

export const Underline = () => {
    return (
        <UnderlineStyle>
        </UnderlineStyle>
    )
}


