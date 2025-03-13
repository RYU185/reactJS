import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 100px;
    height: 40px;
    font-family: Poppins;
    background-color: dodgerblue;
    color: white;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease;
    &:hover{
        background-color: #484869;
    }
`
// 구조분해할당
const Button = ({name, color, value}) => {
    return (
        <Box>
            <p>{name}</p>
        </Box>
    );
};

// const Button = (props) => {
//     return (
//         <Box>
//             <p>{props.name}</p>
//         </Box>
//     )
// }

export default Button