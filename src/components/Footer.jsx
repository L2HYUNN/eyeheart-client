import styled from 'styled-components';

import flower from '../assets/flower.svg';
import github from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import youtube from '../assets/youtube.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  border-top: 1px solid #d9d9da;
  min-width: 144rem;
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    min-width: max-content;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  width: 144rem;
  height: 20rem;
  max-width: 144rem;
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    max-width: 48rem;
    padding: 3rem 2rem;
    height: max-content;
  }
`;
const Title = styled.div``;
const TitleOrigin = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
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
  font-family: 'Gamja Flower', cursive;
  font-size: 4.5rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 3rem;
  }
`;
const TilteSubName = styled.h3`
  text-align: right;
  font-size: 1.4rem;
  padding-right: 0.5rem;
  @media ${({ theme }) => theme.size.small} {
    width: max-content;
  }
`;
const Nav = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.main};
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.4rem;
  }
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 10rem;
`;
const NavItem = styled.li`
  @media ${({ theme }) => theme.size.small} {
    &:last-child {
      font-size: 1.2rem;
      text-align: right;
      width: 15rem;
    }
  }
`;
const NavImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: 2.5rem;
    height: 2.5rem;
  }
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
                <NavImg src={instagram} />
                <NavImg src={youtube} />
                <NavImg src={github} />
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
