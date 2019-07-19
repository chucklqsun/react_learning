import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import ToDoRow from "./ToDoRow/ToDoRow";
import { connect } from "react-redux";

class ToDoList extends React.Component {
    render() {
        const todos = this.props.todos;
        let rows = [];
        todos.forEach((todo) => {
            rows.push(
                <ToDoRow key={todo.id} todo={todo} />
            );
        });
        return (
            <div>
                <label>To do list (React-Redux)</label>
                <Table className="todolist-table">
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const todos = state.todos;
    return {todos}
};
export default connect(mapStateToProps)(ToDoList);