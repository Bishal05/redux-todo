let initialState={
    taskList:[]
}

function taskListReducer(state=initialState,action){
    switch(action.type){
        case "add_task":
            return{
                ...state,
                // taskList:state.taskList.push(action.payload),
                taskList: [...state.taskList, action.payload]
            }
        default:
            return state
    }
}

export default taskListReducer;