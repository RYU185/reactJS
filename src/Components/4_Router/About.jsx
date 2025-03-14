import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const {id} = useParams(); // 백엔드에서 @requestParams 형식으로 보내줄때
    return (
        <div>
            <h1>About</h1>
            <p>{id}</p>
        </div>
    )
}

export default About