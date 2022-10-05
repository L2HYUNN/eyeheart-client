import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getAnalysisHeart } from "../api/api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72rem;
  height: 51rem;
  grid-area: weather;
  @media ${({ theme }) => theme.size.small} {
    min-width: max-content;
    width: 100vw;
    padding-left: 0rem;
    padding-top: 3rem;
    height: 100%;
  }
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67rem;
  height: 45rem;
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
const Graph = styled.div`
  width: 67rem;
  @media ${({ theme }) => theme.size.small} {
    width: 90%;
    /* font-size: 1.6rem; */
  }
`;

const day = moment().format("YYYYMMDD");

function Weather() {
  const [date, setDate] = useState([]);
  const [score, setScore] = useState([]);
  const { isLoading, data } = useQuery("analysisHeart", () =>
    getAnalysisHeart(day)
  );

  useEffect(() => {
    if (!isLoading) {
      setDate(
        data?.data?.statistics
          .map(({ date: newDate }) => {
            const day = newDate.slice(4).split("");
            day.splice(2, 0, "/");
            return day.join("");
          })
          .reverse()
      );
      setScore(
        data?.data?.statistics
          .map(
            ({
              chart: {
                emotion: { emotion_score },
              },
            }) => emotion_score
          )
          .reverse()
      );
    }
  }, [isLoading, data]);

  return (
    <Container>
      <Contents>
        <Graph>
          <ApexChart
            type="bar"
            series={[
              {
                name: "마음지수",
                data: score,
              },
            ]}
            options={{
              chart: {
                height: 100,
                width: 100,
                toolbar: {
                  show: false,
                },
                background: "white",
              },
              colors: "#FFC6AE",
              xaxis: {
                categories: date,
                labels: {
                  style: {
                    fontSize: "1.6rem",
                    fontWeight: 600,
                  },
                },
                axisTicks: {
                  show: false,
                },
                axisBorder: {
                  show: false,
                },
                position: "top",
              },
              yaxis: {
                max: 100,
                show: false,
              },
              grid: {
                show: false,
              },
              dataLabels: {
                enabled: false,
              },
            }}
          />
        </Graph>
      </Contents>
    </Container>
  );
}

export default Weather;
