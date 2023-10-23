import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  border: 2px solid black;
`;

const Box_2 = styled.div`
  width: 200px;
  height: 200px;
  border: 3px solid gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  color: blue;
`;

export const StyledEx = () => {
  return (
    <div>
      <Box $bgColor="pink"></Box>
      <Box $bgColor="yellow"></Box>
      <Box_2>오니</Box_2>
    </div>
  );
};
