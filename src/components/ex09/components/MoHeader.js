import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  /* overflow: hidden; */
`;

const Mheader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Micon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Micon2 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  &:hover {
    cursor: pointer;
  }
`;

const MenuWrap01 = styled.ul`
  width: 100%;
  height: 86vh;
  background-color: pink;
  border-radius: 20px;
  padding: 20%;
  position: absolute;
  top: 0;
  /* left: 0; */
  left: ${(props) => props.$menu};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
  transition: 0.5s;
`;

export const MoHeader = () => {
  const [mPosition, setMPosition] = useState("100%");
  const [num, setNum] = useState(0);

  const onClickBtn = () => {
    if (num === 0) {
      setMPosition("0%");
      setNum(num + 1);
    } else if (num === 1) {
      setMPosition("100%");
      setNum(num - 1);
    }
  };
  return (
    <Wrap>
      <Mheader>
        <Micon>
          <FontAwesomeIcon icon={faAngleDown} />
        </Micon>
        <Micon2 onClick={onClickBtn}>
          <FontAwesomeIcon icon={faBars} />
        </Micon2>
      </Mheader>

      <MenuWrap01 $menu={mPosition}>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
        <li>menu</li>
      </MenuWrap01>
    </Wrap>
  );
};
