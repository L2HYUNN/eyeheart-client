import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Office from "../assets/office.jpeg";
import PersonImg from "../assets/person.jpeg";
import { Marker, NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";
import { Link, useParams } from "react-router-dom";

const NAVER_API_KEY = process.env.REACT_APP_NAVER_CLIENT_ID;

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
const ClinicInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 95rem;
  border-radius: 2rem;
`;
const ClinicIntro = styled.div`
  display: flex;
  width: 95rem;
  height: 41.5rem;
`;
const ClinicTexts = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 45rem;
  height: 45rem;
  margin-right: 5rem;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 2rem;
`;
const ClinicTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;
const ClinicText = styled.span`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  opacity: 0.6;
`;
const ClinicCenterTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 2.5rem;
  padding-top: 2.5rem;
  margin-bottom: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
const ClinicCenterText = styled.span`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  opacity: 0.6;
`;
const ClinicCenterButton = styled.button`
  display: flex;
  align-items: center;
  right: 2rem;
  bottom: 2rem;
  position: absolute;
  width: 20rem;
  height: 5rem;
  width: fit-content;
  padding: 2rem 5rem;
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
`;
const Promotion = styled.img`
  width: 95rem;
  height: 41.5rem;
  border-radius: 2rem;
  opacity: 0.8;
  margin-bottom: 5rem;
`;
const ClinicMap = styled.div`
  width: 45rem;
  height: 45rem;
  border-radius: 2rem;
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

function Doctor() {
  const { id } = useParams();
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
          <ClinicInfo>
            <Promotion src={Office} />
            <ClinicIntro>
              <ClinicTexts>
                <ClinicTitle>상담 센터 소개</ClinicTitle>
                <ClinicText>국내 최초 기업 상담실과 연결된 상담센터</ClinicText>
                <ClinicText>전국 상담실 네트워크 형성</ClinicText>
                <ClinicText>최고의 전문성을 가진 센터</ClinicText>
                <ClinicText>다양한 프로그램을 운영하는 종합상담센터</ClinicText>
                <ClinicText>
                  개인과 가족 그리고 사회가 행복하고 밝아지도록 노력하는 센터
                </ClinicText>
                <ClinicCenterTitle>상담 센터 위치</ClinicCenterTitle>
                <ClinicCenterText>
                  서울특별시 강남구 역삼동 717 한국은행 빌딩 7층 103호
                </ClinicCenterText>
                <ClinicCenterText>테헤란로 202 (우) 06220</ClinicCenterText>
                <ClinicCenterButton>
                  <Link to={`/consulting/${id}/reserve`}>상담 예약하기</Link>
                </ClinicCenterButton>
              </ClinicTexts>
              <ClinicMap>
                <RenderAfterNavermapsLoaded clientId={NAVER_API_KEY}>
                  <NaverMap
                    mapDivId="map"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    defaultCenter={{ lat: 37.49988, lng: 127.03856 }}
                    defaultZoom={16}
                    zoomControl={true}
                  >
                    <Marker position={{ lat: 37.49988, lng: 127.03856 }} />
                  </NaverMap>
                </RenderAfterNavermapsLoaded>
              </ClinicMap>
            </ClinicIntro>
          </ClinicInfo>
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default Doctor;
