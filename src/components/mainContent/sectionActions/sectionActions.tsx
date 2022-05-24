import styled from "styled-components";
import { SectionTitle } from "../sectionTitles/sectionTitle";
import { ActionsContainer } from "./actionsContainer/actionsContainer";

const StyledSectionActions = styled.section`
    padding: 40px 0 0 0;
`

export const SectionActions = () => {
    return (
        <>
            <StyledSectionActions>
                <SectionTitle>
                    Акции
                </SectionTitle>
                <ActionsContainer/>
            </StyledSectionActions>
        </>
    )
}