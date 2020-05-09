import React from 'react'
import {useParams} from 'react-router-dom'

export default function Edit() {
    const params:{[propsName:string]:string}  =  useParams()
    console.log(params.id)
    return (
        <>
            {params.id}
        </>
    )
}
