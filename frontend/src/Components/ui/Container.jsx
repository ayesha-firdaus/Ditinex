import styled from "styled-components"
const StyledContainer= styled.div`
width: 120rem;
margin: 0 auto;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export default function Container({children})
{
    return (
<StyledContainer>
{children}
</StyledContainer>
    )
}