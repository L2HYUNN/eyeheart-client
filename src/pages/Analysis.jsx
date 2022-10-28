import styled from "styled-components";

import Footer from "../components/Footer";
// Components
import Header from "../components/Header";
import Info from "../components/Info";
import Promotion from "../components/Promotion";
import Relation from "../components/Relation";
import Status from "../components/Status";
import Weather from "../components/Weather";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
  padding-top: 3rem;
  @media ${({ theme }) => theme.size.small} {
    min-width: max-content;
    width: 100%;
    padding-left: 0rem;
    padding-top: 3rem;
  }
`;
const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 144rem;
  justify-items: center;
  grid-template:
    "info info relation" 30rem
    "status status relation" 25rem
    "weather weather relation" 25rem
    "weather weather relation" 25rem
    "promotion promotion relation" 40rem / 36rem 36rem 72rem;
  @media ${({ theme }) => theme.size.small} {
    display: block;
    width: 100%;
  }
`;

function Analysis() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Info />
          <Status />
          <Weather />
          <Relation />
          <Promotion />
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Analysis;
