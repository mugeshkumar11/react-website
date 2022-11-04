

export const initialstate = {
    age:24,
    event:[],
};
export const stateReducer = (state, action) =>{
    console.log("action", state, action);
    if(action.type ==="increment age"){
        return{
            ...state,
            age:state.age + 1
        }
    }else if (action.type === 'setevent'){
        return{
            ...state,
            event:action.payload,
        }
    }else return state;
}