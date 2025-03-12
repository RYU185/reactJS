// 반드시 숙지해야할 리액트 규칙 7가지

/*
1. let (재할당 가능), const (재할당 불가능)
2. 화살표 함수 (익명함수) : () => {}
3. 구조 분해/할당 (Destructuring)
4. 스프레드 연산자 (...)
5. map(), filter(), find()
6. ★ asnyc / await
7. import / export
*/

// export 키워드를 붙여야 외부파일의 컴포넌트가 import 할수 있음
export function MyComp() {
    const colors = ["black", "white", "blue"]; // 배열의 구조 분해/할당 []대괄호 사용
    const [first, second, third] = colors;

    const user = {
        name: "Steve",
        age: 25,
    };

    const { name, age } = user; // 객체의 구조 분해/할당 {}중괄호 사용

    // 스프레드 연산자
    console.log(first + " " + second + " " + third);
    console.log(name + " " + age);

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = [...array1, ...array2];
    console.log(array3);

    // 스프레드 연산자의 유용한 사용법
    // 배열에 새로운 데이터를 추가하는데 항상 제일 앞에 추가하고 싶을 때
    const array4 = [10, ...array3];
    console.log(array4);
    const array5 = [...array4, 100];
    console.log(array5);

    // 참조복사가 아닌 값복사도 가능
    const array6 = array1; // 참조복사
    const array7 = [...array1]; // 값복사
    console.log(array6);
    array1[0] = 10;
    console.log(array6); // [10,2,3]
    console.log(array7); // [1,2,3]

    // map, filter, find
    // map은 단순히 값을 변화시키고 배열의 길이는 바뀌지 않는다.
    const numbers = [1, 2, 3];
    const mapResult = numbers.map((num) => num * 2);
    console.log(mapResult); // 2, 4, 6

    // filter는 배열의 값 중 조건에 부합하는 값을 반환해서 새로운 배열을 만든다.
    const filterResult = numbers.filter((num) => num % 2 === 0);
    console.log(filterResult); // 2

    // find는 조건에 맞는 첫 번째 요소를 반환한다.
    const users = [
        { id: 1, name: "Kim" },
        { id: 2, name: "Lee" },
    ];
    const findResult = users.find((user) => user.id === 2);
    console.log(findResult);

    function method1(x) {
        console.log("method1 함수의 출력 : " + x);
    }

    const isLoggedIn = false;

    const itemList = [
        {
            id: 1,
            name: "사과",
            description: "맛있는 빨간 사과",
        },
        {
            id: 2,
            name: "바나나",
            description: "맛있는 노란 바나나",
        },
        {
            id: 3,
            name: "포도",
            description: "신선한 포도",
        }
    ];

    return (
      <>
        <p>나의 컴포먼트</p>
        <MyComponentOnly />
        <div onClick={() => method1("1000")}>여기를 클릭하세요</div>
        {/* 매개변수가 없어도 이렇게 익명함수를 사용하는게 가독성이 좋습니다! */}
        {isLoggedIn ? (
          <p>당신은 로그인 상태입니다.</p>
        ) : (
          <p>로그인을 해주세요.</p>
        )}
        {isLoggedIn && <p>true면 보여주세요.</p>}
        {/* 논리 연산자를 사용하여 && 뒤를 확인하게 하는 방법 */}

        {/* map이 forEach처럼 하나씩 꺼내옴 */}
        <h2>과일목록</h2>
        {itemList.map((item) => (
          <p key={item.id}>
            {item.name} : {item.description}
            {/* MyComp.jsx:92 Each child in a list should have a unique "key" prop.
            배열에 있는 각 자식들은 (p태그) 유니크한 "key"라는 properties를 가져야 한다! 
            
                1. 원하는 태그 객체를 관리하는 DOM
                2. DOM의 단점: 잦은 화면 변경이 발생하면 전체 트리를 처음부터 다시 만듦
                3. 가짜 DOM을 하나 만들자
                4. Virtual DOM이 미리 계산하여 개선사항을 계산하여 효율성을 높임
            
            */}
          </p>
        ))}
      </>
    );
}

// export 키워드가 없으면 같은 파일에서만 사용할 수 있음
function MyComponentOnly() {
    return (
        <>
            <p>내부 컴포먼트</p>
        </>
    );
}
