import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SendAPI() {
    const [data, setData] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response)=>{
            setData(response.data);
            setLoading(false);
        }) // then: 성공
        .catch((error)=>{
            console.error("데이터 가져오기에 실패했습니다 : ", error);
        }) // catch: 200 이외 모든 에러
    },[])

    return (
        <div>
            {loading ? <p>로딩중...</p>
            :
            <>
                <p>타이틀: {data.title}</p>
                <p>ID: {data.id}</p>
                <p>User ID: {data.userId}</p>
                <p>완료여부: {data.completed ? "TRUE" : "FALSE"}</p>
            </>
            }</div>
    )
}

export default SendAPI