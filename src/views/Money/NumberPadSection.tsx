import React from 'react'
import styled from 'styled-components'
import {calculation} from './calculation'

type Props = {
    value:string,
    changeValue:(amount:{[propName:string]:string})=>void;
}


const NumberPadSection:React.FC<Props> = (props)=>{
    const number = props.value
    const setNumber = props.changeValue
    // const [number,setNumber] = useState<string>('0')
    const delegate = (e: React.MouseEvent<HTMLDivElement>) => {
        const input = (e.target as HTMLButtonElement).innerText
        if(input==='ok'){
            console.log('提交')
        }else{
            setNumber({amount:calculation(input,number)})
        }
    }
    return (
        <SectionNumberPad>
            <div className="output">{number}</div>
            <div className="pad" onClick={(e)=>{
                delegate(e)
            }}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="ok">ok</button>
                <button className="zero">0</button>
                <button>.</button>
            </div>
        </SectionNumberPad>
    )
}

const SectionNumberPad = styled.section`
    display:flex;
    flex-direction:column;
    .output{
        background:white;
        font-size:36px;
        text-align:right;
        line-height:72px;
        padding:0 16px;
        box-shadow:inset 0 -5px 5px -5px rgba(0,0,0.25),
                    inset 0 5px 5px -5px rgba(0,0,0.25);
    }
    .pad{
        button{
            width:25%;
            height:64px;
            float:left;
            border:none;
            font-size:18px;
            &.zero{
                width:50%
            }
            &.ok{
                height:128px;
                float:right;
            }
            &:nth-child(1){
                background:#f2f2f2;
            }
            &:nth-child(2),:nth-child(5){
                background:#E0E0E0;
            }
            &:nth-child(3),:nth-child(6),:nth-child(9){
                background:#D3D3D3;
            }
            &:nth-child(4),:nth-child(7),:nth-child(10){
                background:#C1C1C1;
            }
            &:nth-child(8),:nth-child(11),:nth-child(13){
                background:#B8B8B8;
            }
            &:nth-child(12){
                background:#9A9A9A;
            }
            &:nth-child(14){
                background:#A9A9A9;
            }
        }
    }
`;



export  {NumberPadSection}