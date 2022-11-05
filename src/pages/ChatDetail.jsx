/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
import 'react-calendar/dist/Calendar.css';
import 'moment/locale/ko'

import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import ApexChart from 'react-apexcharts';
import Calendar from 'react-calendar';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import { getChat, getChatBadWord, getChatScenario, getChatTopic } from '../api/api';
import { socket } from '../App';
import child from '../assets/child.jpeg';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
  padding-top: 3rem;
  @media ${({ theme }) => theme.size.small} {
    flex-direction: column-reverse;
    align-items: center;
    min-width: max-content;
    width: 100%;
    padding-left: 0rem;
    padding-top: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: 120rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 2rem;
  border-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    width: 90%;
    height: 100%;
    padding: 5rem 0;
  }
`;
const CalendarContents = styled.div`
  width: 40rem;
  height: 93.5;
  margin-top: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 90%;
  }
`;
const CalendarScenario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const CalendarScenarioTitle = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 2rem;
  }
`;
const CalendarScenarioTexts = styled.ul`
  width: 100%;
  text-align: center;
`;
const CalendarScenarioText = styled.li`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const CalendarGraph = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

const CalendarBadWord = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
`;
const CalendarBadWordTitle = styled.p`
  font-size: 2.6rem;
  font-weight: 500;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 2rem;
  }
`;
const CalendarBadWordTexts = styled.ul`
  width: 100%;
  text-align: center;
`;
const CalendarBadWordText = styled.li`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100rem;
  height: 120rem;
  @media ${({ theme }) => theme.size.small} {
    position: relative;
    align-items: flex-start;
    min-width: max-content;
    min-height: max-content;
    width: 100%;
    height: 100%;
    margin-bottom: 3rem;
  }
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90rem;
  height: 120rem;
  background-color: ${({ theme }) => theme.colors.pink};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  /* border-radius: 2rem; */
  padding: 2rem 4rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    max-width: 100vw;
    max-height: fit-content;
    width: 100%;
    height: 100%;
    padding: 1.2rem;
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
  }
`;
const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 4rem;
  border-radius: 2rem;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    width: fit-content;
    margin-bottom: 1rem;
  }
`;
const Dates = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: white;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const ChatBox = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.size.small} {
    max-height: fit-content;
  }
`;
const Chatlog = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  overflow-y: scroll;
  height: 95rem;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media ${({ theme }) => theme.size.small} {
    /* max-height: fit-content; */
    height: 70vh;
  }
`;
const ChildContents = styled.li`
  display: flex;
  height: 12rem;
  margin-bottom: 5rem;
`;
const ChildImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
  @media ${({ theme }) => theme.size.small} {
    width: 4rem;
    height: 4rem;
    min-width: 4rem;
    min-height: 4rem;
  }
`;
const ChildInfo = styled.div``;
const ChildName = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
  }
`;
const ChildChats = styled.div`
  display: flex;
  align-items: flex-end;
`;
const ChildChat = styled.div`
  font-size: 1.8rem;
  background-color: white;
  padding: 1.2rem;
  border-radius: 1rem;
  max-width: 50rem;
  line-height: 2.2rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
    line-height: 2rem;
    max-width: 80%;
    padding: 1rem;
  }
`;
const ChildChatTime = styled.div`
  padding-left: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 0.8rem;
`;
const UserContents = styled.li`
  display: flex;
  justify-content: right;
  height: 12rem;
  margin-bottom: 5rem;
`;
const UserChats = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const UserChat = styled.div`
  font-size: 1.8rem;
  background-color: #a5e4fe;
  padding: 1.2rem;
  border-radius: 1rem;
  max-width: 50rem;
  line-height: 2.2rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
    line-height: 2rem;
    max-width: 80%;
  }
`;
const UserChatTime = styled.div`
  padding-right: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
`;
const ChatForm = styled.form`
  width: 90rem;
  height: 10rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    max-width: 100vw;
    width: 100%;
    height: 10rem;
  }
`;
const ChatInput = styled.input`
  width: 70rem;
  height: 10rem;
  font-size: 2rem;
  border: none;
  outline: none;
  padding: 2rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
    min-width: max-content;
    width: 80%;
    height: 10rem;
  }
`;
const ChatButton = styled.button`
  width: 17rem;
  height: 8rem;
  background-color: #a5e4fe;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border: none;
  font-size: 2rem;
  font-weight: 600;
  border-radius: 2rem;
  @media ${({ theme }) => theme.size.small} {
    min-width: max-content;
    width: 20%;
    height: 8rem;
  }
