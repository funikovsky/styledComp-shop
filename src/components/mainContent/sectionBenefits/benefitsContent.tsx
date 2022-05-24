import styled from "styled-components";

const StyledBenefitsContent = styled.div`
height: 300px;
padding: 10px;
& div span {
    display: inline-block;
     margin-bottom: 20px;
}
    
`

export const BenefitsContent = () => {
    return (
        <>
        <StyledBenefitsContent>
            <div>
                <span>Доставка на следующий день</span>
            </div>
            <div>
                <p>
                Москве и 60 других крупных городах России вы получите свой
                заказ уже на следующий день! Более подробную информацию 
                об условиях доставки в ваш город можно найти здесь.
                </p>
            </div>
        </StyledBenefitsContent>
        <StyledBenefitsContent>
            <div>
                <span>Примерка перед покупкой</span>
            </div>
            <div>
                <p>
                Интернет-магазин даёт возможность примерить одежду, обувь и 
                другие товары перед оплатой заказа курьеру. Оплачивайте только 
                то, что вам подошло и понравилось!
                </p>
            </div>
        </StyledBenefitsContent>
        <StyledBenefitsContent>
            <div>
                <span>Удобные способы оплаты</span>
            </div>
            <div>
                <p>
                Вы можете оплатить покупки не только наличными, 
                но и банковской картой. У всех курьеров при себе 
                есть терминал для оплаты картами.
                </p>
            </div>
        </StyledBenefitsContent>
        </>
    )
}