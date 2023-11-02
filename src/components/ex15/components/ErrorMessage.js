import styled from "styled-components";

const Emessage = styled.span`
  font-size: 16px;
  color: crimson;
  font-weight: 700;
  margin-top: 10px;
`;

export const ErrorMessage = ({ message }) => {
  return (
    <Emessage>
      <span>{message}</span>
    </Emessage>
  );
};
