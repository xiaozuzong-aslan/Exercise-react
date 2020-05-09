

// currentTagInfo:{} as CurrentTagInfo,
// dataSource:[] as CurrentTagInfo[]
const initState = {
    tagList:['衣','食','住','行'],
    CurrentTagInfo:{tag:[],note:'',category:'-',amount:'0'}
}  as State
// {tags:[] as string[],note:'',category:'+' as '+' | '-',amount:'0'}



const reducer:React.Reducer<State,Action> = (state,action)=>{
    switch(action.type){
        
        case 'tagList':
            return {...state,tagList:[...state.tagList,...(action.payload as string[])]}
        case 'CurrentTagInfo':
            return {...state,CurrentTagInfo:{...(action.payload as CurrentTagInfo)}}
       
        default:
            return {...state}
    }
}
export {
    initState,
    reducer
}