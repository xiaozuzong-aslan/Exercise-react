import React from 'react'
import styled from 'styled-components'

const SectionTag = styled.section`
/* border:1px solid red; */
flex-grow:1;
padding:5px 16px;
font-size:16px;
ul{
    display:flex;
    height:100px;
    align-items:center;
    flex-wrap:wrap;
    overflow:auto;
    li{
        padding:2px 16px;
        background:rgba(217,217,217);
        margin-right:18px;
        border-radius:16px;
        margin-top:4px;

    }
}
button{
    border:none;
    background:none;
    color:rgba(102,102,102);
    border-bottom:1px solid;
    padding:0 4px;
}
`;



export default function TagSection() {
    return (
        <SectionTag>
            <ul>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <button>新建标签</button>
        </SectionTag>
    )
}
