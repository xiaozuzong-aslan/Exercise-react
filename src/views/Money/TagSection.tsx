import React, { useContext } from 'react'
import styled from 'styled-components'

// import createId from 'helpers/createId'
import {Context} from 'Context'


const TagSection:React.FC = () => {
    const {state,dispatch} = useContext(Context)!
    
    const selectedList = state.currentTagInfo.tag
   
    const addTag = ()=>{
        const name = window.prompt('请输入新标签名')
        if(name){
            if(state.tagList.indexOf(name)>=0){
                alert('标签名重复啊哥')
            }else{
                dispatch({type:'TagList',payload:[name]})
            }
        }
    }
    const selected = (tag:string)=>{
        if(selectedList.indexOf(tag)<0){
            dispatch({type:'CurrentTagInfo',payload:{...state.currentTagInfo,tag:[tag]}})
        }else{
            dispatch({type:'CurrentTagInfo',payload:{...state.currentTagInfo,tag:[]}})
        }
    }
    return (
        <SectionTag> 
            <ul>
                {state.tagList.map((item)=><li key={item}
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

export {TagSection}