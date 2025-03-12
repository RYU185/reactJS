import { useState } from "react"
import styled from "styled-components";


const Container = styled.div`
    height: 100vh; 
    width: 100vw;  // vw: 전체화면 크기
    border: 1px solid #000;
    display: flex;   
    justify-content: center;
    align-items: center;
`;

const Box = styled.section`
    width: 400px;
    height: 400px;
    padding: 40px;
    background-color: ${(props)=>props.color}; //css에 변수를 적용할 수 있음 
                                                // props 문법
    color: white;
    border-radius: 10px;
    & input { // 안에 있는 자식 요소들도 & 를 사용하여 css를 줄수있음
        width: 300px;
        height: 30px;
    }
    & .name {
        font-size: 2rem;
    }
`;

const Button = styled.button`
    width: 130px;
    height: 50px;
`;

export function NameForm (){
    const [name, setName] = useState("");
    const handleChange = (e)=>{
        setName(e.target.value);
    };
    
    // 문제 인식: 어떤컴포넌트에게 어떤 컴포넌트가 정보를 줘야할때 매개변수를 실어줄 수 있는 곳이 없으니까
    // 태그 안에, 즉 props에 속성을 던져줌
    const [color, setColor] = useState("dodgerblue")
    const changeColor = () => {
        setColor("red");
    };

    return <>
        <Container>
            <Box color={color}>
                <h2>이름 입력</h2>
                <input type="text" 
                value={name} // input 안에 있는 값
                onChange={(e)=>{
                    handleChange(e);
                }}
                placeholder="이름을 입력해주세요" 
                />
                <p className="name"> 입력한 이름은: {name}</p>
                <Button onClick={()=>{
                    changeColor(); // props 문법*
                }}
                >버튼을 누르면 색상이 바뀝니다.
                </Button>
            </Box>
        </Container>
    </>
}