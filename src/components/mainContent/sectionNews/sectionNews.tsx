import styled from "styled-components"
import { SectionTitle } from "../sectionTitles/sectionTitle"
import { SectionNewsContent } from "./sectionNewsContent"


const StyledSectionNews = styled.section`
    padding: 40px 0 0 0;
` 


export const SectionNews = () => {
    return (
       <StyledSectionNews>
           <SectionTitle>
               Новинки
           </SectionTitle>
           <SectionNewsContent/>
       </StyledSectionNews>
    )
}