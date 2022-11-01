import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72rem;
  height: 30rem;
  grid-area: event;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 67rem;
  height: 25rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 2rem;
`;

function Event() {
  return (
    <Container>
      <Contents />
    </Container>
  );
}

export default Event;
