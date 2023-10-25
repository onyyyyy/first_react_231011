import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../GlobalStyled";

const SBtnWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  font-size: 18px;
  align-items: center;
  li:nth-child(3) {
    width: 60px;
    height: 60px;
    background-color: lightblue;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.darkGray};
  }
`;

export const BtnWrap = () => {
  return (
    <SBtnWrap>
      <li>
        <FontAwesomeIcon icon={faShuffle} />
      </li>

      <li>
        <FontAwesomeIcon icon={faBackward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faPause} />
      </li>
      <li>
        <FontAwesomeIcon icon={faForward} />
      </li>
      <li>
        <FontAwesomeIcon icon={faRepeat} />
      </li>
    </SBtnWrap>
  );
};
