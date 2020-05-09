

// currentTagInfo:{} as CurrentTagInfo,
// dataSource:[] as CurrentTagInfo[]
const initState = {
    tagList:['衣','食','住','行'],
    currentTagInfo:{tag:[],note:'',category:'-',amount:'0'},
    dataSource:[]
}  as State
// {tags:[] as string[],note:'',category:'+' as '+' | '-',amount:'0'}



const reducer:React.Reducer<State,Action> = (state,action)=>{
   
    switch(action.type){
        
        case 'TagList':
            return {...state,tagList:[...state.tagList,...(action.payload as string[])]}
        case 'CurrentTagInfo':
            return {...state,currentTagInfo:{...(action.payload as CurrentTagInfo)}}
        case 'DataSource':
            return {...state,dataSource:[...state.dataSource,...(action.payload as CurrentTagInfo[])]}
        default:
            return {...state}
    }
}
export {
    initState,
    reducer
}