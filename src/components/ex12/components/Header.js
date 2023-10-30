import { Link } from "react-router-dom";
import styled from "styled-components";

const Sheader = styled.header`
  padding: 20px 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;
const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
const SPage = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  li {
    margin-left: 150px;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <SPage>
        <li>
          <Link to={"/sub/0"}>SUB01</Link>
        </li>
        <li>
          <Link to={"/sub/1"}>SUB02</Link>
        </li>
      </SPage>
    </Sheader>
  );
};
