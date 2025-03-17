import {
  useEffect,
  useState,
} from "react";

export function Example_1() {
  const [count, setCount] =
    useState(0);
  const [text, setText] =
    useState("");

  // 상태가 바뀔때마다 실행
  useEffect(() => {
    console.log(
      "렌더링됨. 현재 Count: " +
        count
    );
  });

  // 맨 처음만 실행 (RestAPI)
  useEffect(() => {
    console.log(
      "이 코드는 마운트(=로딩)될 때만 실행됩니다!"
    );
  }, []);

  // 특정상태가 변경될때마다 실행
  useEffect(() => {
    console.log(
      "count가 변경될때만 렌더링. Count: " +
        count
    );
  }, [count]);

  // 첫번째 매개변수는 함수, 두번째 매개변수는 상태변수의 배열

  return (
    <>
      <div>
        <p>Count : {count}</p>
        <button
          onClick={() =>
            setCount(
              count + 1
            )
          }
        >
          +
        </button>
      </div>
      <input
        value={text}
        onChange={(e) =>
          setText(
            e.target.value
          )
        }
      />
    </>
  );
}
