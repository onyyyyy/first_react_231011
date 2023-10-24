import styled from "styled-components";

const Section = styled.section`
  width: 180px;
  height: 220px;
  background-color: lightgray;
  border-radius: 5%;
  margin: 20px 0;
`;

const ConWrap = styled.div``;
const Con = styled.div``;

export const MoSection01 = () => {
  return (
    <Section>
      <ConWrap>
        <Con></Con>
      </ConWrap>
    </Section>
  );
};
