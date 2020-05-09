import React, { useContext,memo} from 'react'

import styled from 'styled-components'
import { Context } from 'Context'


const hashCategory = {'-':'支出','+':'收入'}
type categoryType = keyof typeof hashCategory

const CategorySection:React.FC = memo(() =>{
    const {state,dispatch} = useContext(Context)!
    const category = state.currentTagInfo.category
    
    return (
        <SectionCategory>
            <ul>
                {(Object.keys(hashCategory) as categoryType[]).map(
                    item=>
                    <li key={item}
                    className={category===item?'selected':''}
                    onClick={()=>{
                        dispatch({type:'CurrentTagInfo',payload:{...state.currentTagInfo,category:item}})
                    }}>
                        {item==='+'?'收入':'支出'}
                    </li>)}
            </ul>
        </SectionCategory>
    )
}) 


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

export {CategorySection}

// const hashCategory = {'-':'支出','+':'收入'}
// //类型
// type categoryType = keyof typeof hashCategory

// type Props = {
//     value:categoryType,
//     changeValue:(category:{[propName:string]:categoryType})=>void;
// }

// const CategorySection = React.memo<Props>((props)=>{
//     const category = props.value
//     const setCategory = props.changeValue
//     const changeCategory = (string:categoryType)=>{
//         setCategory({category:string})
//     }
//     console.log('type组件')
//     return (
//         <SectionCategory>
//             <ul>
//                 {(Object.keys(hashCategory) as categoryType[]).map(
//                     item=>
//                     <li key={item}
//                     className={category===item?'selected':''}
//                     onClick={()=>{
//                         changeCategory(item)
//                     }}>
//                         {item==='+'?'收入':'支出'}
//                     </li>)}
//             </ul>
//         </SectionCategory>
//     )
// },(oldProps,newProps)=>oldProps.value===newProps.value)