`;

function ChatDetail() {
  const [date, setDate] = useState(new Date());
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState('');
  const [scenario, setScenario] = useState([]);
  const [badWord, setBadWord] = useState({ 슬픔: 0 });
  const [badSentence, setBadSentence] = useState({});
  const [topic, setTopic] = useState([]);
  const scrollRef = useRef(null);

  const chatList = useQuery('chatList', () => getChat(moment(date).format('YYYYMMDD')));
  const chatScenario = useQuery('chatScenario', () => getChatScenario(moment(date).format('YYYYMMDD')));
  const chatBadWord = useQuery('chatBadWord', () => getChatBadWord(moment(date).format('YYYYMMDD')));
  const chatTopic = useQuery('chatTopic', () => getChatTopic(moment(date).format('YYYYMMDD')));

  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  useEffect(() => {
    chatList.refetch();
    chatScenario.refetch();
    chatBadWord.refetch();
    chatTopic.refetch();
  }, [date]);

  useEffect(() => {
    if (!chatList.isLoading) {
      setChat(chatList.data.data.chats);
    }
  }, [chatList.data, chatList.isLoading]);

  useEffect(() => {
    if (!chatScenario.isLoading) setScenario(chatScenario.data.data.message);
  }, [chatScenario.data, chatScenario.isLoading, date]);

  useEffect(() => {
    if (!chatBadWord.isLoading) {
      setBadWord(chatBadWord.data.data.statistics[0]?.chart.badness.bad_words);
      setBadSentence(chatBadWord.data.data.statistics[0]?.chart.badness.bad_sentences);
    }
  }, [chatBadWord.data, chatBadWord.isLoading, date]);

  useEffect(() => {
    if (!chatTopic.isLoading) {
      setTopic(Object.entries(chatTopic.data.data.summary.situation.topic).slice(0, 5));
    }
  }, [chatTopic.data, chatTopic.isLoading, date]);

  const sendMessage = (e) => {
    e.preventDefault();

    const now = moment().locale('ko');
    const day = now.format('YYYYMMDD');
    const time = now.format('LT');

    socket.emit('SEND_MESSAGE', { type: 'SUPERVISOR', message });

    setChat((prev) => [...prev, { direction: 'BOT', utterance: message, day, time }]);
    setMessage('');
  };

  useEffect(() => {
    socket.on('RECEIVE_MESSAGE', ({ response: message, day, time }) => {
      setChat((prev) => [...prev, { direction: 'USER', utterance: message, day, time }]);
    });
  }, [setChat]);

  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <Calendar
            onChange={(value) => {
              setDate(value);
            }}
            value={date}
          />
          <CalendarContents>
            <CalendarScenario>
              <CalendarScenarioTitle>대화중 아이와 나눈 고민</CalendarScenarioTitle>
              <CalendarScenarioTexts>
                {scenario.map((info, index) => (
                  <CalendarScenarioText key={index}>
                    {info?.name}에 대한 고민이 {info?.number}건
                  </CalendarScenarioText>
                ))}
              </CalendarScenarioTexts>
            </CalendarScenario>
            <CalendarGraph>
              <ApexChart
                type="bar"
                series={[
                  {
                    name: '갯수',
                    data: topic.map((info) => info[1].total),
                  },
                ]}
                options={{
                  chart: {
                    height: 100,
                    width: 100,
                    toolbar: {
                      show: false,
                    },
                    background: 'white',
                  },
                  colors: '#FFC6AE',
                  xaxis: {
                    categories: topic.map((info) => info[0]),
                    labels: {
                      style: {
                        fontSize: '1.4rem',
                        fontWeight: 600,
                      },
                    },
                    axisTicks: {
                      show: false,
                    },
                    axisBorder: {
                      show: false,
                    },
                    position: 'top',
                  },
                  yaxis: {
                    max: 10,
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
            </CalendarGraph>
            <CalendarBadWord>
              <CalendarBadWordTitle>아이가 사용한 위험 단어 리스트</CalendarBadWordTitle>
              <CalendarBadWordTexts>
                {badWord
                  ? Object.keys(badWord).map((word, index) => (
                      <CalendarBadWordText key={index}>{word}</CalendarBadWordText>
                    ))
                  : null}
              </CalendarBadWordTexts>
            </CalendarBadWord>
            <CalendarBadWord>
              <CalendarBadWordTitle>아이가 사용한 위험 문장 리스트</CalendarBadWordTitle>
              <CalendarBadWordTexts>
                {badSentence?.sentences?.map((word, index) => (
                  <CalendarBadWordText key={index}>{word}</CalendarBadWordText>
                ))}
              </CalendarBadWordTexts>
            </CalendarBadWord>
          </CalendarContents>
        </Wrapper>
        <Container>
          <Contents>
            <DateBox>
              <Dates>{moment(date).format('YYYY년 MM월 DD일')}</Dates>
            </DateBox>
            <ChatBox>
              <Chatlog ref={scrollRef}>
                {chat?.map((info, index) => {
                  if (info.direction === 'USER') {
                    return (
                      <ChildContents key={index}>
                        <ChildImg src={child} />
                        <ChildInfo>
                          <ChildName>{info.name || '민영이'}</ChildName>
                          <ChildChats>
                            <ChildChat>{info.utterance}</ChildChat>
                            <ChildChatTime>{info.time}</ChildChatTime>
                          </ChildChats>
                        </ChildInfo>
                      </ChildContents>
                    );
                  }
                  return (
                    <UserContents key={index}>
                      <UserChats>
                        <UserChatTime>{info.time}</UserChatTime>
                        <UserChat>{info.utterance}</UserChat>
                      </UserChats>
                    </UserContents>
                  );
                })}
              </Chatlog>
            </ChatBox>
          </Contents>
          <ChatForm>
            <ChatInput onChange={(e) => setMessage(e.target.value)} type="text" value={message} />
            <ChatButton onClick={sendMessage}>전송</ChatButton>
          </ChatForm>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default ChatDetail;
