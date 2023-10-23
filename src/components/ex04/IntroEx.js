const users = [
  {
    id: 0,
    name: "이지원",
    age: 21,
  },
  {
    id: 1,
    name: "채형원",
    age: 22,
  },
  {
    id: 2,
    name: "임창균",
    age: 20,
  },
  {
    id: 3,
    name: "유기현",
    age: 22,
  },
];

export const IntroEX = () => {
  return (
    <div>
      {users.map((man) => (
        <div key={man.id}>
          <h2>자기소개</h2>
          <h3>이름 : {man.name}</h3>
          <h3>나이 : {man.age}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};
