import styled from "styled-components";
import { Product } from "./product";

const StyledProductsContent = styled.div`
& ul {
    display: flex;
    column-gap: 32px;
    flex-wrap: wrap;
    row-gap: 20px;
    
}
    
`
export const ProductsContent = () => {
    return (
        <>
            <StyledProductsContent>
                <ul>
                    <Product>
                        Обувь
                    </Product>
                    <Product>
                    Ремни
                    </Product>
                    <Product>
                    Очки
                    </Product>
                    <Product>
                    Сумки
                    </Product>
                    <Product>
                    Аксессуары
                    </Product>
                    <Product>
                    Бренды
                    </Product>
                    <Product>
                    Новинки
                    </Product>
                    <Product>
                    Домашние товары
                    </Product>
                    <Product>
                    Товары для красоты
                    </Product>
                </ul>

            </StyledProductsContent>

        </>
    )
}