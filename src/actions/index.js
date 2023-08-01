//here action folder storing the whatever action can be performed, the methodology to this will e stored in the reduce part

export const incNumber =()=>{
    return{
        //action has type field
        type:"INCREMENT"

    }
}
export const decNumber=()=>{
    return{
        type:"DECREMENT"
    }
}
 