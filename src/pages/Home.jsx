import styled from "styled-components";
// Components
import Header from "../components/Header";
import Info from "../components/Info";
import Chat from "../components/Chat";
import Status from "../components/Status";
import Weather from "../components/Weather";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
`;
const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 144rem;
  justify-items: center;
  grid-template:
    "info info chat" 30rem
    "status status chat" 25rem
    "weather weather chat" 25rem
    "weather weather chat" 25rem / 1fr 1fr;
`;

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Info />
          <Chat />
          <Status />
          <Weather />
        </Container>
      </Main>
    </>
  );
}

export default Home;
