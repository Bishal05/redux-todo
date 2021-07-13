import React,{useState} from 'react'
import {connect} from "react-redux";

function Todo(props) {
    const [task,setTask]=useState("");

    // const handelSubmit=(e)=>{
    //     let newArray=[];
    //     newArray=[...taskList,task];
    //     setTaskList(newArray);
    //     setTask("");
    // }

    return (
        <div>
            <input value={task} onChange={(e)=>{setTask(e.target.value)}}></input>
            <button onClick={()=>{props.addTask(task); setTask("")}}>Add</button>
            <ul>
                
                {props.taskList.map((task,idx)=>{
                    return(
                        <li style={{listStyle:"none"}} key={idx} onClick={(idx)=>{props.deleteTask(idx)}}>{task}</li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps=(store)=>{
    return store;
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addTask:(task)=>{
            dispatch({
                type:"add_task",
                payload:task
            })
        }
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
