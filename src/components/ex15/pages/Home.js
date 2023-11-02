import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogIn = styled.ul`
  max-width: 450px;
  width: 100%;
  height: 300px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    width: 40%;
    height: 100px;
    background-color: pink;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    border-radius: 10px;
    font-weight: 600;
  }

  li:nth-child(2) {
    background-color: lightblue;
  }

  a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
export const Home = () => {
  return (
    <Wrap>
      <LogIn>
        <li>
          <Link to={"/login"}>로그인</Link>
        </li>
        <li>
          <Link to={"/signup"}>회원가입</Link>
        </li>
      </LogIn>
    </Wrap>
  );
};
