import React, { useEffect, useState } from "react";

// ex. 게시판
const Example_3 = () =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        sendAPI().then((response)=>{
            console.log("서버로부터 응답 도착");
            setData(response);
            setLoading(false);
        });
    },[]);

    return<div>
        {
            loading ? <p>로딩중....</p> : <p>데이터: {data?.title}</p>
        }
    </div>
}

const sendAPI = () => {
    // ajax 또는  axios를 이용하여 rest api 코드를 작성하는 부분
    // 지금은 3초뒤에 데이터를 리턴하는 코드로 대신함
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({ title: "게시판제목" });
        },3000); // 3초 후에 resolve 함수를 호출함
    });
};

    // Promise 함수
    // -> 익명함수 사용 resolve, reject 매개변수 =>{ ... }
    // 내부적으로 함수가 존재하는데 resolve : 성공하면... , reject : 실패하면...
    // 비동기를 하려면 무조건 있어야한다
    // resolve의 결과는 then, reject의 결과는 catch
    
export default Example_3;
