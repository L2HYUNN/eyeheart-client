import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Child from "../assets/child.jpeg";
import Time from "../assets/time.svg";
import Calendar from "../assets/calendar.svg";
import flower from "../assets/flower.svg";
import Chat from "../assets/chats.svg";
import { useState } from "react";
import { useQuery } from "react-query";
import { getUserReservation } from "../api/api";
import { useEffect } from "react";
import moment from "moment";
// import Text from "../assets/text.svg";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
  padding-top: 3rem;
  @media ${({ theme }) => theme.size.small} {
    justify-content: center;
    min-width: fit-content;
    max-width: 100vw;
    width: 100%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 140rem;
  height: 120rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 2rem;
  @media ${({ theme }) => theme.size.small} {
    flex-direction: column-reverse;
    width: 90vw;
    min-height: 50rem;
    height: 100%;
    padding: 1rem;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    @media ${({ theme }) => theme.size.small} {
      display: ${(props) => (props.toggle ? "flex" : "none")};
      width: 100%;
      height: 100%;
      margin-right: 0;
      border-right: none;
    }
  }
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    height: 100%;
  }
`;
const Reservation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65rem;
  height: 15rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 2rem;
  margin-bottom: 5rem;
  border-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3rem;
  }
`;
const ReservationImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-right: 2rem;
  @media ${({ theme }) => theme.size.small} {
    display: none;
    width: 7rem;
    height: 7rem;
  }
`;
const ReservationContents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.8rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const ReservationName = styled.span`
  font-size: 2.4rem;
  margin-bottom: 2rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const ReservationDate = styled.span`
  display: flex;
  font-size: 1.8rem;
  opacity: 0.4;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: max-content;
    font-size: 1.6rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: max-content;
    font-size: 1.6rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    margin-left: 2rem;
  }
`;
const ReservationResultBtns = styled.div`
  margin-bottom: 2rem;
  @media ${({ theme }) => theme.size.small} {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    font-size: 1.4rem;
    margin-right: 1rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    font-size: 1.4rem;
    margin-right: 0;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    font-size: 1.4rem;
  }
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${({ theme }) => theme.size.small} {
    padding-top: 3rem;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 2rem;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 107rem;
  @media ${({ theme }) => theme.size.small} {
    height: 100%;
  }
`;
const Img = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 5rem;
  opacity: 0.4;
`;
const Consulting = styled.div`
  width: 60rem;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  padding: 3rem;
  @media ${({ theme }) => theme.size.small} {
    border: none;
  }
`;
const ConsultingDoctor = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3rem;
  border-bottom: 1px solid black;
  @media ${({ theme }) => theme.size.small} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ConsultingDoctorImg = styled.img`
  width: 17rem;
  height: 17rem;
  margin-right: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 15rem;
    height: 15rem;
    margin-right: 0;
  }
`;
const ConsultingDoctorName = styled.div`
  width: fit-content;
  font-size: 2.2rem;
  font-weight: 500;
  padding: 1rem;
  p {
    margin-bottom: 1.5rem;
    &:nth-child(2n) {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 3rem;
      @media ${({ theme }) => theme.size.small} {
        font-size: 1.6rem;
      }
    }
  }
  @media ${({ theme }) => theme.size.small} {
    text-align: center;
    font-size: 1.8rem;
  }
`;
const ConsultingDate = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;
const ConsultingDateImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const ConsultingDateTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const ConsultingDateText = styled.p`
  font-size: 2rem;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ConsultingTime = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;
const ConsultingTimeImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const ConsultingTimeTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const ConsultingTimeText = styled.p`
  font-size: 2rem;
  margin-bottom: 4rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ConsultingContents = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;
const ConsultingContentsImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: 2.5rem;
    height: 2.5rem;
  }
`;
const ConsultingContentsTitle = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const ConsultingContentsTexts = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  height: 55rem;
  @media ${({ theme }) => theme.size.small} {
    min-height: 20rem;
    height: 100%;
  }
`;
const ConsultingContentsText = styled.p`
  font-size: 2rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;

function CheckReservation() {
  const [toggle, setToggle] = useState(false);
  const [info, setInfo] = useState({});
  const { isLoading, data } = useQuery("userReservationInfo", () =>
    getUserReservation(JSON.parse(localStorage.getItem("user")).userId)
  );

  const showDetailInfo = (event) => {
    if (!info.counselor) {
      setToggle(!toggle);
    }
    setInfo(data.data.reservations[event.target.id]);
  };

  const confirmReservation = () => {};

  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <Section toggle={toggle}>
            <Intro>
              <Title>상담 상세 정보</Title>
              <Contents>
                {toggle ? (
                  <Consulting>
                    <ConsultingDoctor>
                      <ConsultingDoctorImg
                        src={info?.counselor?.info?.thumbnail}
                      />
                      <ConsultingDoctorName>
                        <p>상담사</p>
                        <p>{info?.counselor?.info?.user_subname}</p>
                        <p>이메일</p>
                        <p>{info?.counselor?.info?.user_name}</p>
                      </ConsultingDoctorName>
                    </ConsultingDoctor>
                    <ConsultingDate>
                      <ConsultingDateImg src={Calendar} />
                      <ConsultingDateTitle>상담 날짜</ConsultingDateTitle>
                    </ConsultingDate>
                    <ConsultingDateText>{info?.detail?.day}</ConsultingDateText>
                    <ConsultingTime>
                      <ConsultingTimeImg src={Time} />
                      <ConsultingTimeTitle>상담 시간</ConsultingTimeTitle>
                    </ConsultingTime>
                    <ConsultingTimeText>
                      {info?.detail?.begin} ~ {info?.detail?.end}
                    </ConsultingTimeText>
                    <ConsultingContents>
                      <ConsultingContentsImg src={Chat} />
                      <ConsultingContentsTitle>
                        상담 내용
                      </ConsultingContentsTitle>
                    </ConsultingContents>
                    <ConsultingContentsTexts>
                      {info?.detail?.content.map((text) => (
                        <ConsultingContentsText>{text}</ConsultingContentsText>
                      ))}
                    </ConsultingContentsTexts>
                  </Consulting>
                ) : (
                  <Img src={flower} />
                )}
              </Contents>
            </Intro>
          </Section>
          <Section>
            {data?.data?.reservations?.map((reservationInfo, index) => {
              return (
                <Reservation key={reservationInfo?.counselor?.info?.id}>
                  <ReservationImg
                    src={reservationInfo?.counselor?.info?.thumbnail}
                  />
                  <ReservationContents>
                    <ReservationName>
                      {reservationInfo?.counselor?.info?.user_subname}
                    </ReservationName>
                    <ReservationDate>
                      <ReservationDateImg src={Calendar} />
                      {reservationInfo?.detail?.day}
                    </ReservationDate>
                    <ReservationTime>
                      <ReservationTimeImg src={Time} />
                      {`${reservationInfo?.detail?.begin} ~ ${reservationInfo?.detail?.end}`}
                    </ReservationTime>
                  </ReservationContents>
                  <ReservationBtns>
                    <ReservationResultBtns>
                      <ReservationSucessBtn>확정</ReservationSucessBtn>
                      <ReservationCancelBtn>취소</ReservationCancelBtn>
                    </ReservationResultBtns>
                    <ReservationDetailBtn id={index} onClick={showDetailInfo}>
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
