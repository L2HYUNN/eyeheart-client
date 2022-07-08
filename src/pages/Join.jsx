import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

import flower from "../assets/flower.svg";
import { useForm } from "react-hook-form";

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
  padding: 15rem 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 144rem;
`;
const JoinImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 5rem;
`;
const JoinTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 10rem;
`;
const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;
const JoinInput = styled.input`
  width: 45rem;
  height: 5rem;
  border: none;
  font-size: 1.6rem;
  border-bottom: 2px solid black;
  padding: 1.5rem;
  margin-bottom: 3rem;
  &:focus {
    outline: none;
  }
`;
const JoinError = styled.div`
  font-size: 1.6rem;
  padding: 1.5rem;
  padding-top: 0;
  color: red;
`;
const JoinButton = styled.button`
  height: 5rem;
  border: none;
  color: white;
  border-radius: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.darkPink};
  cursor: pointer;
`;

function Join() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data, event) => {
    if (data.password !== data.confirmedPassword) {
      setError("password", {
        message: "패스워드가 일치하지 않습니다.",
      });
      setError("confirmedPassword");
    }
    event.preventDefault();
  };
  return (
    <>
      <Header />
      <Main>
        <Container>
          <JoinImg src={flower} />
          <JoinTitle>회원가입</JoinTitle>
          <JoinForm onSubmit={handleSubmit(onSubmit)}>
            <JoinInput
              errors={errors.username}
              {...register("username", {
                required: "이메일을 입력해주세요.",
                pattern: {
                  value:
                    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\.[A-Za-z0-9._%+-]+$/,
                  message: "유효하지 않은 이메일 입니다.",
                },
              })}
              type="text"
              placeholder="이메일"
            />
            <JoinError>{errors?.username?.message}</JoinError>
            <JoinInput
              errors={errors.secondname}
              {...register("secondname", {
                required: "닉네임을 입력해주세요.",
              })}
              type="text"
              placeholder="닉네임"
            />
            <JoinError>{errors?.secondname?.message}</JoinError>
            <JoinInput
              errors={errors.password}
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상이여야 합니다.",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
                  message:
                    "비밀번호는 적어도 하나의 문자, 숫자, 특수 문자를 포함해야합니다.",
                },
              })}
              type="password"
              placeholder="비밀번호"
            />
            <JoinError>{errors?.password?.message}</JoinError>
            <JoinInput
              errors={errors.confirmedPassword}
              {...register("confirmedPassword")}
              type="password"
              placeholder="비밀번호 확인"
            />
            <JoinError>{errors?.confirmedPassword?.message}</JoinError>
            <JoinButton>회원가입</JoinButton>
          </JoinForm>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Join;
