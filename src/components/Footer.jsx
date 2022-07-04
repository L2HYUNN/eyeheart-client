import styled from "styled-components";
import flower from "../assets/flower.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import github from "../assets/github.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  border-top: 1px solid #d9d9da;
  min-width: 144rem;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  width: 144rem;
  height: 20rem;
  max-width: 144rem;
`;
const Title = styled.div``;
const TitleOrigin = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const TitleImg = styled.img`
  width: 4.3rem;
  height: 4.3rem;
`;
const TitleName = styled.h1`
  font-family: "Gamja Flower", cursive;
  font-size: 4.5rem;
`;
const TilteSubName = styled.h3`
  text-align: right;
  font-size: 1.4rem;
  padding-right: 0.5rem;
`;
const Nav = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.main};
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 10rem;
`;
const NavItem = styled.li``;
const NavImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
`;

function Footer() {
  return (
    <footer>
      <Container>
        <Contents>
          <Title>
            <TitleOrigin>
              <TitleImg src={flower} />
              <TitleName>아이마음</TitleName>
            </TitleOrigin>
            <TilteSubName>우리 아이의 숨겨진 마음</TilteSubName>
          </Title>
          <Nav>
            <NavList>
              <NavItem>
                <NavImg src={instagram}></NavImg>
                <NavImg src={youtube}></NavImg>
                <NavImg src={github}></NavImg>
              </NavItem>
              <NavItem>프로젝트 소개</NavItem>
              <NavItem>ver 1.0.0</NavItem>
              <NavItem>© 2022. Team. EyeHeart Co. all rights reserved.</NavItem>
            </NavList>
          </Nav>
        </Contents>
      </Container>
    </footer>
  );
}

export default Footer;
