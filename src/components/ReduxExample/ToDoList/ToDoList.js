import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import ToDoRow from "./ToDoRow/ToDoRow";

class ToDoList extends React.Component {
    render() {
        const todos = this.props.todos;
        let rows = [];
        todos.forEach((todo) => {
            rows.push(
                <ToDoRow key={todo.id} todo={todo} handleChange={this.props.handleChange}/>
            );
        });
        return (
            <div>
                <div>To do list (Pure Redux)</div>
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
export default ToDoList;