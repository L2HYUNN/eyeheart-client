import styled from "styled-components";
import flower from "../assets/flower.svg";
import balloon from "../assets/balloon.jpeg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72rem;
  height: 40rem;
  grid-area: promotion;
  @media ${({ theme }) => theme.size.small} {
    display: none;
    min-width: max-content;
    width: 100vw;
    padding-left: 0rem;
    padding-top: 3rem;
    height: 100%;
  }
`;
const BackgroundImage = styled.img`
  width: 33rem;
  height: 33rem;
  border-radius: 3rem;
  margin-left: 2rem;
  margin-top: 2rem;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33rem;
  height: 33rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    flex-direction: column;
    width: 90%;
    height: 12rem;
  }
  margin-top: 2rem;
`;
const Text = styled.span`
  color: black;
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.size.small} {
    width: max-content;
  }
`;
const TitleImg = styled.img`
  width: 4.3rem;
  height: 4.3rem;
  @media ${({ theme }) => theme.size.small} {
    width: 3rem;
    height: 3rem;
  }
`;
const TitleName = styled.h1`
  font-family: "Gamja Flower", cursive;
  font-size: 4.5rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 3rem;
  }
`;

function Status() {
  return (
    <Container>
      <Contents>
        <Title>
          <TitleImg src={flower} />
          <TitleName>아이마음</TitleName>
        </Title>
      </Contents>
      <BackgroundImage src={balloon} />
    </Container>
  );
}

export default Status;
