import styled from "styled-components"

const StyledLogo = styled.div`
height: 100%;
display: flex;
align-items: center;
font-size: 36px;

    
`



export const Logo = () => {
    return (
        <>
            <StyledLogo>
                <span>Logo</span>
            </StyledLogo>
        </>
    )
}