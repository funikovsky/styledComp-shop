import { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledActionContent = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid rgba(0, 0, 0, 1);
border-radius: 3%;
width: 255px;
font-size: 20px;
padding: 24px;
background-color: rgba(248, 247, 247, 1);
box-shadow: 2px 4px 10px 5px rgba(0, 0, 0, 0.15);


& div {
    text-align: end;
    font-size: 36px;
    
    line-height: 44px;
    & span {
        font-weight: bold;
    }
}

`
export const ActionContent: FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <StyledActionContent >
                {children}
            </StyledActionContent>
        </>
    )
}