import styled from "styled-components";
// Components
import Header from "../components/Header";
import Info from "../components/Info";
import Chat from "../components/Chat";
import Status from "../components/Status";
import Weather from "../components/Weather";
import Footer from "../components/Footer";
import Report from "../components/Report";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
  padding-top: 3rem;
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
    "weather weather chat" 25rem
    "report report report" 70rem / 36rem 36rem 72rem;
`;

function Home() {
  return (
    <>
      <Header user={false} />
      <Main>
        <Container>
          <Info />
          <Chat />
          <Status />
          <Weather />
          <Report />
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Home;
