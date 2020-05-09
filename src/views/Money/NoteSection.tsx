import React, {useRef,useContext} from 'react'
import styled from 'styled-components'
import {Context} from 'Context'



const NoteSection:React.FC = () =>{
    const {state,dispatch} = useContext(Context)!
    const value = state.CurrentTagInfo.note
    const inputRef = useRef<HTMLInputElement>(null)
    const changeNote = () =>{   
        inputRef.current && dispatch({type:'CurrentTagInfo',payload:{...state.CurrentTagInfo,note:inputRef.current.value}})
    }
    return (
        <SectionNote>
            <label>
                 <span>备注</span>
                 <input type="text" 
                 placeholder="在这里输入内容" 
                 defaultValue={value} 
                 onBlur={changeNote}
                 ref={inputRef}
                 />
             </label>
        </SectionNote>
    )
}



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

export {NoteSection}  