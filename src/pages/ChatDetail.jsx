import styled from "styled-components";
import child from "../assets/child.jpeg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import moment from "moment";
import { socket } from "../App";
import { useEffect } from "react";
import { useRef } from "react";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
  padding-top: 3rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  height: 120rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 2rem;
  border-radius: 2rem;
`;
const CalendarContents = styled.div`
  width: 40rem;
  height: 93.5;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100rem;
  height: 120rem;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90rem;
  height: 100rem;
  background-color: ${({ theme }) => theme.colors.pink};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  /* border-radius: 2rem; */
  padding: 2rem 4rem;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
`;
const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 4rem;
  /* background-color: ${({ theme }) => theme.colors.darkPink}; */
  border-radius: 2rem;
  margin-bottom: 3rem;
`;
const Dates = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`;
const ChatBox = styled.div`
  width: 100%;
  height: 100%;
`;
const Chatlog = styled.ul`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  overflow-y: scroll;
  height: 90rem;
  /* &::-webkit-scrollbar {
    display: none;
  } */
  -ms-overflow-style: none;
  scrollbar-width: none;
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
`;
const ChildInfo = styled.div``;
const ChildName = styled.div`
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;
const ChildChats = styled.div`
  display: flex;
  align-items: center;
`;
const ChildChat = styled.div`
  font-size: 1.8rem;
  background-color: white;
  padding: 1.2rem;
  border-radius: 1rem;
  max-width: 50rem;
  line-height: 2.2rem;
`;
const ChildChatTime = styled.div`
  padding-left: 1rem;
  padding-top: 1.5rem;
`;
const UserContents = styled.li`
  display: flex;
  justify-content: right;
  height: 12rem;
  margin-bottom: 5rem;
`;
const UserChats = styled.div`
  display: flex;
  align-items: center;
`;
const UserChat = styled.div`
  font-size: 1.8rem;
  background-color: #a5e4fe;
  padding: 1.2rem;
  border-radius: 1rem;
  max-width: 50rem;
  line-height: 2.2rem;
`;
const UserChatTime = styled.div`
  padding-right: 1rem;
  padding-top: 1.5rem;
`;
const ChatForm = styled.form`
  width: 90rem;
  height: 20rem;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
const ChatInput = styled.input`
  width: 70rem;
  height: 20rem;
  font-size: 2rem;
  border: none;
  outline: none;
  padding: 2rem;
`;
const ChatButton = styled.button`
  width: 17rem;
  height: 15rem;
  background-color: #a5e4fe;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border: none;
  font-size: 2rem;
  font-weight: 600;
  border-radius: 2rem;
