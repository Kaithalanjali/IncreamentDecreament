//here we are mentioning the methedology for a action
const initialState=0;
const changeTheNumber=(state=initialState, action)=>{
    switch(action.type){
        case "INCREMENT":return state+1;
        case "DECREMENT":return state-1;
        default: return state;
    }
}
export default changeTheNumber;