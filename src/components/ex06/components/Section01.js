import { styled } from "styled-components";
import { baseLayoutSize } from "../../../GlobalStyled";

const Section = styled.section`
  height: 70vh;
  background-color: lightblue;
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: 80px;
    font-weight: 900;
    margin-top: 100px;
  }
`;

export const Section01 = () => {
  return (
    <Section>
      <h3>첫번째 섹션</h3>
    </Section>
  );
};
