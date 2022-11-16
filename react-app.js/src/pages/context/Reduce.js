

export const initialstate = {
   // age:24,
    event:[],
    isAuthenticated:false
};
export const stateReducer = (state, action) =>{
    console.log("action", state, action);
    // if(action.type ==="increment age"){
    //     return{
    //         ...state,
    //         age:state.age + 1
    //     }
    // }else if (action.type === 'setevent'){
    //     return{
    //         ...state,
    //         event:action.payload,
    //     }
    // }else return state;

    switch(action.type){
        case 'setevent':

            return{
                ...state,
                event:action.payload
            }
        case 'deltask':
            return{
                ...state,
                event:state.event.filter((item)=>item.id!== action.payload)
            }
        case 'default':
            return{
                event:state.event.map((item)=>{
                    if(item.check === action.payload){
                        return{...item,default:!item.default}
                    }return item;
                })
            }
        case 'update':
           return{
            ...state,
            event:[...state.event.filter((item)=>item.id!==action.payload.id),action.payload]
           }
        case "Addtask":
            return {
                ...state,
               event:action.payload
            }
        default:
            return state

            
        
    }
}