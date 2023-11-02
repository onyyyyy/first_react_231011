import styled from "styled-components";

const SErrorMessage = styled.div`
  font-size: 16px;
  color: crimson;
  font-weight: 700;
  margin-top: 10px;
`;

export const ErrorMessage = ({ text }) => {
  return <SErrorMessage>{text}</SErrorMessage>;
};
