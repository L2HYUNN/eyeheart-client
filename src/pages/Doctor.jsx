/* eslint-disable no-unsafe-optional-chaining */
import { useEffect,useState } from "react";
import { Marker, NaverMap, RenderAfterNavermapsLoaded } from "react-naver-maps";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { getConsultingsDetail } from "../api/api";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NAVER_API_KEY = process.env.REACT_APP_NAVER_CLIENT_ID;

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
const ClinicInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 95rem;
  border-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    width: 90vw;
  }
`;
const ClinicIntro = styled.div`
  display: flex;
  width: 95rem;
  height: 41.5rem;
  @media ${({ theme }) => theme.size.small} {
    display: block;
    width: 100vw;
    height: 100%;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 90vw;
    margin-bottom: 3rem;
  }
`;
const ClinicTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ClinicText = styled.span`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  opacity: 0.6;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ClinicCenterTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  margin-top: 2.5rem;
  padding-top: 2.5rem;
  margin-bottom: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ClinicCenterText = styled.span`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  line-height: 2rem;
  opacity: 0.6;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.4rem;
    padding: 2rem 4rem;
    height: 4rem;
    right: 1rem;
    bottom: 1rem;
  }
`;
const Promotion = styled.img`
  width: 95rem;
  height: 41.5rem;
  border-radius: 2rem;
  opacity: 0.8;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    max-width: 100vw;
    width: 90vw;
    height: 25rem;
    margin-bottom: 3rem;
  }
`;
const ClinicMap = styled.div`
  width: 45rem;
  height: 45rem;
  border-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    width: 90vw;
    height: 30rem;
    text-align: center;
  }
`;

function Doctor() {
  const { id } = useParams();
  const [clinic, setClinic] = useState({});
  const [profile, setProfile] = useState({});
  const { isLoading, data } = useQuery("consultingsDetail", () =>
    getConsultingsDetail(id)
  );

  useEffect(() => {
    if (!isLoading) {
      setClinic({ ...data.data.main });
      setProfile({ ...data.data.profile });
    }
  }, [isLoading, data]);

  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          {!isLoading ? (
            <>
              <PersonInfo>
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
              </PersonInfo>
              <ClinicInfo>
                <Promotion src={clinic?.image} />
                <ClinicIntro>
                  <ClinicTexts>
                    <ClinicTitle>상담 센터 소개</ClinicTitle>
                    {clinic?.desc?.map((text) => <ClinicText key={text}>{text}</ClinicText>)}
                    <ClinicCenterTitle>상담 센터 위치</ClinicCenterTitle>
                    <ClinicCenterText>{clinic?.address}</ClinicCenterText>
                    <ClinicCenterText>{clinic?.post_address}</ClinicCenterText>

                    <Link to={`/consulting/${id}/reserve`}>
                      <ClinicCenterButton>상담 예약하기</ClinicCenterButton>
                    </Link>
                  </ClinicTexts>
                  <ClinicMap>
                    <RenderAfterNavermapsLoaded clientId={NAVER_API_KEY}>
                      <NaverMap
                        mapDivId="map"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        defaultCenter={{
                          lat: +clinic?.location?.lat,
                          lng: +clinic?.location?.long,
                        }}
                        defaultZoom={16}
                        zoomControl
                      >
                        <Marker
                          position={{
                            lat: +clinic?.location?.lat,
                            lng: +clinic?.location?.long,
                          }}
                        />
                      </NaverMap>
                    </RenderAfterNavermapsLoaded>
                  </ClinicMap>
                </ClinicIntro>
              </ClinicInfo>
            </>
          ) : null}
        </Wrapper>
      </Main>
      <Footer />
    </>
  );
}

export default Doctor;
