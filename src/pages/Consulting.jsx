import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getConsultings } from '../api/api';
import Hand from '../assets/hand.jpeg';
import RightArrow from '../assets/right-arrow.svg';
import Time from '../assets/time.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 144rem;
  padding-top: 3rem;
  @media ${({ theme }) => theme.size.small} {
    min-width: fit-content;
    max-width: 100vw;
    width: 100%;
    padding-left: 0rem;
    padding-top: 3rem;
  }
`;
const Promotion = styled.img`
  width: 140rem;
  height: 41.5rem;
  border-radius: 2rem;
  opacity: 0.8;
  margin-bottom: 2.5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 90%;
    height: 80%;
    max-width: 48rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    padding: 0 2rem;
  }
`;
const Title = styled.h1`
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 2rem;
  }
`;
const Doctors = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  grid-auto-rows: 18rem;
  @media ${({ theme }) => theme.size.small} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Doctor = styled.div`
  display: flex;
  align-items: center;
  width: 45rem;
  border-radius: 2rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
  }
`;
const DoctorImg = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 0 2rem;
  border-radius: 5rem;
  background-color: aliceblue;
  @media ${({ theme }) => theme.size.small} {
    width: 7rem;
    height: 7rem;
  }
`;
const DoctorInfo = styled.div`
  width: 21rem;
  margin-right: 6rem;
  font-weight: 400;
  @media ${({ theme }) => theme.size.small} {
    width: 40vw;
    margin: 2rem;
    margin-right: 3rem;
  }
`;
const DoctorTitle = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const DoctorHome = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  opacity: 0.4;
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    margin-right: 1rem;
    font-size: 1.4rem;
  }
`;
const DoctorTime = styled.h3`
  display: flex;
  font-size: 1.8rem;
  opacity: 0.4;
  @media ${({ theme }) => theme.size.small} {
    width: max-content;
    font-size: 1.4rem;
  }
`;
const DoctorTimeImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Arrow = styled.img`
  width: 2rem;
  height: 2rem;
  opacity: 0.2;
  @media ${({ theme }) => theme.size.small} {
    margin-right: 1rem;
  }
`;

function Consulting() {
  const { isLoading, data } = useQuery('consultings', getConsultings);

  return (
    <>
      <Header />
      <Main>
        <Promotion src={Hand} />
        <Infos>
          <Title>아이마음 비대면상담</Title>
          <Doctors>
            {!isLoading
              ? data.data.counselors.map((doctor) => (
                  <Doctor key={doctor.profile.id}>
                    <Link to={`/consulting/${doctor.profile.id}`}>
                      <DoctorImg src={doctor.profile.thumbnail} />
                    </Link>
                    <Link to={`/consulting/${doctor.profile.id}`}>
                      <DoctorInfo>
                        <DoctorTitle>{doctor.profile.name} 상담사</DoctorTitle>
                        <DoctorHome>{doctor.profile.breif}</DoctorHome>
                        <DoctorTime>
                          <DoctorTimeImg src={Time} />
                          {`${doctor.times.open} ~ ${doctor.times.close}`}
                        </DoctorTime>
                      </DoctorInfo>
                    </Link>
                    <Link to={`/consulting/${doctor.profile.id}`}>
                      <Arrow src={RightArrow} />
                    </Link>
                  </Doctor>
                ))
              : null}
          </Doctors>
        </Infos>
      </Main>
      <Footer />
    </>
  );
}

export default Consulting;
