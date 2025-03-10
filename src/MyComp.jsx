// 반드시 숙지해야할 리액트 규칙 7가지

/*
1. let, const
2. 화살표 함수 (익명함수) : ()=> {}
3. 구조 분해/할당 (Destructuring)
4. 스프레드 연산자 (...)
5. map(), filter(), find()
6. asnyc / await
7. import / export
*/

// export 키워드를 붙여야 외부파일의 컴포넌트가 import 할수 있음
export function MyComp(){
    const colors = ["black", "white", "blue"]; // 배열의 구조 분해/할당 []대괄호 사용
    const [first, second, third] = colors;
    const user = {
        name: "Steve",
        age: 25,
    };

    const {name, age} = user; // 객체의 구조 분해/할당 {}중괄호 사용
    console.log(first+" "+ second + " " + third);
    console.log(name +" " + age);

    const array1 = [1,2,3];
    const array2 = [4,5,6];
    const array3 = [...array1, ...array2];
    

    

    function method1(x){
        console.log("method1 함수의 출력 : "+ x);
    }

    return (
    <>
        <p>나의 컴포먼트</p>
        <MyComponentOnly />
        <div onClick={()=> method1("1000")}>여기를 클릭하세요</div>
        {/* 매개변수가 없어도 이렇게 익명함수를 사용하는게 가독성이 좋습니다! */}
    </>
    )


}

// 3. 구조 분해/할당



// export 키워드가 없으면 같은 파일에서만 사용할 수 있음
function MyComponentOnly(){
    return(
        <>
            <p>내부 컴포먼트</p>
        </>
    )
}