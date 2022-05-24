import styled from "styled-components"

const StyledContact = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;


`

export const Contact = () => {
    return (
        <>
            <StyledContact>
                <a href="tel:+79991112233">
                    <span>+7-999-111-22-33</span>
                </a>
            </StyledContact>

        </>
    )
}