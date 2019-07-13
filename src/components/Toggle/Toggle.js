import React from 'react';
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
        return (
            <Button onClick={this.handleClick} color="primary">
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </Button>
        );
    }
}
export default Toggle;
