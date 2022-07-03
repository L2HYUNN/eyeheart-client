import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72rem;
  height: 25rem;
  grid-area: status;
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 67rem;
  height: 20rem;
  background-color: #ffe2d8;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 2rem;
`;
const Text = styled.span`
  color: black;
  font-size: 2.4rem;
  font-weight: 500;
`;

function Status() {
  return (
    <Container>
      <Contents>
        <Text>현재 민영님의 마음은 기쁨이 가득한 상태입니다. </Text>
      </Contents>
    </Container>
  );
}

export default Status;
