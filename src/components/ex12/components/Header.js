import { Link } from "react-router-dom";
import styled from "styled-components";

const Sheader = styled.header``;
const Logo = styled.div``;
const SPage = styled.ul``;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <SPage>
        <li>
          <Link>SUB01</Link>
        </li>
        <li>
          <Link>SUB02</Link>
        </li>
      </SPage>
    </Sheader>
  );
};
