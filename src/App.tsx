import styled from "styled-components";
import { Container } from "./components/container/container";
import { Header } from "./components/header/header";
import { MainContent } from "./components/mainContent/mainContent";


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
   
    <AppWrapper>
      <Header/>
      <Container>
        <MainContent/>
      </Container>
    </AppWrapper>
   
  );
}

export default App;
