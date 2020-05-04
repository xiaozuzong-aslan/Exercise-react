import React, { useState } from 'react'
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
        &.selected{
            background:#5C5C5C;
            color:white;
        }
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
    const [tagList,setTagList] = useState<string[]>(['衣','食','住','行'])
    const [selectedList,setSelectedList] = useState<string[]>([])
    const addTag = ()=>{
        const name = window.prompt('请输入新标签名')
        if(name!==null){
            setTagList([...tagList,name])
        }
    }
    const selected = (tag:string)=>{
        
        if(selectedList.indexOf(tag)<0){
            setSelectedList([...selectedList,tag])
        }else{
            setSelectedList(selectedList.filter(item=>item!==tag))
        }
    }
    return (
        <SectionTag> 
            <ul>
                {tagList.map((item,index)=><li key={index}
                onClick={()=>{
                    selected(item)
                }}
                className={selectedList.indexOf(item)>=0?'selected':''}
                >{item}</li>)}
            </ul>
            <button onClick={addTag}>新建标签</button>
        </SectionTag>
    )
}
