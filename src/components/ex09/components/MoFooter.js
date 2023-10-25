import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Mfooter = styled.div`
  padding: 5px;
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Mprofil = styled.div`
  display: flex;
  align-items: center;
`;
const UserPic = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid lightgray;
  border-radius: 50%;
  /* background-color: lightgray; */
  background: url(${(props) => props.$userImg}) no-repeat center / cover;
  margin-right: 8px;
`;
const UserName = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const FastForward = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoFooter = () => {
  return (
    <Mfooter>
      <Mprofil>
        <UserPic $userImg="https://image.jtbcplus.kr/data/contents/jam_photo/202301/11/cfad82ef-9fdb-4ff2-a6f7-db32f6155d89.jpg"></UserPic>
        <UserName>
          <h3>oniizzx</h3>
        </UserName>
      </Mprofil>

      <FastForward>
        <FontAwesomeIcon icon={faForwardStep} />
      </FastForward>
    </Mfooter>
  );
};
