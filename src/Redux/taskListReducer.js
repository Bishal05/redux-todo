let initialState={
    taskList:[]
}

function taskListReducer(state=initialState,action){
    switch(action.type){
        case "add_task":
            let newObj={
                task:action.payload,
                id:Date.now()
            }
            return{
                ...state,
                // taskList:state.taskList.push(action.payload),
                taskList: [...state.taskList, newObj]
            }
        case "delete_task":
            let idx=action.payload
            let newArray=state.taskList.filter((taskObj)=>{
                return taskObj.id!=idx
            })
            return{
                ...state,
                taskList:[...newArray]
            }

        default:
            return state
    }
}

export default taskListReducer;