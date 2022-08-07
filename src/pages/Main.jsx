import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import page from "../assets/main.png";
import chevronDown from "../assets/chevron-down.svg";
import chat from "../assets/chat.png";
import info from "../assets/info.png";
import status from "../assets/status.png";
import weather from "../assets/weather.png";
import mobile from "../assets/mobile.png";
import mobileMain from "../assets/mobileMain.png";
import mobileChat from "../assets/mobileChat.png";
import { Link } from "react-router-dom";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  padding-top: 10rem;
  padding-left: 1rem;
`;
const Info = styled.div`
  display: flex;
  width: 144rem;
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
`;
const InfoSubTitle = styled.span`
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 2.4rem;
`;
const InfoButton = styled.button`
  width: fit-content;
  padding: 2rem 5rem;
  margin-top: 27rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.colors.darkPink};
  border: none;
  border-radius: 0.5rem;
  a {
    color: white;
  }
`;
const InfoSubContents = styled.div``;
const InfoImg = styled.img`
  width: 72rem;
  height: 36rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 2rem;
  margin-top: 20rem;
`;
const Arrow = styled.img`
  width: 4.3rem;
  height: 4rem;
  margin: 25rem 0;
  opacity: 0.4;
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
`;
const ChatInfoSubContents = styled.div``;
const ChatInfoImg = styled.img`
  width: 48rem;
  height: 65rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
const ChatInfoContents = styled(InfoContents)``;
const ChatInfoTitle = styled(InfoTitle)`
  font-size: 3.2rem;
  margin-bottom: 5rem;
`;
const ChatInfoSubTitle = styled(InfoSubTitle)``;

const ReportInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80rem;
`;
const ReportInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 144rem;
`;
const ReportInfoContents = styled(ChatInfoContents)``;
const ReportInfoTitle = styled(ChatInfoTitle)``;
const ReportInfoSubTitle = styled(ChatInfoSubTitle)``;
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
`;
const MobileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80rem;
  background-color: #efefef;
`;
const MobileInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 144rem;
`;
const MobileInfoSubContents = styled.div`
  display: flex;
`;
const MobileInfoImg = styled.img`
  width: 25rem;
  height: 65rem;
  margin-right: 5rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
const MobileInfoContents = styled(InfoContents)`
  overflow: hidden;
  padding-left: 10rem;
`;
const MobileInfoTitle = styled(InfoTitle)`
  font-size: 3.2rem;
  margin-bottom: 5rem;
`;
const MobileInfoSubTitle = styled(InfoSubTitle)``;
const LastInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80rem;
`;
const LastInfoContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LastInfoTitle = styled.h1`
  font-size: 2.4rem;
`;
const LastInfoButton = styled(InfoButton)`
  margin-top: 5rem;
`;

function Main() {
  return (
    <>
      <Header user={false} />
      <Container>
        <Info>
          <InfoContents>
            <InfoTitle>
              우리 아이의 숨은 마음을 알아보고 분석해주는 아이마음
            </InfoTitle>
            <InfoSubTitle>아이의 속마음을 알고 싶나요?</InfoSubTitle>
            <InfoSubTitle>
              아이마음을 통해 우리 아이의 숨은 심리를 알아보세요.
            </InfoSubTitle>
            <InfoSubTitle>
              다양한 통계를 통해 아이의 상태가 제공됩니다.
            </InfoSubTitle>
            <InfoButton>
              <Link to={"/join"}>가입하고 아이마음 확인하기</Link>
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
              <ChatInfoTitle>
                실시간으로 아이의 대화 로그를 확인하세요.
              </ChatInfoTitle>
              <ChatInfoSubTitle>
                마음인형과 아이간의 대화 내용이 실시간으로 제공됩니다.
              </ChatInfoSubTitle>
              <ChatInfoSubTitle>
                대화 로그를 통해 내 아이의 진짜 마음을 알아보세요!
              </ChatInfoSubTitle>
              <ChatInfoSubTitle>
                추후 실시간 대화 기능이 추가 제공됩니다.
              </ChatInfoSubTitle>
              <ChatInfoSubTitle>
                인형을 통한 실시간 대화를 통해 아이의 솔직한 마음을 알아보세요!
              </ChatInfoSubTitle>
            </ChatInfoContents>
          </ChatInfoContainer>
        </ChatInfo>
        <ReportInfo>
          <ReportInfoContainer>
            <ReportInfoContents>
              <ReportInfoTitle>
                분석된 아이의 심리 상태를 살펴보세요.
              </ReportInfoTitle>
              <ReportInfoSubTitle>
                아이마음은 다양한 분석 도구를 제공합니다.
              </ReportInfoSubTitle>
              <ReportInfoSubTitle>
                통계를 통해 제공되는 아이의 상태를 확인해보세요!
              </ReportInfoSubTitle>
              <ReportInfoSubTitle>
                다른 아이들과의 차이점을 통해 우리 아이만의 문제점을 찾아보세요.
              </ReportInfoSubTitle>
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
              <MobileInfoSubTitle>
                아이마음을 이제 모바일에서도 만나보세요!
              </MobileInfoSubTitle>
              <MobileInfoSubTitle>
                컴퓨터 없이 간단한게 모바일로 접속 가능합니다.
              </MobileInfoSubTitle>
              <MobileInfoSubTitle>
                언제 어디서든 아이의 상태를 실시간으로 확인하세요.
              </MobileInfoSubTitle>
            </MobileInfoContents>
          </MobileInfoContainer>
        </MobileInfo>
        <LastInfo>
          <LastInfoContents>
            <LastInfoTitle>
              아이의 숨은 마음을 확인 할 준비가 되셨나요?
            </LastInfoTitle>
            <LastInfoButton>
              <Link to={"/join"}>아이마음 시작하기</Link>
            </LastInfoButton>
          </LastInfoContents>
        </LastInfo>
      </Container>
      <Footer />
    </>
  );
}

export default Main;
