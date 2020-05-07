import React, {useRef } from 'react'
import styled from 'styled-components'

//受控组件写法
// const NoteSection:React.FC = ()=>{
//     const [text,setText] = useState<string>('')
//     const changeValue = (e:React.FormEvent) =>{
//         console.log((e.target as HTMLInputElement).value)
//         setText((e.target as HTMLInputElement).value)
//     }
//     return (
//         <SectionNote>
//             <label>
//                 <span>备注</span>
//                 <input type="text" placeholder="在这里输入内容" onChange={(e)=>{
//                     changeValue(e)
//                 }} value={text}/>
//             </label>
//         </SectionNote>
//     )
// }

//非受控组件写法
type noteType = {
    note:string
}
type Props = {
    value:string,
    changeValue:(note:noteType)=>void;
}

const NoteSection:React.FC<Props> = (props) =>{
    
    const {value,changeValue} = props
    const inputRef = useRef<HTMLInputElement>(null)

    const changeNote = () =>{   
        inputRef.current && changeValue({note:inputRef.current.value})
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