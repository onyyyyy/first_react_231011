import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bg};
`;

export const EventEx02 = () => {
  const [bgColor, setBgColor] = useState("purple");
  const [num, setNum] = useState(0);
  //   console.log(bgColor);

  const onClickBox = () => {
    // setBgColor("pink");
    if (num === 0) {
      setBgColor("pink");
      setNum(num + 1);
    } else if (num === 1) {
      setBgColor("purple");
      setNum(num - 1);
    }
  };

  return (
    <div>
      <Box $bg={bgColor} onClick={onClickBox}></Box>
    </div>
  );
};
