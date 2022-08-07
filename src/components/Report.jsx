import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140rem;
  height: 70rem;
  grid-area: report;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 2rem;
`;

function Report() {
  return (
    <Container>
      <Contents></Contents>
    </Container>
  );
}

export default Report;
