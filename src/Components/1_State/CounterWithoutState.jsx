
let count = 0;

export function CounterWithoutState(){
    // 1. 상태: useState
    // 2. 사이드 이펙트: useEffect
    // 3. 글로벌 상태관리 : ?

    // 1. 상태 ( 혹은 상태관리 )
    function increase(){
        count = count + 1;
        console.log("현재 카운트: "+ count)
    }

    return<>
        <h2> 카운터 (상태관리 없음)</h2>
        <p>Count : {count}</p>
        <button onClick={()=> increase()}> + </button>
    </>;
}

// 문제인식 : 로직과 디스플레이가 분리됨 
//         console.log("현재 카운트: "+ count) 는 잘 작동함
// 반드시 미리 사전에 count값이 바뀌면 화면도 바뀌어야한다고 알려줘야함

