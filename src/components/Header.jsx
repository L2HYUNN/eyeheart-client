import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import avatar from '../assets/avatar.svg';
import child from '../assets/child.jpeg';
import flower from '../assets/flower.svg';
import notification from '../assets/notification.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #d9d9da;
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
  max-width: 144rem;
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    max-width: 100vw;
    padding: 2rem 1.2rem;
    padding-right: 0.1rem;
  }
`;
const Title = styled.div`
  display: flex;
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
  font-family: 'Gamja Flower', cursive;
  font-size: 4.5rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 3rem;
  }
`;
const Nav = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.nav};
  font-weight: ${({ theme }) => theme.fontWeights.nav};
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.4rem;
  }
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20rem;
  &:last-child {
    width: 10rem;
  }
  @media ${({ theme }) => theme.size.small} {
    width: 11rem;
  }
`;
const NavItem = styled.li`
  position: relative;
`;
const NavImg = styled.img`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 50%;
  margin-right: 2rem;
  cursor: pointer;
  @media ${({ theme }) => theme.size.small} {
    margin-right: 1rem;
  }
`;
const NavNotification = styled.img`
  width: 3rem;
  height: 3rem;
`;
const NavMenu = styled.ul`
  position: absolute;
  top: ${(props) => (props.menu ? '4rem' : '0')};
  right: 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  width: 14rem;
  height: 20rem;
  background-color: rgba(239, 239, 239, 0.8);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 2rem;
  opacity: ${(props) => (props.menu ? '1' : '0')};

  z-index: ${(props) => (props.menu ? '999' : '-1')};
  transition: all 0.3s linear;
`;
const NavMenuItem = styled.li`
  width: 100%;
`;

function Header() {
  const [menu, setMenu] = useState(false);
  const navRef = useRef(null);
  const loggedInUser = JSON.parse(localStorage.getItem('user'));

  let navList;

  if (loggedInUser?.user) {
    navList = [
      { title: '채팅', url: '/chat' },
      { title: '상담', url: '/consulting' },
      { title: '분석', url: '/analysis' },
    ];
  } else {
    navList = [
      { title: '로그인', url: '/login' },
      { title: '회원가입', url: '/join' },
    ];
  }

  const navMenuList = [
    { title: '로그 아웃', url: '/logout' },
    { title: '아이 정보', url: '/child' },
    { title: '상담 목록', url: '/reservation' },
  ];

  const showUserMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current !== event.target && !navRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  return (
    <header>
      <Container>
        <Contents>
          <Title>
            <Link to="/">
              <TitleImg src={flower} />
            </Link>
            <Link to="/">
              <TitleName>아이마음</TitleName>
            </Link>
          </Title>
          <Nav>
            <NavList>
              {navList.map((list) => (
                <NavItem key={list.title}>
                  <Link to={list.url}>{list.title}</Link>
                </NavItem>
              ))}
            </NavList>
            <NavList>
              <NavItem>
                {loggedInUser?.user ? <NavImg src={child} onClick={showUserMenu} /> : <NavImg src={avatar} />}
              </NavItem>
              <NavItem>
                <NavNotification src={notification} />
              </NavItem>
              <NavItem>
                <NavMenu menu={menu} ref={navRef}>
                  {navMenuList.map((navMenu) => (
                    <NavMenuItem key={navMenu.title} menu={menu}>
                      <Link to={navMenu.url}>{navMenu.title}</Link>
                    </NavMenuItem>
                  ))}
                </NavMenu>
              </NavItem>
            </NavList>
          </Nav>
        </Contents>
      </Container>
    </header>
  );
}

export default Header;
