

export const initialstate = {
    age:24,
    tasks:[],
};
export const stateReducer = (state, action) =>{
    console.log("action", state, action);
    if(action.type ==="increment age"){
        return{
            ...state,
            age:state.age + 1
        }
    }
    return state;
}