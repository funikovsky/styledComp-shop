import styled from "styled-components";
import { Contact } from "./contact/contact";
import { Logo } from "./logo/logo";
import { Navigator } from "./navigator/navigator";



export const StyledHeaderContent = styled.div`

width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
    
`

export const HeaderContent = () => {
    return (
        <>
            <StyledHeaderContent>
                <Logo/>
                <Navigator/>
                <Contact/>
            </StyledHeaderContent>
        </>
    )
}