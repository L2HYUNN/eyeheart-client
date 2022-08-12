import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PersonImg from "../assets/person.jpeg";
import Calendar from "../assets/calendar.svg";
import Time from "../assets/time2.svg";
import Chat from "../assets/chats.svg";
import { useState } from "react";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 144rem;
  padding-top: 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  width: 140rem;
`;
const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: 91.5rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 2rem;
  margin-right: 5rem;
`;
const PersonTitle = styled.h1`
  font-weight: 600;
  font-size: 2.8rem;
  margin-bottom: 1rem;
`;
const PersonText = styled.span`
  font-size: 2.2rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
  opacity: 0.6;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Person = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 13rem;
  margin-bottom: 2rem;
  margin-top: 5rem;
`;
const PersonTime = styled.div`
  display: flex;
  width: 35rem;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;
const PersonTimeTitle = styled.h1`
  font-weight: 600;
  margin-right: 5rem;
`;
const PersonTimeText = styled.span`
  opacity: 0.6;
`;
const PersonCareer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const PersonCareerTitle = styled.h1`
  font-weight: 600;
  margin-bottom: 2rem;
`;
const PersonCareerText = styled.span`
  margin-bottom: 1rem;
  line-height: 2rem;
  opacity: 0.6;
`;
const ReservationInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 95rem;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 3rem;
`;
const ReservationTitle = styled.h1`
  font-weight: 600;
  font-size: 2.8rem;
  margin-bottom: 3rem;
`;
const ReservationDate = styled.div`
  width: 90rem;
  font-size: 2.6rem;
  margin-bottom: 3rem;
`;
const ReservationDateImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;
const ReservationDateTitle = styled.h2`
  display: flex;
  margin-bottom: 2rem;
  font-size: 2.4rem;
`;
const ReservationDateInfo = styled.p`
  opacity: 0.6;
  margin-bottom: 2rem;
  font-size: 2rem;
`;
const ReservationDateContext = styled.div``;
const ReservationDateButton = styled.button`
  width: 15rem;
  height: 5rem;
  border: none;
  border-radius: 2rem;
  background-color: ${(props) => {
    return props.children === props.active.date
      ? props.theme.colors.darkPink
      : null;
  }};
  margin-right: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => {
    return props.children === props.active.date
      ? "white"
      : "rgba(0, 0, 0, 0.2)";
  }};
  cursor: pointer;
`;
const ReservationTime = styled.div`
  width: 90rem;
  font-size: 2.6rem;
  margin-bottom: 3rem;
`;
const ReservationTimeImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;
const ReservationTimeTitle = styled.h2`
  display: flex;
  margin-bottom: 2rem;
  font-size: 2.4rem;
`;
const ReservationTimeInfo = styled.p`
  opacity: 0.6;
  margin-bottom: 2rem;
  font-size: 2rem;
`;
const ReservationTimeContext = styled.div``;
const ReservationTimeButton = styled.button`
  width: 15rem;
  height: 5rem;
  border: none;
  border-radius: 2rem;
  background-color: ${(props) => {
    return props.children === props.active.time
      ? props.theme.colors.darkPink
      : null;
  }};
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => {
    return props.children === props.active.time
      ? "white"
      : "rgba(0, 0, 0, 0.2)";
  }};
  cursor: pointer;
`;
const ReservationContent = styled.div`
  position: relative;
  width: 90rem;
  font-size: 2.6rem;
`;
const ReservationContentImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;
const ReservationContentTitle = styled.h2`
  display: flex;
  margin-bottom: 2rem;
  font-size: 2.4rem;
`;
const ReservationContentInfo = styled.p`
  opacity: 0.6;
  margin-bottom: 2rem;
  font-size: 2rem;
`;
const ReservationContentTextArea = styled.textarea`
  width: 90rem;
  height: 25rem;
  border: 1px solid rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  padding: 1rem;
  outline-color: ${({ theme }) => theme.colors.pink};
  &::placeholder {
    font-size: 1.8rem;
  }
`;
const ReservationButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 15rem;
  height: 5rem;
  border: none;
  border-radius: 2rem;
  background-color: ${(props) => {
    return props.active?.text && props.active.time !== "시간 선택"
      ? props.theme.colors.darkPink
      : null;
  }};
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => {
    return props.active?.text && props.active.time !== "시간 선택"
      ? "white"
      : "rgba(0, 0, 0, 0.2)";
  }};
  cursor: ${(props) => {
    return props.active?.text && props.active.time !== "시간 선택"
      ? "pointer"
      : null;
  }}; ;
