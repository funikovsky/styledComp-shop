import styled from "styled-components";

const StyledSectionNewsContent = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyledNewsMainBlock = styled.div`
    width: 735px;
    height: 546px;
    background-color: #F8F7F7;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 2%;
    overflow: hidden;
    box-shadow: 2px 4px 10px 5px rgba(0, 0, 0, 0.15);
  
    
`
const StyledMainBlockContent = styled.div`
    position: relative;
    height: 168px;
    padding: 0 28px 40px 28px;

    & h2 {
        margin-bottom: 28px;
        &:first-child {
            margin-bottom: 0;
        }
    }
         
    & p {
        font-size: 20px;
    }
    
`

const StyledBlockContentBG = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.15);
    opacity: 0.3;
    box-shadow: 5px 10px 20px 50px rgba(0, 0, 0, 0.15);
    top: 0;
    
`
const StyledNewsSecondBlock = styled.div`
    width: 375px;
    height: 546px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
const StyledNewsSmallBlock = styled.div`
    height: 258px;
    background-color: #F8F7F7;
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: 2px 4px 10px 5px rgba(0, 0, 0, 0.15);
    border-radius: 3%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: end;
`
const StyledSmallBlockContent = styled.div`
    position: relative;
    height: 68px;
    text-align: end;
    padding: 0 24px 24px 24px;
    

`

export const SectionNewsContent = () => {
    return (
        <StyledSectionNewsContent>
            <StyledNewsMainBlock>
                <StyledMainBlockContent>
                    <h2>Timberland.</h2>
                    <h2>Поступление новой коллекции</h2>
                    <p>Успейте приобрести по выгодным условиям</p>
                    <StyledBlockContentBG/>
                </StyledMainBlockContent>
                      
            </StyledNewsMainBlock>
            <StyledNewsSecondBlock>
                    <StyledNewsSmallBlock>
                        <StyledSmallBlockContent>
                            <h3>Puma Exclusive</h3>
                            <StyledBlockContentBG/>
                        </StyledSmallBlockContent>
                    </StyledNewsSmallBlock>
                    <StyledNewsSmallBlock>
                        <StyledSmallBlockContent>
                            <h3>Nike Exclusive</h3>
                            <StyledBlockContentBG/>
                        </StyledSmallBlockContent>
                    </StyledNewsSmallBlock>
                </StyledNewsSecondBlock>
        </StyledSectionNewsContent>
    )
}


