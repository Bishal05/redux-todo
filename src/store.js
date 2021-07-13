import {createStore} from "redux";
import taskListReducer from "./Redux/taskListReducer";

const store=createStore(taskListReducer);
export default store;