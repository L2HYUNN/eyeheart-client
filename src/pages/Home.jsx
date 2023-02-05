import { Link } from 'react-router-dom';
import styled from 'styled-components';

import chat from '../assets/chat.png';
import chevronDown from '../assets/chevron-down.svg';
import info from '../assets/info.png';
import page from '../assets/main.png';
import mobile from '../assets/mobile.png';
import mobileChat from '../assets/mobileChat.png';
import mobileMain from '../assets/mobileMain.png';
import status from '../assets/status.png';
import weather from '../assets/weather.png';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  padding-top: 10rem;
  padding-left: 1rem;
  @media ${({ theme }) => theme.size.small} {
    min-width: max-content;
    width: 100%;
    padding-left: 0rem;
    padding-top: 7rem;
  }
`;
const Info = styled.div`
  display: flex;
  width: 144rem;
  @media ${({ theme }) => theme.size.small} {
    display: block;
    width: 100%;
    padding: 0 2rem;
  }
`;
const InfoContents = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoTitle = styled.span`
  font-size: 3.6rem;
  font-weight: 500;
  width: 70rem;
  line-height: 4rem;
  margin-bottom: 7rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 2.4rem;
    width: 35rem;
    margin-bottom: 3rem;
  }
`;
const InfoSubTitle = styled.span`
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 2.4rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const InfoButton = styled.button`
  width: fit-content;
  padding: 2rem 5rem;
  margin-top: 5rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.colors.darkPink};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  a {
    color: white;
  }
  @media ${({ theme }) => theme.size.small} {
    width: max-content;
    font-size: 1.4rem;
    margin-top: 10rem;
  }
`;
const InfoSubContents = styled.div`
  @media ${({ theme }) => theme.size.small} {
    display: flex;
    justify-content: center;
  }
`;
const InfoImg = styled.img`
  width: 70rem;
  height: 60rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 2rem;
  margin-top: 15rem;
  object-fit: contain;
  @media ${({ theme }) => theme.size.small} {
    display: flex;
    justify-content: center;
    width: 90vw;
    height: 20rem;
    margin-top: 5rem;
  }
`;
const Arrow = styled.img`
  width: 4.3rem;
  height: 4rem;
  margin: 15rem 0;
  opacity: 0.4;
  @media ${({ theme }) => theme.size.small} {
    margin: 5rem 0;
  }
`;

const ChatInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80rem;
  background-color: #efefef;
`;
const ChatInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 144rem;
  @media ${({ theme }) => theme.size.small} {
    display: block;
    width: 100%;
    padding: 0 2rem;
  }
`;
const ChatInfoSubContents = styled.div`
  display: flex;
  justify-content: center;
`;
const ChatInfoImg = styled.img`
  width: 48rem;
  height: 65rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  @media ${({ theme }) => theme.size.small} {
    width: 30rem;
    height: 50rem;
    margin-bottom: 5rem;
    margin-top: 1rem;
  }
`;
const ChatInfoContents = styled(InfoContents)`
  @media ${({ theme }) => theme.size.small} {
    align-items: flex-end;
    margin-bottom: 1rem;
  }
`;
const ChatInfoTitle = styled(InfoTitle)`
  font-size: 3.2rem;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 30rem;
    font-size: 2.4rem;
    margin-bottom: 3rem;
    text-align: right;
  }
`;
const ChatInfoSubTitle = styled(InfoSubTitle)`
  @media ${({ theme }) => theme.size.small} {
    width: 34rem;
    font-size: 1.6rem;
    text-align: right;
  }
`;

const ReportInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80rem;
  @media ${({ theme }) => theme.size.small} {
    align-items: flex-start;
    height: 100%;
    padding: 3rem 0;
  }
`;
const ReportInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 144rem;
  @media ${({ theme }) => theme.size.small} {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    padding: 0 2rem;
  }
`;
const ReportInfoContents = styled(ChatInfoContents)`
  @media ${({ theme }) => theme.size.small} {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const ReportInfoTitle = styled(ChatInfoTitle)`
  @media ${({ theme }) => theme.size.small} {
    width: 28rem;
    font-size: 2.4rem;
    margin-bottom: 3rem;
    text-align: left;
  }
`;
const ReportInfoSubTitle = styled(ChatInfoSubTitle)`
  @media ${({ theme }) => theme.size.small} {
    width: 34rem;
    text-align: left;
  }
`;
const ReportInfoSubContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ReportInfoImg = styled(ChatInfoImg)`
  width: 60rem;
  height: 20rem;
  margin-bottom: 2rem;
  &:nth-child(2) {
    margin-left: 5rem;
  }
  &:last-child {
    margin-left: 10rem;
  }
  @media ${({ theme }) => theme.size.small} {
    width: 26rem;
    height: 15rem;
    margin-left: 0;
    margin-bottom: 5rem;
  }
`;
const MobileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80rem;
  background-color: #efefef;
  @media ${({ theme }) => theme.size.small} {
    align-items: flex-start;
    padding: 3rem 0;
  }
`;
const MobileInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 144rem;
  @media ${({ theme }) => theme.size.small} {
    display: block;
    width: 100%;
    padding: 0 2rem;
  }
