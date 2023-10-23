import { useState } from "react";

export const EventEx = () => {
  const [num, setNum] = useState(0);

  console.log(num);

  //   const [쓰고싶은 변수명, set+앞에 쓴 변수명] = useState(변수명에 저장하고 싶은 값);
  //   => let 변수명 = 변수값
  //   변수명에 들어간 값을 변경하고 싶을때 set+변수명(변경하고 싶은 값) 이용

  //   const plusHandler = () => {
  //     setNum(num + 1);
  //     // num++ 사용안됨
  //   };

  //   const minusHandler = () => {
  //     setNum(num - 1);
  //   };

  //   const plusHandler = () => setNum(num + 1);
  //   const minusHandler = () => setNum(num - 1);

  // ---------------------------------------------------------------

  //   let num = 0;
  //   const plusHandler = () => {
  //     num++;
  //     console.log(num);
  //   };

  return (
    <div>
      <h3>클릭할 때 숫자 증감</h3>
      <h3>{num}</h3>

      {/* <button onClick={plusHandler}>+</button>
      <button>-</button> */}

      {/* <button onClick={plusHandler}>+</button>
      <button onClick={minusHandler}>-</button> */}
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

// *useState()
// =>react hook 종류 중 하나로 변수를 정의하고 값을 변경 할 때 사용
// =>배열 비구조화 할당을 이용하여 첫번째 값은 변수,
// 두번째 값은 변수를 변경 할 수 있는 함수로 정의
// 단, set이라는 이름을 붙혀줘야됨
// ex)
// const [변수명, set 변수명] = useState(변수값);
