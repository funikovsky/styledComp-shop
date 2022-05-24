import styled from "styled-components"

const StyledNavigator = styled.div`
    display: flex;
    align-items: center;
    & ul {
        display: flex;
        font-size: 24px;
    }
    & ul li {
        margin-right: 44px;
        &:last-child {
            margin-right: 0;
        }

    }
`

export const Navigator = () => {
    return (
        <>
            <StyledNavigator>
                <ul>
                    <li>
                        <a href="/">Товары</a>
                    </li>
                    <li>
                        <a href="/">Услуги</a>
                    </li>
                    <li>
                        <a href="/">Контакты</a>
                    </li>
                    <li>
                        <a href="/">Магазины</a>
                    </li>
                    <li>
                        <a href="/">Новости</a>
                    </li>
                </ul>
            </StyledNavigator>
        </>
    )
}