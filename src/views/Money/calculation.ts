const calculation = (input:string,output:string)=> {
    if(output.length>=16){ return output }

    if('0123456789.'.indexOf(input)>=0){
        if(input==='.'){
            if(output === '0'){return '0'}
            if(output.indexOf('.')<0){
                return output+input
            }else{
                return output
            }
        }else{
            if(output === '0'){
                return input
            }else{
                return output+input
            }
            
        }
    }else if(input==='清空'){
        return '0'
    }else{
        if(output.length>1){
            if(output[output.length-2]==='.'){
                return output.slice(0,output.length-2)
            }else{
                return output.slice(0,output.length-1)
            }
        }else{
            return '0'
        }
      
    }
    
}
export {
    calculation
}