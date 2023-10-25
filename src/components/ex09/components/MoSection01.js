import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Con = styled.div`
  width: 200px;
  height: 220px;
  /* background-color: lightgray; */
  background: url(${(props) => props.$bgImg}) no-repeat center / cover;
  border-radius: 10%;
  margin: 20px 0 10px 0;
`;

const Lyics = styled.h3`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  h4 {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const MoSection01 = () => {
  return (
    <Section>
      <Con $bgImg="https://i.namu.wiki/i/yXlPoRcH_ofczpJ1A36zcyabm_o3Q6ToMeOVc5VjMprFlkUGzre20LDEHXljIgHGUFhwkEhds1ZJ145PrajsEw.webp"></Con>
      <Lyics>
        <h3>Youth</h3>
        <h4>기현(몬스타엑스)</h4>
      </Lyics>
    </Section>
  );
};
