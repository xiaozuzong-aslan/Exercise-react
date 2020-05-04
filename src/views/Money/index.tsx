import React from 'react'
import TagSection from './TagSection'
import NoteSection from './NoteSection'
import CategorySection from './CategorySection'
import {NumberPadSection} from './NumberPadSection'



export default function Money() {
    return (
        <>
            <TagSection />
            <NoteSection />
            <CategorySection />
            <NumberPadSection />
        </>
    )
}
