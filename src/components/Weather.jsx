import ApexChart from "react-apexcharts";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72rem;
  height: 50rem;
  grid-area: weather;
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67rem;
  height: 45rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 2rem;
`;
const Graph = styled.div`
  width: 67rem;
`;

function Weather() {
  return (
    <Container>
      <Contents>
        <Graph>
          <ApexChart
            type="bar"
            series={[
              {
                name: "마음지수",
                data: [45, 67, 84, 66, 87, 76, 95],
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
                categories: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
                labels: {
                  style: {
                    fontSize: "1.4rem",
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