`;

const dummyCareer = [
  "서울 신학대 상담대학원 상담학 석사 졸업",
  "미네소타 대학원 신학 박사 졸업",
  "한국심리상담센터 대표",
  "한국기업상담학회 이사",
  "한국기업심리상담센터 원장",
  "한국우울증연구소 소장",
  "한국분노연구소 소장",
  "현대자동차, 기아자동차 본사 상담사",
];

function Reserve() {
  const [reservation, setReservation] = useState({
    date: "오늘",
    time: "시간 선택",
    text: "",
  });

  const reserveDateToday = () => {
    return setReservation((data) => {
      return { ...data, date: "오늘" };
    });
  };

  const reserveDateTomorrow = () => {
    return setReservation((data) => {
      return { ...data, date: "내일" };
    });
  };
  const reserverTime = (event) => {
    return setReservation((data) => {
      return { ...data, time: event.target.innerText };
    });
  };
  const reserveText = (event) => {
    console.log(event.target.value);
    return setReservation((data) => {
      return { ...data, text: event.target.value };
    });
  };
  const time = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  return (
    <>
      <Header user={true} />
      <Main>
        <Wrapper>
          <PersonInfo>
            <Person src={PersonImg} />
            <PersonTitle>고재천 상담사</PersonTitle>
            <PersonText>코코의원</PersonText>
            <PersonTime>
              <PersonTimeTitle>상담시간</PersonTimeTitle>
              <PersonTimeText>00:00 ~ 23:40 (일)</PersonTimeText>
            </PersonTime>
            <PersonTime>
              <PersonTimeTitle>점심시간</PersonTimeTitle>
              <PersonTimeText>없음</PersonTimeText>
            </PersonTime>
            <PersonCareer>
              <PersonCareerTitle>약력</PersonCareerTitle>
              {dummyCareer.map((career) => {
                return <PersonCareerText>{career}</PersonCareerText>;
              })}
            </PersonCareer>
          </PersonInfo>
          <ReservationInfo>
            <ReservationTitle>예약하기</ReservationTitle>
            <ReservationDate>
              <ReservationDateTitle>
                <ReservationDateImg src={Calendar} />
                {reservation.date}
              </ReservationDateTitle>
              <ReservationDateInfo>
                아이마음은 평일 주말 상관 없이 당일과 다음 날 예약을 제공합니다.
              </ReservationDateInfo>
              <ReservationDateContext>
                <ReservationDateButton
                  onClick={reserveDateToday}
                  active={reservation}
                >
                  오늘
                </ReservationDateButton>
                <ReservationDateButton
                  onClick={reserveDateTomorrow}
                  active={reservation}
                >
                  내일
                </ReservationDateButton>
              </ReservationDateContext>
            </ReservationDate>
            <ReservationTime>
              <ReservationTimeTitle>
                <ReservationTimeImg src={Time} />
                {reservation.time}
              </ReservationTimeTitle>
              {/* <ReservationTimeInfo>
                아이마음은 평일 주말 상관 없이 당일과 다음 날 예약을 제공합니다.
              </ReservationTimeInfo> */}
              <ReservationTimeContext>
                {time.map((text) => {
                  return (
                    <ReservationTimeButton
                      key={text}
                      active={reservation}
                      onClick={reserverTime}
                    >
                      {text}
                    </ReservationTimeButton>
                  );
                })}
              </ReservationTimeContext>
            </ReservationTime>
            <ReservationContent>
              <ReservationButton active={reservation}>
                예약 신청
              </ReservationButton>
              <ReservationContentTitle>
                <ReservationContentImg src={Chat} />
                상담 내용 입력
              </ReservationContentTitle>
              <ReservationContentInfo>
                상담 내용을 자세히 작성해주세요. {"( 필수 )"}
              </ReservationContentInfo>
              <ReservationContentTextArea
                onChange={reserveText}
                placeholder="예) 아이가 최근에 부쩍 말 수가 적어졌어요. 학교에서 무슨 문제가 있었던 거 같은데 저한테 말은 안해주고 점점 아이와 소통하기가 쉽지 않아요."
              ></ReservationContentTextArea>
            </ReservationContent>
          </ReservationInfo>
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default Reserve;
