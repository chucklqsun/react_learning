import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        const MyButton = styled(Button)({
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            margin: '5px 0',
            minWidth: '110px'
        });
        return (
            <MyButton onClick={this.handleClick} color="primary">
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </MyButton>
        );
    }
}
export default Toggle;
