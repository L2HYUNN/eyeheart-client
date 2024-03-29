/* eslint-disable no-shadow */
import moment from "moment";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { getConsultingsDetail, postConsultingReservation } from "../api/api";
import Calendar from "../assets/calendar.svg";
import Chat from "../assets/chats.svg";
import Time from "../assets/time2.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media ${({ theme }) => theme.size.small} {
    flex-direction: column;
    width: 90vw;
  }
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
  @media ${({ theme }) => theme.size.small} {
    display: none;
    width: 90vw;
    height: fit-content;
    margin-bottom: 3rem;
  }
`;
const PersonTitle = styled.h1`
  font-weight: 600;
  font-size: 2.8rem;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 2rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
`;
const Person = styled.img`
  width: 25rem;
  height: 25rem;
  border-radius: 13rem;
  margin-bottom: 2rem;
  margin-top: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 15rem;
    height: 15rem;
    border-radius: 7rem;
    margin-top: 2rem;
  }
`;
const PersonTime = styled.div`
  display: flex;
  width: 35rem;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    font-size: 1.6rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    font-size: 1.6rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 90vw;
    height: fit-content;
    margin-bottom: 3rem;
  }
`;
const ReservationTitle = styled.h1`
  font-weight: 600;
  font-size: 2.8rem;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 2rem;
  }
`;
const ReservationDate = styled.div`
  width: 90rem;
  font-size: 2.6rem;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    width: 80vw;
  }
`;
const ReservationDateImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: 2rem;
    height: 2rem;
  }
`;
const ReservationDateTitle = styled.h2`
  display: flex;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ReservationDateInfo = styled.p`
  opacity: 0.6;
  margin-bottom: 2rem;
  font-size: 2rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ReservationDateContext = styled.div`
  @media ${({ theme }) => theme.size.small} {
    width: 90vw;
  }
`;
const ReservationDateButton = styled.button`
  width: 15rem;
  height: 5rem;
  border: none;
  border-radius: 2rem;
  background-color: ${(props) => props.children === props.active.date
      ? props.theme.colors.darkPink
      : null};
  margin-right: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.children === props.active.date
      ? "white"
      : "rgba(0, 0, 0, 0.2)"};
  cursor: pointer;
  @media ${({ theme }) => theme.size.small} {
    height: 4rem;
    width: 14rem;
    border-radius: 1rem;
    font-size: 1.4rem;
  }
`;
const ReservationTime = styled.div`
  width: 90rem;
  font-size: 2.6rem;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    width: 80vw;
  }
`;
const ReservationTimeImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: 2rem;
    height: 2rem;
  }
`;
const ReservationTimeTitle = styled.h2`
  display: flex;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ReservationTimeContext = styled.div`
  @media ${({ theme }) => theme.size.small} {
    width: 90vw;
  }
`;
const ReservationTimeButton = styled.button`
  width: 15rem;
  height: 5rem;
  border: none;
  border-radius: 2rem;
  background-color: ${(props) => props.children === props.active.time
      ? props.theme.colors.darkPink
      : null};
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.children === props.active.time
      ? "white"
      : "rgba(0, 0, 0, 0.2)"};
  cursor: pointer;
  @media ${({ theme }) => theme.size.small} {
    width: 14rem;
    font-size: 1.4rem;
    height: 4rem;
    border-radius: 1rem;
  }
`;
const ReservationContent = styled.div`
  position: relative;
  width: 90rem;
  font-size: 2.6rem;
  @media ${({ theme }) => theme.size.small} {
    width: 80vw;
  }
`;
const ReservationContentImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: 2rem;
    height: 2rem;
  }
`;
const ReservationContentTitle = styled.h2`
  display: flex;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const ReservationContentInfo = styled.p`
  opacity: 0.6;
  margin-bottom: 2rem;
  font-size: 2rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 80vw;
    font-size: 1.4rem;
    &::placeholder {
      font-size: 1.4rem;
    }
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
  background-color: ${(props) => props.active?.text && props.active.time !== "시간 선택"
      ? props.theme.colors.darkPink
      : null};
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.active?.text && props.active.time !== "시간 선택"
      ? "white"
      : "rgba(0, 0, 0, 0.2)"};
  cursor: ${(props) => props.active?.text && props.active.time !== "시간 선택"
      ? "pointer"
      : null};
  @media ${({ theme }) => theme.size.small} {
    height: 4rem;
    font-size: 1.4rem;
    border-radius: 1rem;
  }
`;

