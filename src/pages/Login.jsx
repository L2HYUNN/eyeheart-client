/* eslint-disable no-shadow */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { postUserLogin } from '../api/api';
import flower from '../assets/flower.svg';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Main = styled.main`
  display: flex;
  justify-content: center;
  min-width: 144rem;
  padding: 15rem 0;
  @media ${({ theme }) => theme.size.small} {
    min-width: max-content;
    width: 100%;
    padding-left: 0rem;
    padding-top: 7rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 144rem;
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    padding: 0 2rem;
  }
`;
const LoginImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 8rem;
    height: 8rem;
  }
`;
const LoginTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 10rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    align-items: center;
    max-width: 48rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 80%;
    max-width: 48rem;
    font-size: 1.4rem;
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
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
    height: 4rem;
    padding: 0 3rem;
  }
`;
const LoginJoinText = styled.div`
  font-size: 1.6rem;
  opacity: 0.6;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.4rem;
  }
`;

function Login() {
  const { isSuccess, data, mutate } = useMutation(postUserLogin);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onLogin = (data, event) => {
    event.preventDefault();

    const mutateData = JSON.stringify({
      user_name: data.username,
      password: data.password,
    });
    mutate(mutateData);
  };

  useEffect(() => {
    if (isSuccess) {
      const {
        data: { user_id: userId, access_token: accessToken, refresh_token: refreshToken },
      } = data;
      localStorage.setItem('user', JSON.stringify({ user: true, userId, accessToken, refreshToken }));
      navigate('/');
    }
  }, [isSuccess, data, navigate]);

  return (
    <>
      <Header />
      <Main>
        <Container>
          <LoginImg src={flower} />
          <LoginTitle>로그인</LoginTitle>
          <LoginForm onSubmit={handleSubmit(onLogin)}>
            <LoginInput {...register('username')} type="text" placeholder="이메일" />
            <LoginInput {...register('password')} type="password" placeholder="비밀번호" />
            <LoginButton type="submit">로그인</LoginButton>
          </LoginForm>
          <LoginJoinText>
            <Link to="/join">회원가입 하러 가기</Link>
          </LoginJoinText>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Login;
