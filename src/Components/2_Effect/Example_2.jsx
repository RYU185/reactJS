import { useEffect, useState } from "react"


export function Example_2(){

    const [show, setShow] = useState(true);

    return(
    <>
        <div>
            <button onClick={()=> setShow(!show)}>
                {show ? "숨기기" : "보이기"}
            </button>   
            {show && <ChildComp />}
        </div> 
    </>
    )
}

function ChildComp(){
    useEffect(()=>{
        console.log("자식 컴포넌트가 마운트 됨");
        return()=> {
            console.log("자식 컴포넌트가 언마운트됨!")
        }
    },[])
    return(
    <>
        <h2>이 컴포넌트는 언마운트시 로그를 남깁니다</h2>
    </>
    )
}