import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

import flower from "../assets/flower.svg";
import { Link } from "react-router-dom";
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
const LoginImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 5rem;
`;
const LoginTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 10rem;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;
const LoginInput = styled.input`
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
const LoginButton = styled.button`
  height: 5rem;
  border: none;
  color: white;
  border-radius: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.darkPink};
  cursor: pointer;
`;
const LoginJoinText = styled.div`
  font-size: 1.6rem;
  opacity: 0.6;
`;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <Header />
      <Main>
        <Container>
          <LoginImg src={flower} />
          <LoginTitle>로그인</LoginTitle>
          <LoginForm>
            <LoginInput
              {...register("username")}
              type="text"
              placeholder="이메일"
            />
            <LoginInput type="password" placeholder="비밀번호" />
            <LoginButton type="submit">로그인</LoginButton>
          </LoginForm>
          <LoginJoinText>
            <Link to={"/join"}>회원가입 하러 가기</Link>
          </LoginJoinText>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Login;
