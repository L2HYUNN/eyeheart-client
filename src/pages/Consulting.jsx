import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RightArrow from "../assets/right-arrow.svg";
import Hand from "../assets/hand.jpeg";
import Time from "../assets/time.svg";
import { Link } from "react-router-dom";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 144rem;
  padding-top: 3rem;
`;
const Promotion = styled.img`
  width: 140rem;
  height: 41.5rem;
  border-radius: 2rem;
  opacity: 0.8;
  margin-bottom: 2.5rem;
`;
const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140rem;
  font-size: 2.8rem;
  font-weight: 500;
  padding: 5rem;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 2rem; */
  /* background-color: ${({ theme }) => theme.colors.pink}; */
`;
const Title = styled.h1`
  margin-bottom: 5rem;
`;
const Doctors = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  grid-auto-rows: 18rem;
`;
const Doctor = styled.div`
  display: flex;
  align-items: center;
  width: 45rem;
  border-radius: 2rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
const DoctorImg = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 0 2rem;
  border-radius: 5rem;
  background-color: aliceblue;
`;
const DoctorInfo = styled.div`
  margin-right: 12rem;
  font-weight: 400;
`;
const DoctorTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;
const DoctorHome = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  opacity: 0.4;
`;
const DoctorTime = styled.h3`
  display: flex;
  font-size: 1.8rem;
  opacity: 0.4;
`;
const DoctorTimeImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;
const Arrow = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: 0.2;
`;

const dummyDoctor = [
  {
    id: 1,
    name: "고재천 상담사",
    home: "코코상담원",
    time: "00:00 ~ 23:40",
  },
  {
    id: 1,
    name: "고재천 상담사",
    home: "코코상담원",
    time: "00:00 ~ 23:40",
  },
  { id: 1, name: "고재천 상담사", home: "코코상담원", time: "00:00 ~ 23:40" },
  { id: 1, name: "고재천 상담사", home: "코코상담원", time: "00:00 ~ 23:40" },
  { id: 1, name: "고재천 상담사", home: "코코상담원", time: "00:00 ~ 23:40" },
  { id: 1, name: "고재천 상담사", home: "코코상담원", time: "00:00 ~ 23:40" },
  { id: 1, name: "고재천 상담사", home: "코코상담원", time: "00:00 ~ 23:40" },
  { id: 1, name: "고재천 상담사", home: "코코상담원", time: "00:00 ~ 23:40" },
  { id: 1, name: "고재천 상담사", home: "코코상담원", time: "00:00 ~ 23:40" },
];

function Consulting() {
  return (
    <>
      <Header user={true} />
      <Main>
        <Promotion src={Hand} />
        <Infos>
          <Title>아이마음 비대면상담</Title>
          <Doctors>
            {dummyDoctor.map((doctor) => {
              return (
                <Doctor>
                  <Link to={`/consulting/${doctor.id}`}>
                    <DoctorImg />
                  </Link>
                  <Link to={`/consulting/${doctor.id}`}>
                    <DoctorInfo>
                      <DoctorTitle>{doctor.name}</DoctorTitle>
                      <DoctorHome>{doctor.home}</DoctorHome>
                      <DoctorTime>
                        <DoctorTimeImg src={Time} />
                        {doctor.time}
                      </DoctorTime>
                    </DoctorInfo>
                  </Link>
                  <Link to={`/consulting/${doctor.id}`}>
                    <Arrow src={RightArrow} />
                  </Link>
                </Doctor>
              );
            })}
          </Doctors>
        </Infos>
      </Main>
      <Footer />
    </>
  );
}

export default Consulting;
