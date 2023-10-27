import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { colors } from "../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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
  position: relative;
  z-index: 10;
`;

const Menu = styled.ul`
  position: absolute;
  top: 0;
  left: ${(props) => props.$menu};
  width: 100%;
  height: 100%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60% 0;
  font-size: 30px;
  font-weight: 600;
  color: ${colors.darkGray};
  transition: 0.5s;
`;

export const Header = () => {
  //   const [menus, setMenus] = useState("100%");
  //   const [num, setNum] = useState(0);
  //   const onClickMenu = () => {
  //     if (num === 0) {
  //       setMenus("0%");
  //       setNum(num + 1);
  //     } else if (num === 1) {
  //       setMenus("100%");
  //       setNum(num - 1);
  //     }
  //   };

  const [num, setNum] = useState(true);
  const [menus, setMenus] = useState("100%");

  //   const onClickMenu = () => {
  //     num === true ? setMenus(0) : setMenus("100%");
  //   };
  const onClickMenu = () => {
    menus === "100%" ? setMenus(0) : setMenus("100%");
  };

  return (
    <SHeader>
      <MoreBtn>
        <FontAwesomeIcon icon={faAngleDown} />
      </MoreBtn>
      <MenuBtn onClick={onClickMenu}>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>

      <Menu $menu={menus}>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
        <li>MENU</li>
      </Menu>
    </SHeader>
  );
};
