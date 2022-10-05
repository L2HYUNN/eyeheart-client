import moment from "moment";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAnalysisEmotion, getAnalysisHeart } from "../api/api";
import child from "../assets/child.jpeg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72rem;
  height: 30rem;
  grid-area: info;
  @media ${({ theme }) => theme.size.small} {
    align-items: flex-start;
    min-width: max-content;
    width: 100vw;
    padding-left: 0rem;
    /* padding-top: 2rem; */
    height: 100%;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 67rem;
  height: 25rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    flex-direction: column;
    width: 90%;
    height: 100%;
  }
`;
const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  @media ${({ theme }) => theme.size.small} {
    padding: 2rem;
  }
`;
const Img = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    width: 10rem;
    height: 10rem;
  }
`;
const Name = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;
const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2.5rem;
  @media ${({ theme }) => theme.size.small} {
    padding-top: 1rem;
  }
`;
const Chart = styled.div`
  @media ${({ theme }) => theme.size.small} {
    margin-bottom: 1.5rem;
  }
`;
const ChartName = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  margin-right: 1rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ChartContents = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const ChartGraph = styled.div`
  width: ${(props) => `${props.number}%`};
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.pink};
  /* box-shadow: ${({ theme }) => theme.colors.pink} 0px 6px 24px 0px,
    ${({ theme }) => theme.colors.pink} 0px 0px 0px 1px; */
  margin-right: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: ${(props) => `${props.number}%`};
  }
`;
const ChartNumber = styled.div``;
const Heart = styled.div`
  @media ${({ theme }) => theme.size.small} {
    margin-bottom: 1.5rem;
  }
`;
const HeartName = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const HeartContents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
const HeartInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 4rem;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  font-size: 1.8rem;
  font-weight: 400;
  font-family: "Gamja Flower", cursive;
  /* box-shadow: ${(props) => props.color} 0px 6px 24px 0px,
    ${(props) => props.color} 0px 0px 0px 1px; */
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.4rem;
  }
`;
const Interest = styled.div`
  @media ${({ theme }) => theme.size.small} {
    margin-bottom: 1.5rem;
  }
`;
const InterestName = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const InterestContents = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.main};
  margin-top: 1rem;
`;
const InterestItem = styled.div`
  font-weight: 600;
`;

const date = moment().format("YYYYMMDD");

function Info() {
  const heart = useQuery("analysisHeart", () => getAnalysisHeart(date));
  const emotion = useQuery("analysisEmotion", () => getAnalysisEmotion(date));

  return (
    <Container>
      <Contents>
        <ContentInfo>
          <Img src={child} />
          <Name>최민영</Name>
        </ContentInfo>
        <ContentText>
          <Chart>
            <ChartName>마음지수</ChartName>
            <ChartContents>
              <ChartGraph
                number={heart?.data?.data?.summary?.emotion?.emotion_score}
              ></ChartGraph>
              <ChartNumber>
                {Math.floor(heart?.data?.data?.summary?.emotion?.emotion_score)}
              </ChartNumber>
            </ChartContents>
          </Chart>
          <Heart>
            <HeartName>마음</HeartName>
            <HeartContents>
              {emotion?.data?.data?.message.map((heart) => {
                return (
                  <HeartInfo key={heart?.name} color={heart?.color}>
                    {heart?.name}
                  </HeartInfo>
                );
              })}
            </HeartContents>
          </Heart>
          <Interest>
            <InterestName>관심사</InterestName>
            <InterestContents>
              최근 아이가 가장 관심을 가지는 것은
              <InterestItem>&nbsp;장난감&nbsp;</InterestItem>
              입니다.
            </InterestContents>
          </Interest>
        </ContentText>
      </Contents>
    </Container>
  );
}

export default Info;
