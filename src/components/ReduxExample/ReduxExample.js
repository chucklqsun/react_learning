import React from 'react';
import ToDoList from "./ToDoList/ToDoList";
import { createStore } from 'redux'
import todoApp from './reducers'
import {toggleTodo} from "./actions";

class ReduxExample extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.data = {
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
        this.store = createStore(todoApp,this.data);
    }
    handleChange(id){
        this.store.dispatch(toggleTodo(id));
        this.setState(this.store.getState)
    }

    render() {
        const todos = this.store.getState().todos;
        return (
            <ToDoList todos={todos} handleChange={this.handleChange}/>
        );
    }
}
export default ReduxExample;
