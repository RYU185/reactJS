// useState 상태관리

import { use, useState } from "react" // useState를 import하고

export function CounterWithState(){
    const [count, setCount] = useState(0); // 기본적으로 로직의 count와 화면에 보여줄 setCount
    // const [상태변수(X), 세터함수(setX)] = useState(0); 
    // 0은 상태변수 X의 초기값
    // 상태변수나 세터함수는 우리가 만든게 아니라 참조하여 가져와 이름만 붙인 것뿐.
    const [data1, setData1] = useState(0); // 숫자 뿐만이 아니라
    const [array1, setArray1] = useState([]); // 배열도 가능하고
    const [object1, setObject1] = useState({}); // 객체도 가능하다

    function increase(){
        setCount(count+1);
    }

    return<>
        <h2>카운터 (상태관리 사용)</h2>
        <p>Count: {count}</p>
        <button onClick={()=> increase()}>
            +
        </button>
    </>
}