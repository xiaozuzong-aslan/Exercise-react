import {createContext} from 'react'

type ContexType = {
    state:State,
    dispatch:React.Dispatch<Action>
}
const Context = createContext<ContexType|null>(null)

export {Context}