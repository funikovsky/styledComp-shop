import styled from "styled-components";
import { ActionContent } from "./actionContent";

export const StyledActionsContainer = styled.div`
    display: flex;
    height: 335px;
    column-gap: 40px;
    flex-wrap: wrap;
    row-gap: 225px;
    justify-content: center;
    
    

    
`

export const ActionsContainer = () => {
    return (
        <>
            <StyledActionsContainer>
                <ActionContent>
                    <span>до 12.11.2022</span>
                    <div>Кэшбэк до 33%</div>
                </ActionContent>
                <ActionContent>
                    <span>до 12.11.2022</span>
                    <div>до <span>-25% </span>на товары для дома</div>
                </ActionContent>
                <ActionContent>
                    <span>до 12.11.2022</span>
                    <div>Новая коллекция Timberland</div>
                </ActionContent>
                <ActionContent>
                    <span>до 12.11.2022</span>
                    <div>Новые привелегии клуба</div>
                </ActionContent>
            </StyledActionsContainer>

        </>
    )
}