import React,{useState,useEffect} from 'react'
import {TagSection} from './TagSection'
import {NoteSection} from './NoteSection'
import {CategorySection} from './CategorySection'
import {NumberPadSection} from './NumberPadSection'


export default function Money() {
    const [selectedInfos,setSelectedInfos] = useState({
        tags:[] as string[],
        note:'',
        category:'+' as '+' | '-',
        amount:'0'
    })
    
    const changeState = (options:Partial<typeof selectedInfos>)=>{//更改4个子组件的数据方法
        setSelectedInfos({
            ...selectedInfos,
            ...options
        })
    }
    
   
    useEffect(()=>{
        console.log('selectedInfos发生变化才执行')
    },[selectedInfos])
    return (
        <>
            <TagSection value={selectedInfos.tags} changeValue={changeState}/>
            <NoteSection value={selectedInfos.note} changeValue={changeState}/>
            <CategorySection value={selectedInfos.category} changeValue={changeState}/>
            <NumberPadSection value={selectedInfos.amount} changeValue={changeState}/>
        </>
    )
}
