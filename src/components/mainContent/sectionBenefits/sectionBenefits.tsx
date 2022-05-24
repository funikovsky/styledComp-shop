import styled from "styled-components";
import { StyledBenefitsContainer } from "./benefitsContainer";
import { BenefitsContent } from "./benefitsContent";

const StyledSectionBenefits = styled.section`

padding: 78px 10px 36px;

border-top: 1px solid rgba(196, 196, 196, 1);
border-bottom: 1px solid rgba(196, 196, 196, 1);
;
    
`

export const SectionBenefits = () => {
    return (
        <>
            <StyledSectionBenefits>
                <StyledBenefitsContainer>
                    <BenefitsContent/>
                </StyledBenefitsContainer>
            </StyledSectionBenefits>
        </>
    )
}