import React,{useEffect} from 'react'
import {TagSection} from './TagSection'
import {NoteSection} from './NoteSection'
import {CategorySection} from './CategorySection'
import {NumberPadSection} from './NumberPadSection'


export default function Money() {
    useEffect(()=>{
        console.log('selectedInfos发生变化才执行')
    },[])
    return (
        <>
            <TagSection />
            <NoteSection />
            <CategorySection />
            <NumberPadSection />
        </>
    )
}