`;

const DummyChat = [
  {
    id: 1,
    name: "민영이",
    chat: "도담아",
    time: "오후 4:48",
    role: "child",
  },
  {
    id: 2,
    chat: "네?",
    time: "오후 4:48",
    role: "user",
  },
  {
    id: 3,
    name: "민영이",
    chat: "오늘 학교에서 재밌는 일이 있었는데 한 번 들어볼래?",
    time: "오후 4:48",
    role: "child",
  },
  {
    id: 4,
    chat: "네, 무슨 일인지 정말 궁금해요!",
    time: "오후 4:48",
    role: "user",
  },
  {
    id: 5,
    name: "민영이",
    chat: "그럼 한 번 들어봐! 오늘 내가 색종이를 하나 가져왔는데 친구들이 재밌게 놀다가 잃어버렸다는 거야. 그런데 알고보니까 그 색종이를 누가 내 가방에 넣어놨던 거 였어!!",
    time: "오후 4:49",
    role: "child",
  },
  {
    id: 6,
    chat: "그런 일이 있었군요. 모두가 웃을 정도로 재밌는 일이었겠네요.",
    time: "오후 4:49",
    role: "user",
  },
  {
    id: 7,
    name: "민영이",
    chat: "그렇지, 반 내에 모두가 한참동안 웃었어. 우리가 그 색종이 찾으려고 엄청 고생했거든!",
    time: "오후 4:49",
    role: "child",
  },
  {
    id: 8,
    chat: "모두가 웃을정도였으면 정말로 재밌었던 일이었겠어요! ",
    time: "오후 4:50",
    role: "user",
  },
  {
    id: 9,
    name: "민영이",
    chat: "도담아",
    time: "오후 5:12",
    role: "child",
  },
  {
    id: 10,
    chat: "네?",
    time: "오후 5:12",
    role: "user",
  },
  {
    id: 11,
    name: "민영이",
    chat: "내 친구 지수랑 사이가 멀어질까봐 걱정 돼.",
    time: "오후 5:12",
    role: "child",
  },
  {
    id: 12,
    chat: "무슨 일이 있었는지 자세히 알려줄 수 있나요?",
    time: "오후 5:13",
    role: "user",
  },
  {
    id: 13,
    name: "민영이",
    chat: "체육시간 때 지수랑 짝궁을 하기로 했는데 현수가 같이 하자고 졸라대서 어쩔 수 없이 현수랑 하게 되었거든, 그래서 지수가 많이 서운해 한 거 같아.",
    time: "오후 5:13",
    role: "child",
  },
  {
    id: 14,
    chat: "그런 일이 있었군요. 풍부한 상상력은 때로는 많은 걱정을 낳기도 한대요. 내일 친구랑 직접 얘기해보는 건 어떨까요? 분명 그 친구도 이해해줄 거에요.",
    time: "오후 5:13",
    role: "user",
  },
  {
    id: 15,
    name: "민영이",
    chat: "고마워. 한 번 지수한테 얘기 해볼게.",
    time: "오후 5:13",
    role: "child",
  },
  {
    id: 16,
    chat: "그래요. 저도 응원할게요!",
    time: "오후 5:14",
    role: "user",
  },
];

function ChatDetail() {
  const [date, setDate] = useState(new Date());
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    console.log(scrollRef.current);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const now = moment();
    const day = now.format("YYYYMMDD");
    const time = now.format("HHmmss");

    socket.emit("SEND_MESSAGE", { type: "SUPERVISOR", message });

    setChat((prev) => [...prev, { role: "doll", message, day, time }]);
    setMessage("");
  };

  useEffect(() => {
    socket.on("RECEIVE_MESSAGE", ({ response: message, day, time }) => {
      setChat((prev) => [...prev, { role: "child", message, day, time }]);
    });
  }, [setChat]);

  useEffect(() => {
    console.log(chat);
    scrollToBottom();
  }, [chat]);

  return (
    <>
      <Header />
      <Main>
        <Wrapper>
          <Calendar onChange={setDate} value={date} />
          <CalendarContents></CalendarContents>
        </Wrapper>
        <Container>
          <Contents>
            <DateBox>
              <Dates>{moment(date).format("YYYY년 MM월 DD일")}</Dates>
            </DateBox>
            <ChatBox>
              <Chatlog ref={scrollRef}>
                {DummyChat.map((user) => {
                  if (user.role === "child") {
                    return (
                      <ChildContents key={user.id}>
                        <ChildImg src={child}></ChildImg>
                        <ChildInfo>
                          <ChildName>{user.name}</ChildName>
                          <ChildChats>
                            <ChildChat>{user.chat}</ChildChat>
                            <ChildChatTime>{user.time}</ChildChatTime>
                          </ChildChats>
                        </ChildInfo>
                      </ChildContents>
                    );
                  } else {
                    return (
                      <UserContents key={user.id}>
                        <UserChats>
                          <UserChatTime>{user.time}</UserChatTime>
                          <UserChat>{user.chat}</UserChat>
                        </UserChats>
                      </UserContents>
                    );
                  }
                })}
                {chat.map((info) => {
                  if (info.role === "child") {
                    return (
                      <ChildContents key={info.time}>
                        <ChildImg src={child}></ChildImg>
                        <ChildInfo>
                          <ChildName>{info.name || "민영이"}</ChildName>
                          <ChildChats>
                            <ChildChat>{info.message}</ChildChat>
                            <ChildChatTime>{info.time}</ChildChatTime>
                          </ChildChats>
                        </ChildInfo>
                      </ChildContents>
                    );
                  } else {
                    return (
                      <UserContents key={info.time}>
                        <UserChats>
                          <UserChatTime>{info.time}</UserChatTime>
                          <UserChat>{info.message}</UserChat>
                        </UserChats>
                      </UserContents>
                    );
                  }
                })}
              </Chatlog>
            </ChatBox>
          </Contents>
          <ChatForm>
            <ChatInput
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              value={message}
            />
            <ChatButton onClick={sendMessage}>전송</ChatButton>
          </ChatForm>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default ChatDetail;
