import { useForm } from "react-hook-form";
import { ErrorMessage } from "../components/ErrorMessage";
import {
  Wrap,
  Form,
  Title,
  Input,
  Separ,
  BottomInfo,
} from "../components/loginstyles";
import { Link } from "react-router-dom";
import { ButtonUi } from "../components/ButtonUi";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = () => {};
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(loginHandler)}>
        <Title>SIGNUP</Title>
        <Input
          {...register("username", {
            required: "아이디는 필수입니다",
          })}
          type="text"
          placeholder="로그인"
        />
        <ErrorMessage text={errors?.username?.message} />
        <Input {...register("emil")} type="text" placeholder="이메일" />
        <Input
          {...register("name", {
            required: "이름 필수입니다",
          })}
          type="text"
          placeholder="이름"
        />
        <ErrorMessage text={errors?.name?.message} />
        <Input
          {...register("password", {
            required: "패스워드는 필수입니다",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자리 이상입니다.",
            },
          })}
          type="password"
          placeholder="패스워드"
        />
        <ErrorMessage text={errors?.password?.message} />

        <ButtonUi active={isValid} text={"회원가입"} />

        <Separ>
          <span></span>
          <b>또는</b>
          <span></span>
        </Separ>

        <BottomInfo>
          아이디가 있으신가요? <Link to={"/login"}>로그인 &rarr;</Link>
        </BottomInfo>
      </Form>
    </Wrap>
  );
};
