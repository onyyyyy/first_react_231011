import styled from "styled-components";
import { MoHeader } from "./MoHeader";
import { MoSection01 } from "./MoSection01";

const Wrap = styled.div`
  padding: 30px;
  width: 300px;
  height: 500px;
  background-color: #808080;
  border-radius: 5%;
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <MoHeader />
      <MoSection01 />
    </Wrap>
  );
};
