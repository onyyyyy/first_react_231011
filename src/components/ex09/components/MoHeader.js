import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Mheader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const MoHeader = () => {
  return (
    <Mheader>
      <FontAwesomeIcon icon={faAngleDown} />
      <FontAwesomeIcon icon={faBars} />
    </Mheader>
  );
};
