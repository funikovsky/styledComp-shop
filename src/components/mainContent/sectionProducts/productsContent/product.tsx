import { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledProduct = styled.li`

& div {
    background:#F8F7F7;
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: 2px 4px 10px 5px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    font-size: 20px;
    
    & a {

        padding: 14px 27px;
        display: block;

    }
}
`

export const Product: FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <StyledProduct>
                <div>
                    <a href="/">{children}</a>
                </div>
            </StyledProduct>
        </>
    )
}