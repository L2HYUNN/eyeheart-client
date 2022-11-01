/* eslint-disable no-shadow */
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { postUserRegister } from '../api/api';
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
const JoinImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 8rem;
    height: 8rem;
  }
`;
const JoinTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 10rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 100%;
    align-items: center;
    max-width: 48rem;
  }
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
  @media ${({ theme }) => theme.size.small} {
    width: 80%;
    max-width: 48rem;
    font-size: 1.4rem;
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
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.6rem;
    height: 4rem;
    padding: 0 3rem;
  }
`;

function Join() {
  const { isSuccess, mutate } = useMutation(postUserRegister);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    }
  }, [isSuccess, navigate]);

  const onLogin = (data, event) => {
    event.preventDefault();
    if (data.password !== data.confirmedPassword) {
      setError('password', {
        message: '패스워드가 일치하지 않습니다.',
      });
      setError('confirmedPassword');
    }

    const mutateData = JSON.stringify({
      user_name: data.username,
      user_subname: data.secondname,
      password: data.confirmedPassword,
      user_type: 'parent',
    });

    mutate(mutateData);
  };

  return (
    <>
      <Header />
      <Main>
        <Container>
          <JoinImg src={flower} />
          <JoinTitle>회원가입</JoinTitle>
          <JoinForm onSubmit={handleSubmit(onLogin)}>
            <JoinInput
              errors={errors.username}
              {...register('username', {
                required: '이메일을 입력해주세요.',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\.[A-Za-z0-9._%+-]+$/,
                  message: '유효하지 않은 이메일 입니다.',
                },
              })}
              type="text"
              placeholder="이메일"
            />
            <JoinError>{errors?.username?.message}</JoinError>
            <JoinInput
              errors={errors.secondname}
              {...register('secondname', {
                required: '닉네임을 입력해주세요.',
              })}
              type="text"
              placeholder="닉네임"
            />
            <JoinError>{errors?.secondname?.message}</JoinError>
            <JoinInput
              errors={errors.password}
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                minLength: {
                  value: 8,
                  message: '비밀번호는 8자 이상이여야 합니다.',
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
                  message: '비밀번호는 적어도 하나의 문자, 숫자, 특수 문자를 포함해야합니다.',
                },
              })}
              type="password"
              placeholder="비밀번호"
            />
            <JoinError>{errors?.password?.message}</JoinError>
            <JoinInput
              errors={errors.confirmedPassword}
              {...register('confirmedPassword')}
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
