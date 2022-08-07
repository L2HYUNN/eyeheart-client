import styled from "styled-components";
import child from "../assets/child.jpeg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 72rem;
  height: 120rem;
  padding-top: 2.5rem;
  grid-area: chat;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 67rem;
  height: 100rem;
  background-color: ${({ theme }) => theme.colors.pink};
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border-radius: 2rem;
  padding: 2rem 4rem;
`;
const DateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.darkPink};
  border-radius: 2rem;
  margin-bottom: 3rem;
`;
const Date = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;
const ChatBox = styled.div`
  width: 100%;
  height: 100%;
`;
const Chatlog = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95%;
`;
const ChildContents = styled.li`
  display: flex;
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
  font-size: ${({ theme }) => theme.fontSizes.main};
  margin-bottom: 1rem;
`;
const ChildChats = styled.div`
  display: flex;
  align-items: center;
`;
const ChildChat = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.main};
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
`;
const ChildChatTime = styled.div`
  padding-left: 1rem;
  padding-top: 1.5rem;
`;
const UserContents = styled.li`
  display: flex;
  justify-content: right;
`;
const UserChats = styled.div`
  display: flex;
  align-items: center;
`;
const UserChat = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.main};
  background-color: ${({ theme }) => theme.colors.darkPink};
  padding: 1rem;
  border-radius: 0.5rem;
`;
const UserChatTime = styled.div`
  padding-right: 1rem;
  padding-top: 1.5rem;
`;

function Chat() {
  const DummyChat = [
    {
      id: 1,
      name: "민영이",
      chat: "오늘 너무 우울했어",
      time: "오후 12:21",
      role: "child",
    },
    {
      id: 6,
      chat: "왜 그렇게 우울했어?",
      time: "오후 12:21",
      role: "user",
    },
    {
      id: 2,
      name: "민영이",
      chat: "학교에서 친구랑 싸웠어",
      time: "오후 12:21",
      role: "child",
    },
    {
      id: 7,
      chat: "어쩌다가 싸우게 된거야?",
      time: "오후 12:21",
      role: "user",
    },
    {
      id: 3,
      name: "민영이",
      chat: "내가 분명 지우개 빌린다고 했는데 친구가 언제 그랬냐면서 화냈어",
      time: "오후 12:22",
      role: "child",
    },
    {
      id: 8,
      chat: "기분이 안 좋았겠네 그래도 화해하는게 좋지 않을까?",
      time: "오후 12:22",
      role: "user",
    },
    {
      id: 4,
      name: "민영이",
      chat: "화해 하고 싶은데 어떻게 해야할지 모르겠어",
      time: "오후 12:22",
      role: "child",
    },
    {
      id: 9,
      chat: "왜 그렇게 화가났었는지 물어보고 천천히 이야기해봐!",
      time: "오후 12:22",
      role: "user",
    },
    {
      id: 5,
      name: "민영이",
      chat: "응 알았어 한 번 해볼게!",
      time: "오후 12:23",
      role: "child",
    },
  ];

  return (
    <Container>
      <Contents>
        <DateBox>
          <Date>최근 채팅 내역</Date>
        </DateBox>
        <ChatBox>
          <Chatlog>
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
          </Chatlog>
        </ChatBox>
      </Contents>
    </Container>
  );
}

export default Chat;
