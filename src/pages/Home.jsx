import styled from "styled-components";
// Components
import Header from "../components/Header";
import Info from "../components/Info";
import Chat from "../components/Chat";

const Main = styled.main`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 144rem;
  justify-items: center;
  grid-template:
    "info info chat" 30rem
    "status status chat" 1fr
    "day day chat" 1fr
    "graph graph graph" / 1fr 1fr;
`;
const Dumy = styled.div`
  width: 72rem;
  height: 50rem;
  grid-area: info;
  background-color: #1abc9c;
`;
const Dumy2 = styled.div`
  width: 72rem;
  height: 150rem;
  grid-area: chat;
  background-color: #3498db;
`;

function Home() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Info />
          <Chat />
        </Container>
      </Main>
    </>
  );
}

export default Home;
