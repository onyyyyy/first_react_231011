import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { colors } from "../../../GlobalStyled";

const SUserCon = styled.div`
  padding: 20px;
  border-radius: 50px;
  background-color: lightblue;
  color: ${colors.darkGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-color: lightgray;
  border-radius: 50%;
  margin-right: 10px;
`;

const NextBtn = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserCon = () => {
  return (
    <SUserCon>
      <User>
        <Avatar />
        <h3>Oniizzx</h3>
      </User>

      <NextBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NextBtn>
    </SUserCon>
  );
};
