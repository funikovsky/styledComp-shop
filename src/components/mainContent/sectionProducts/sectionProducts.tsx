import styled from "styled-components";
import { SectionTitle } from "../sectionTitles/sectionTitle";
import { ProductsContent } from "./productsContent/productsContent";

const StyledSectionProducts = styled.section`
    padding: 40px 0 0 0;
    margin-bottom: 48px;
`

export const SectionProducts = () => {
    return (
        <>
            <StyledSectionProducts>
                <SectionTitle>
                    Категории товаров
                    <span>*Выберите категорию, чтобы перейти в раздел магазина</span>
                </SectionTitle>
                <ProductsContent/>
            </StyledSectionProducts>
        </>
    )
}