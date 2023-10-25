import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { colors } from "../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MoreBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.darkGray};
  border-radius: 50%;
`;

const MenuBtn = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Header = () => {
  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faAngleDown} />
      </MoreBtn>
      <MenuBtn>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>
    </SHeader>
  );
};
