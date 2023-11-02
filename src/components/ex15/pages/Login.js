import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "../components/ErrorMessage";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 550px;
  background-color: #f1f1f1;
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;

const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -2px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 50px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  background-color: #fff;
  padding: 0 15px;
  margin-top: 10px;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: pink;
  text-align: center;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

const PlusTab = styled.div`
  display: flex;
  margin-top: 20px;
  text-align: center;
  p {
    margin-right: 10px;
  }

  a {
    color: #00498c;
  }
`;

const Signup = styled.div`
  font-weight: 600;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = (data) => {};
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>Login</Title>
        <Input
          {...register("username", {
            required: "아이디를 입력해주세요",
            minLength: {
              value: 4,
              message: "아이디는 4자리 이상 입력해주세요",
            },
          })}
          type="text"
          placeholder="아이디"
        />
        <ErrorMessage message={errors?.username?.message} />

        <Input
          {...register("password", {
            required: "패스워드를 입력해주세요",
            minLength: {
              value: 8,
              message: "비밀번호는 8자리 이상 작성해주세요",
            },
            pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage message={errors?.password?.message} />

        <Button $isActive={isValid}>로그인</Button>

        <PlusTab>
          <p>혹시 회원이 아니신가요?</p>
          <Signup>
            <Link to={"/signup"}>회원가입</Link>
          </Signup>
        </PlusTab>
      </Form>
    </Wrap>
  );
};
