import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import {connect} from "react-redux";
import {toggleTodo} from "../../redux/actions";

class ToDoRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (){
        this.props.toggleTodo(this.props.todo.id);
    }

    render() {
        const todo = this.props.todo;
        let chip;
        if(todo.completed){
            chip =
                <Chip
                avatar={<Avatar>D</Avatar>}
                label={todo.text}
                onClick={this.handleClick}
                color="primary"
                variant="outlined"
                />
        }else{
            chip =
                <Chip
                    avatar={<Avatar>-</Avatar>}
                    label={todo.text}
                    onClick={this.handleClick}
                    color="secondary"
                    variant="outlined"
                />
        }

        return (
            <TableRow>
                <TableCell>
                    {chip}
                </TableCell>
            </TableRow>
        );
    }
}

export default connect(null, {toggleTodo})(ToDoRow);