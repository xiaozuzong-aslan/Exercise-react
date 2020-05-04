import React from 'react'

import styled from 'styled-components'

const SectionCategory = styled.section`
    ul{
        display:flex;
        background:rgba(196,196,196);
        li{
            flex-grow:1;
            text-align:center;
            padding:16px 16px;
            font-size:24px;
            position:relative;
            &.selected::after{
                content:'';
                display:block;
                border:1px solid black;
                height:3px;
                width:100%;
                background:#333;
                position:absolute;
                bottom:0;
                left:0;
            }
        }
    }
`;


export default function CategorySection() {
    return (
        <SectionCategory>
            <ul>
                <li className="selected" onClick={()=>{
                    console.log('xxx')
                }}>支出</li>
                <li>收入</li>
            </ul>
        </SectionCategory>
    )
}
