import React from 'react'
import styled from 'styled-components'

const SectionNote = styled.section`
    label{
        display:flex;
        background:rgba(245,245,245);
        padding:24px 16px;
        input{
            border:none;
            background:transparent;
            outline:none;
        }
        span{
            margin-right:8px;
        
        }
    }
`;

export default function NoteSection() {
    return (
        <SectionNote>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里输入内容"/>
            </label>
        </SectionNote>
    )
}
