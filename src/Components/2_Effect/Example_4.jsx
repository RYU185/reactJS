import React, { useEffect, useState } from 'react'

const Example_4 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    // 윈도우의 초기 가로길이값 : window.innerWidth

    // addEventListner를 이용하여 이벤트 등록시 반드시 삭제이벤트도 같이 구현
    useEffect(()=>{
        const handleResize = () =>{
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    },[]);

    return (
        <div>
            <h2>현재 창 너비: {width}px</h2>
        </div>
    )
}

export default Example_4