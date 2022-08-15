import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Child from "../assets/child.jpeg";
import Time from "../assets/time.svg";
import Calendar from "../assets/calendar.svg";
// import Text from "../assets/text.svg";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
  padding-top: 3rem;
`;
const Wrapper = styled.div`
  width: 140rem;
  height: 120rem;
  border: 1px solid black;
`;
const Reservation = styled.div`
  display: flex;
  align-items: center;
  width: 70rem;
  height: 15rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 2rem;
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
// const ReservationButton = styled.button`
//   width: 10rem;
//   height: 5rem;
// `;

const dummyData = [
  {
    id: 1,
    name: "민영맘",
    date: "09월 12일",
    time: "오후 10시 ~ 11시",
  },
];

function CheckReservation() {
  return (
    <>
      <Header user={true} />
      <Main>
        <Wrapper>
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
              </Reservation>
            );
          })}
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default CheckReservation;
