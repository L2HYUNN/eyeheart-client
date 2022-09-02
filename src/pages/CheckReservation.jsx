import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Child from "../assets/child.jpeg";
import Time from "../assets/time.svg";
import Calendar from "../assets/calendar.svg";
import flower from "../assets/flower.svg";
import { useState } from "react";
// import Text from "../assets/text.svg";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
  padding-top: 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 140rem;
  height: 120rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 2rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  height: 116rem;
  padding: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  :first-child {
    width: 68rem;
    margin-right: 2rem;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
const Reservation = styled.div`
  display: flex;
  align-items: center;
  width: 66rem;
  height: 15rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 2rem;
  margin-bottom: 5rem;
  border-radius: 2rem;
`;
const ReservationImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-right: 2rem;
`;
const ReservationContents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
`;
const ReservationName = styled.span`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;
const ReservationDate = styled.span`
  display: flex;
  font-size: 1.8rem;
  opacity: 0.4;
  margin-bottom: 1rem;
`;
const ReservationDateImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;
const ReservationTime = styled.span`
  display: flex;
  font-size: 1.8rem;
  opacity: 0.4;
`;
const ReservationTimeImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
`;
const ReservationBtns = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6rem;
`;
const ReservationResultBtns = styled.div`
  margin-bottom: 2rem;
`;
const ReservationSucessBtn = styled.button`
  width: 12rem;
  height: 4rem;
  margin-right: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.colors.darkPink};
  border: none;
  border-radius: 0.5rem;
  a {
    color: white;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.pink};
  }
  cursor: pointer;
`;
const ReservationCancelBtn = styled.button`
  width: 12rem;
  height: 4rem;
  margin-right: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.colors.darkPink};
  border: none;
  border-radius: 0.5rem;
  a {
    color: white;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.pink};
  }
  cursor: pointer;
`;
const ReservationDetailBtn = styled.button`
  width: 26rem;
  height: 4rem;
  margin-right: 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  background-color: ${({ theme }) => theme.colors.darkPink};
  border: none;
  border-radius: 0.5rem;
  a {
    color: white;
  }
  :hover {
    background-color: ${({ theme }) => theme.colors.pink};
  }
  cursor: pointer;
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  text-align: center;
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100rem;
`;
const Img = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 5rem;
  opacity: 0.4;
`;
const Content = styled.div``;
const SocialImg = styled.div``;
const SocialName = styled.div``;

const Date = styled.div``;
// const Time = styled.div``;
const dummyData = [
  {
    id: 1,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
  {
    id: 2,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
  {
    id: 3,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
  {
    id: 4,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
  {
    id: 5,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
  {
    id: 6,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
  {
    id: 77,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
  {
    id: 8,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
  {
    id: 9,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
];

function CheckReservation() {
  const [info, setInfo] = useState(false);
  return (
    <>
      <Header user={true} />
      <Main>
        <Wrapper>
          <Section>
            <Intro>
              <Title>상담 정보</Title>
              <Contents>{info ? null : <Img src={flower} />}</Contents>
            </Intro>
          </Section>
          <Section>
            {dummyData.map((data) => {
              return (
                <Reservation key={data.id}>
                  <ReservationImg src={Child} />
                  <ReservationContents>
                    <ReservationName>{data.name}</ReservationName>
                    <ReservationDate>
                      <ReservationDateImg src={Calendar} />
                      {data.date}
                    </ReservationDate>
                    <ReservationTime>
                      <ReservationTimeImg src={Time} />
                      {data.time}
                    </ReservationTime>
                  </ReservationContents>
                  <ReservationBtns>
                    <ReservationResultBtns>
                      <ReservationSucessBtn>수락</ReservationSucessBtn>
                      <ReservationCancelBtn>취소</ReservationCancelBtn>
                    </ReservationResultBtns>
                    <ReservationDetailBtn onClick={() => setInfo(!info)}>
                      상세 정보 보기
                    </ReservationDetailBtn>
                  </ReservationBtns>
                </Reservation>
              );
            })}
          </Section>
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default CheckReservation;
