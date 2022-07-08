import styled from "styled-components";
import child from "../assets/child.jpeg";
import notification from "../assets/notification.svg";
import flower from "../assets/flower.svg";
import avatar from "../assets/avatar.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d9d9da;
  min-width: 144rem;
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

function Header({ user }) {
  let TextList;
  if (user) {
    TextList = [
      { title: "채팅", url: "/chat" },
      { title: "게시판", url: "/notice" },
      { title: "FAQ", url: "/faq" },
    ];
  } else {
    TextList = [
      { title: "로그인", url: "/login" },
      { title: "회원가입", url: "/join" },
      { title: "FAQ", url: "/faq" },
    ];
  }

  return (
    <header>
      <Container>
        <Contents>
          <Title>
            <Link to={"/"}>
              <TitleImg src={flower} />
            </Link>
            <Link to={"/"}>
              <TitleName>아이마음</TitleName>
            </Link>
          </Title>
          <Nav>
            <NavList>
              {TextList.map((list) => {
                return (
                  <NavItem key={list.title}>
                    <Link to={list.url}>{list.title}</Link>
                  </NavItem>
                );
              })}
            </NavList>
            <NavList>
              <NavItem>
                {user ? <NavImg src={child} /> : <NavImg src={avatar} />}
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
