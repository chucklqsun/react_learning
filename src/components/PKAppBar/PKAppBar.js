import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class PKAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1,
            error: null,
            isLoaded: false,
            items: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, value) {
        this.props.handleChange(e, value);
    }

    render() {
        const props = this.props;
        return (
            <AppBar position='static'>
                <Tabs value={props.tabIndex} onChange={this.handleChange}>
                    <Tab label="Context" />
                    <Tab label="Thinking in React" />
                    <Tab label="Redux" />
                    <Tab label="React-Redux" />
                    <Tab label="UI Element" />
                </Tabs>
            </AppBar>
        );
    }
}
export default PKAppBar;
