import { styled } from "styled-components";
import { baseLayoutSize, fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
    font-weight: 900;
  }
`;

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  width: 30%;
  height: 400px;
  /* background-color: lightblue; */
  background: url(${(props) => props.$bgImg}) no-repeat center / cover;
  /* background-image: url(${(props) => props.$bgImg}); */
  transition: 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;

export const Section02 = () => {
  return (
    <Section>
      <h3>두번째 섹션</h3>
      <ConWrap>
        <Con $bgImg="https://t4.ftcdn.net/jpg/05/49/86/39/360_F_549863991_6yPKI08MG7JiZX83tMHlhDtd6XLFAMce.jpg"></Con>
        <Con $bgImg="https://cdn.pixabay.com/photo/2018/01/24/18/05/background-3104413_1280.jpg"></Con>
        <Con $bgImg="https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg"></Con>
      </ConWrap>
    </Section>
  );
};
