import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageTitle } from "../../ex11/components/PageTitle";
import { data } from "../api";

const Banner = styled.section`
  height: 80vh;
  background: url(https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg)
    no-repeat center / cover;
`;
const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.section`
  width: 45%;
  height: 500px;
  /* background-color: lightblue; */
  background: url(${(props) => props.$url}) no-repeat center / cover;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  &:hover {
    transform: translate(-10px, -10px);
    box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
  }
  a {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const Home = () => {
  return (
    <div>
      <PageTitle name={"Home"} />
      <Banner></Banner>
      <Section>
        <Con $url={data[0].img}>
          <Link to={"/sub/0"}></Link>
        </Con>
        <Con $url={data[1].img}>
          <Link to={"/sub/1"}></Link>
        </Con>
      </Section>
    </div>
  );
};
