import { createStore } from "redux";
import rootReducer from "./reducers";

let data = {
    visibilityFilter: 'SHOW_ALL',
    todos: [
        {
            id:1,
            text: 'Consider using Redux',
            completed: true
        },
        {
            id:2,
            text: 'Keep all state in a single tree',
            completed: false
        }
    ]
};
export default createStore(rootReducer, data);
