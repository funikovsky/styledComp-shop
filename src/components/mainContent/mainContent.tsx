import styled from "styled-components"
import { SectionActions } from "./sectionActions/sectionActions"
import { SectionBenefits } from "./sectionBenefits/sectionBenefits"
import { SectionNews } from "./sectionNews/sectionNews"
import { SectionProducts } from "./sectionProducts/sectionProducts"

const StyledMainContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const MainContent = () => {
    return(
        <>

        <StyledMainContent>
            <SectionNews/>
            <SectionActions/>
            <SectionProducts/>
            <SectionBenefits/>
        </StyledMainContent>
        
        </>
    )
}