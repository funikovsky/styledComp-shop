import styled from "styled-components"
import { Container } from "../container/container"
import { HeaderContent} from "./headerContent"


const StyledHeader = styled.div`
    height: 88px;
    background-color: #F8F7F7;;
`

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <Container>
                    <HeaderContent/>
                </Container>
            </StyledHeader>
        </>
    )
}