function Reserve() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reservation, setReservation] = useState({
    date: "오늘",
    time: "시간 선택",
    text: "",
  });
  const [postReservation, setPostReservation] = useState({
    day: moment(new Date()).format("MM월 DD일"),
    begin: "0000",
    end: "0000",
    user_id: JSON.parse(localStorage.getItem("user")).userId,
    counselor_id: +id,
    content: "",
  });
  const [date, setDate] = useState();
  const [profile, setProfile] = useState({});

  const { isLoading, data } = useQuery("doctorDetail", () =>
    getConsultingsDetail(id)
  );
  const { mutate, isSuccess } = useMutation(postConsultingReservation);

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (!isLoading) {
      setProfile({ ...data.data.profile });
    }
  }, [isLoading, data]);

  const reserveDateToday = () => {
    setDate(moment(new Date()).format("MM월 DD일"));
    setReservation((data) => ({ ...data, date: "오늘" }));
    setPostReservation({ ...postReservation, day: date });
  };

  const reserveDateTomorrow = () => {
    setDate(moment(new Date()).add(1, "d").format("MM월 DD일"));
    setReservation((data) => ({ ...data, date: "내일" }));
    setPostReservation({ ...postReservation, day: date });
  };

  const reserverTime = (event) => {
    const begin = event.target.innerText;
    const end = event.target.nextSibling?.innerText ?? "";

    setReservation((data) => ({ ...data, time: begin }));
    setPostReservation({ ...postReservation, begin, end });
  };

  const reserveText = (event) => {
    const text = event.target.value;
    setReservation((data) => ({ ...data, text }));
    setPostReservation({ ...postReservation, content: text });
  };

  const requestReservation = () => {
    mutate(JSON.stringify(postReservation));
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
      <Header />
      <Main>
        <Wrapper>
          <PersonInfo>
            {!isLoading ? (
              <>
                <Person src={profile?.thumbnail} />
                <PersonTitle>{profile?.name} 상담사</PersonTitle>
                <PersonText>{profile?.breif}</PersonText>
                <PersonTime>
                  <PersonTimeTitle>상담시간</PersonTimeTitle>
                  <PersonTimeText>
                    {profile?.available?.open} ~ {profile?.available?.close}
                  </PersonTimeText>
                </PersonTime>
                <PersonTime>
                  <PersonTimeTitle>점심시간</PersonTimeTitle>
                  <PersonTimeText>{profile?.available?.lunch}</PersonTimeText>
                </PersonTime>
                <PersonCareer>
                  <PersonCareerTitle>약력</PersonCareerTitle>
                  {profile?.introduce?.map((career) => (
                      <PersonCareerText key={career}>{career}</PersonCareerText>
                    ))}
                </PersonCareer>
              </>
            ) : null}
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
                {time.map((text) => (
                    <ReservationTimeButton
                      key={text}
                      active={reservation}
                      onClick={reserverTime}
                    >
                      {text}
                    </ReservationTimeButton>
                  ))}
              </ReservationTimeContext>
            </ReservationTime>
            <ReservationContent>
              <ReservationButton
                active={reservation}
                onClick={requestReservation}
              >
                예약 신청
              </ReservationButton>
              <ReservationContentTitle>
                <ReservationContentImg src={Chat} />
                상담 내용 입력
              </ReservationContentTitle>
              <ReservationContentInfo>
                상담 내용을 자세히 작성해주세요. ( 필수 )
              </ReservationContentInfo>
              <ReservationContentTextArea
                onChange={reserveText}
                placeholder="예) 아이가 최근에 부쩍 말 수가 적어졌어요. 학교에서 무슨 문제가 있었던 거 같은데 저한테 말은 안해주고 점점 아이와 소통하기가 쉽지 않아요."
               />
            </ReservationContent>
          </ReservationInfo>
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default Reserve;
