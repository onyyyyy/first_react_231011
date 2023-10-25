import styled from "styled-components";

const MusicBar = styled.section`
  width: 100%;
  /* background-color: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px 0;
`;
const Bar = styled.div`
  width: 220px;
  border: 2px solid white;
  border-radius: 5px;
`;
const Time = styled.div`
  width: 220px;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 12px;
  margin-top: 5px;
`;

export const MoSection02 = () => {
  return (
    <MusicBar>
      <Bar></Bar>
      <Time>
        <div>0:00</div>
        <div>2:43</div>
      </Time>
    </MusicBar>
  );
};
