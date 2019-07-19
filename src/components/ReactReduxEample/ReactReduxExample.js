import React from 'react';
import ToDoList from "./ToDoList/ToDoList";
import { Provider } from "react-redux";
import store from "./redux/store";

class ReactReduxExample extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(id){

    }

    render() {
        return (
            <Provider store={store}>
                <ToDoList handleChange={this.handleChange}/>
            </Provider>
        );
    }
}
export default ReactReduxExample;
