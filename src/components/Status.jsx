import moment from 'moment';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { getAnalysisWord } from '../api/api';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72rem;
  height: 25rem;
  grid-area: status;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 67rem;
  height: 20rem;
  background-color: #ffe2d8;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    flex-direction: column;
    width: 90%;
    height: 12rem;
  }
`;
const Text = styled.span`
  color: black;
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;

const date = moment(new Date()).format('YYYYMMDD');

function Status() {
  const { isLoading, data } = useQuery('analysisWord', () => getAnalysisWord(date));
  return (
    <Container>
      <Contents>
        {!isLoading ? (
          // eslint-disable-next-line react/no-array-index-key
          data?.data.message.map((msg, index) => <Text key={index}>{msg}</Text>)
        ) : (
          <Text>마음 정보를 확인할 수 없습니다.</Text>
        )}
      </Contents>
    </Container>
  );
}

export default Status;
