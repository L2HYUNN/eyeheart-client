import styled from "styled-components";
import child from "../assets/child.jpeg";
import notification from "../assets/notification.svg";
import flower from "../assets/flower.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d9d9da;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  width: 144rem;
  max-width: 144rem;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
`;
const TitleImg = styled.img`
  width: 4.3rem;
  height: 4.3rem;
`;
const TitleName = styled.h1`
  font-family: "Gamja Flower", cursive;
  font-size: 4.5rem;
`;
const Nav = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: ${({ theme }) => theme.fontWeights.nav};
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  &:last-child {
    margin-left: 3rem;
    width: 10rem;
  }
`;
const NavItem = styled.li``;
const NavImg = styled.img`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 50%;
`;
const NavNotification = styled.img`
  width: 3rem;
  height: 3rem;
`;

function Header() {
  const TextList = ["채팅", "게시판", "FAQ"];

  return (
    <header>
      <Container>
        <Contents>
          <Title>
            <TitleImg src={flower} />
            <TitleName>아이마음</TitleName>
          </Title>
          <Nav>
            <NavList>
              {TextList.map((list) => {
                return <NavItem key={list}>{list}</NavItem>;
              })}
            </NavList>
            <NavList>
              <NavItem>
                <NavImg src={child} />
              </NavItem>
              <NavItem>
                <NavNotification src={notification} />
              </NavItem>
            </NavList>
          </Nav>
        </Contents>
      </Container>
    </header>
  );
}

export default Header;
