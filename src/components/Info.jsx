import styled from "styled-components";
import child from "../assets/child.jpeg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72rem;
  height: 30rem;
  grid-area: info;
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
`;
const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
`;
const Img = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin-bottom: 3rem;
`;
const Name = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`;
const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2.5rem;
`;
const Chart = styled.div``;
const ChartName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.main};
  font-weight: 500;
  margin-right: 1rem;
`;
const ChartContents = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const ChartGraph = styled.div`
  width: 30rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.pink};
  /* box-shadow: ${({ theme }) => theme.colors.pink} 0px 6px 24px 0px,
    ${({ theme }) => theme.colors.pink} 0px 0px 0px 1px; */
  margin-right: 1rem;
`;
const ChartNumber = styled.div``;
const Heart = styled.div``;
const HeartName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.main};
  font-weight: 500;
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
`;
const Interest = styled.div``;
const InterestName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.main};
  font-weight: 500;
`;
const InterestContents = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.main};
  margin-top: 1rem;
`;
const InterestItem = styled.div`
  font-weight: 600;
`;

function Info() {
  const DumuyHeart = [
    {
      name: "기쁨",
      color: "#ffe1d8",
    },
    {
      name: "행복",
      color: "#fff5d8",
    },
    {
      name: "고민",
      color: "#d8e2ff",
    },
  ];
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
              <ChartGraph></ChartGraph>
              <ChartNumber>95</ChartNumber>
            </ChartContents>
          </Chart>
          <Heart>
            <HeartName>마음</HeartName>
            <HeartContents>
              {DumuyHeart.map((heart) => {
                return (
                  <HeartInfo key={heart.name} color={heart.color}>
                    {heart.name}
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
