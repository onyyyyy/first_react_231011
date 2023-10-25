import {
  faAngleDown,
  faBackward,
  faBars,
  faForward,
  faForwardStep,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../GlobalStyled";
import { Header } from "./Header";
import { Cover } from "./Cover";
import { PlayTime } from "./PlayTime";
import { BtnWrap } from "./BtnWrap";
import { UserCon } from "./UserCon";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #555;
  color: white;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: ${colors.darkGray};
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <Container>
        <Header />
        <Cover />
        <PlayTime />
        <BtnWrap />
        <UserCon />
      </Container>
    </Wrap>
  );
};
