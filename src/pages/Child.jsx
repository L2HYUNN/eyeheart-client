import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

import flower from "../assets/flower.svg";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { postChildRegister } from "../api/api";
import { useNavigate } from "react-router-dom";

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
const ChildImg = styled.img`
  width: 15rem;
  height: 15rem;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    width: 8rem;
    height: 8rem;
  }
`;
const ChildTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  margin-bottom: 10rem;
  @media ${({ theme }) => theme.size.small} {
    font-size: 1.8rem;
  }
`;
const ChildForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  @media ${({ theme }) => theme.size.small} {
    /* flex-direction: row; */
    width: 100%;
    align-items: center;
    max-width: 48rem;
  }
`;
const ChildInput = styled.input`
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
const ChildError = styled.div`
  font-size: 1.6rem;
  padding: 1.5rem;
  padding-top: 0;
  color: red;
`;
const ChildButton = styled.button`
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

const ChildRadios = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3rem;
  @media ${({ theme }) => theme.size.small} {
    flex-direction: column;
  }
`;

const ChildRadio = styled.span`
  font-size: 1.6rem;
  :first-child {
  }
  @media ${({ theme }) => theme.size.small} {
    margin-bottom: 1rem;
  }
`;

function Child() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isSuccess, data, error, mutate } = useMutation(postChildRegister);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      navigate("/");
    }
  }, [isSuccess, data, navigate]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const onChildLogin = (data, event) => {
    event.preventDefault();
    const { accessToken } = JSON.parse(localStorage.getItem("user"));
    const mutateData = [
      JSON.stringify({
        child_name: data.childName,
        child_age: data.childAge,
        child_gender: data.childGender,
        serial_number: data.serialNumber,
      }),
      accessToken,
    ];
    mutate(mutateData);
  };

  return (
    <>
      <Header />
      <Main>
        <Container>
          <ChildImg src={flower} />
          <ChildTitle>아이 정보 등록</ChildTitle>
          <ChildForm onSubmit={handleSubmit(onChildLogin)}>
            <ChildRadios>
              <ChildRadio>아이 성별</ChildRadio>
              <ChildRadio>
                <input
                  errors={errors.childGender}
                  {...register("childGender", {
                    required: "아이의 성별을 선택해주세요.",
                  })}
                  type="radio"
                  value="male"
                  id="male"
                />
                <label htmlFor="male">남자</label>
              </ChildRadio>
              <ChildRadio>
                <input
                  errors={errors.childGender}
                  {...register("childGender", {
                    required: "아이의 성별을 선택해주세요.",
                  })}
                  type="radio"
                  value="female"
                  id="female"
                />
                <label htmlFor="female">여자</label>
              </ChildRadio>
            </ChildRadios>
            <ChildError>{errors?.childGender?.message}</ChildError>
            <ChildInput
              errors={errors.childName}
              {...register("childName", {
                required: "아이의 이름을 입력해주세요.",
              })}
              type="text"
              placeholder="아이 이름"
            />
            <ChildError>{errors?.childName?.message}</ChildError>
            <ChildInput
              errors={errors.childAge}
              {...register("childAge", {
                required: "아이의 나이를 입력해주세요.",
              })}
              type="number"
              placeholder="아이 나이"
            />
            <ChildError>{errors?.childAge?.message}</ChildError>
            <ChildInput
              errors={errors.serialNumber}
              {...register("serialNumber", {
                required: "인형의 시리얼 넘버를 입력해주세요.",
              })}
              type="text"
              placeholder="시리얼 넘버"
            />
            <ChildError>{errors?.serialNumber?.message}</ChildError>
            <ChildButton>정보 등록</ChildButton>
          </ChildForm>
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default Child;
