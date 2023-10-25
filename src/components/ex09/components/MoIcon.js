import {
  faBackward,
  faForward,
  faPlay,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const MIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  margin-top: 10px;
`;

const Play = styled.div`
  width: 50px;
  height: 50px;
  background-color: pink;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MoIcon = () => {
  return (
    <MIcon>
      <FontAwesomeIcon icon={faShuffle} />
      <FontAwesomeIcon icon={faBackward} />
      <Play>
        <FontAwesomeIcon icon={faPlay} />
      </Play>
      <FontAwesomeIcon icon={faForward} />
      <FontAwesomeIcon icon={faRepeat} />
    </MIcon>
  );
};
