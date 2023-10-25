import styled from "styled-components";
import { MoHeader } from "./MoHeader";
import { MoSection01 } from "./MoSection01";
import { MoSection02 } from "./MoSection02";
import { MoIcon } from "./MoIcon";
import { MoFooter } from "./MoFooter";

const MusicWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  overflow: hidden;
`;

const Con = styled.div`
  padding: 30px;
  max-width: 300px;
  width: 100%;
  height: 86vh;
  background-color: #333;
  border-radius: 20px;
`;

export const MusicApp = () => {
  return (
    <MusicWrap>
      <Con>
        <MoHeader />
        <MoSection01 />
        <MoSection02 />
        <MoIcon />
        <MoFooter />
      </Con>
    </MusicWrap>
  );
};