`;
const MobileInfoSubContents = styled.div`
  display: flex;
  @media ${({ theme }) => theme.size.small} {
    justify-content: space-between;
  }
`;
const MobileInfoImg = styled.img`
  width: 25rem;
  height: 65rem;
  margin-right: 5rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  @media ${({ theme }) => theme.size.small} {
    width: 10rem;
    height: 50rem;
    margin-right: 0;
    margin-bottom: 5rem;
  }
`;
const MobileInfoContents = styled(InfoContents)`
  overflow: hidden;
  padding-left: 10rem;
  @media ${({ theme }) => theme.size.small} {
    justify-content: flex-end;
    align-items: flex-end;
    padding-left: 0;
  }
`;
const MobileInfoTitle = styled(InfoTitle)`
  font-size: 3.2rem;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 20rem;
    font-size: 2.4rem;
    margin-bottom: 3rem;
    text-align: right;
  }
`;
const MobileInfoSubTitle = styled(InfoSubTitle)`
  @media ${({ theme }) => theme.size.small} {
    text-align: right;
  }
`;
const LastInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80rem;
  @media ${({ theme }) => theme.size.small} {
    height: 100%;
    margin: 15rem 2rem;
  }
`;
const LastInfoContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LastInfoTitle = styled.h1`
  font-size: 2.4rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const LastInfoButton = styled(InfoButton)`
  margin-top: 5rem;
`;

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Info>
          <InfoContents>
            <InfoTitle>우리 아이의 숨은 마음을 알아보고 분석해주는 아이마음</InfoTitle>
            <InfoSubTitle>아이의 속마음을 알고 싶나요?</InfoSubTitle>
            <InfoSubTitle>아이마음을 통해 우리 아이의 숨은 심리를 알아보세요.</InfoSubTitle>
            <InfoSubTitle>다양한 통계를 통해 아이의 상태가 제공됩니다.</InfoSubTitle>
            <InfoButton>
              <Link to="/join">가입하고 아이마음 확인하기</Link>
            </InfoButton>
          </InfoContents>
          <InfoSubContents>
            <InfoImg src={page} />
          </InfoSubContents>
        </Info>
        <Arrow src={chevronDown} />
        <ChatInfo>
          <ChatInfoContainer>
            <ChatInfoSubContents>
              <ChatInfoImg src={chat} />
            </ChatInfoSubContents>
            <ChatInfoContents>
              <ChatInfoTitle>실시간으로 아이와 대화하고 대화 로그를 확인하세요.</ChatInfoTitle>
              <ChatInfoSubTitle>아이마음 인형을 통해 아이와 대화해보세요.</ChatInfoSubTitle>
              <ChatInfoSubTitle>아이의 숨은 마음을 알아 볼 수 있습니다.</ChatInfoSubTitle>
              <ChatInfoSubTitle>인형과 아이의 대화 내용이 실시간으로 제공됩니다.</ChatInfoSubTitle>
              <ChatInfoSubTitle>대화 로그를 통해 아이의 진짜 마음을 알아보세요!</ChatInfoSubTitle>
            </ChatInfoContents>
          </ChatInfoContainer>
        </ChatInfo>
        <ReportInfo>
          <ReportInfoContainer>
            <ReportInfoContents>
              <ReportInfoTitle>분석된 아이의 심리 상태를 살펴보세요.</ReportInfoTitle>
              <ReportInfoSubTitle>아이마음은 다양한 분석 도구를 제공합니다.</ReportInfoSubTitle>
              <ReportInfoSubTitle>통계를 통해 제공되는 아이의 상태를 확인해보세요!</ReportInfoSubTitle>
              <ReportInfoSubTitle>다른 아이들과의 차이점을 통해 우리 아이만의 문제점을 찾아보세요.</ReportInfoSubTitle>
            </ReportInfoContents>
            <ReportInfoSubContents>
              <ReportInfoImg src={weather} />
              <ReportInfoImg src={info} />
              <ReportInfoImg src={status} />
            </ReportInfoSubContents>
          </ReportInfoContainer>
        </ReportInfo>
        <MobileInfo>
          <MobileInfoContainer>
            <MobileInfoSubContents>
              <MobileInfoImg src={mobile} />
              <MobileInfoImg src={mobileMain} />
              <MobileInfoImg src={mobileChat} />
            </MobileInfoSubContents>
            <MobileInfoContents>
              <MobileInfoTitle>모바일로 간편하게 이용하세요.</MobileInfoTitle>
              <MobileInfoSubTitle>아이마음을 이제 모바일에서도 만나보세요!</MobileInfoSubTitle>
              <MobileInfoSubTitle>컴퓨터 없이 간단한게 모바일로 접속 가능합니다.</MobileInfoSubTitle>
              <MobileInfoSubTitle>언제 어디서든 아이의 상태를 실시간으로 확인하세요.</MobileInfoSubTitle>
            </MobileInfoContents>
          </MobileInfoContainer>
        </MobileInfo>
        <LastInfo>
          <LastInfoContents>
            <LastInfoTitle>아이의 숨은 마음을 확인 할 준비가 되셨나요?</LastInfoTitle>
            <LastInfoButton>
              <Link to="/join">아이마음 시작하기</Link>
            </LastInfoButton>
          </LastInfoContents>
        </LastInfo>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
