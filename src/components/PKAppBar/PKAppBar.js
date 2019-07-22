import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {tabsInfo} from "../App/Common";

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

    listTabs(){
        let tabs = [];
        tabsInfo.forEach(function (value, idx) {
            tabs.push(<Tab key={idx} label={value.name} />)
        });
        return tabs;
    }

    render() {
        const props = this.props;
        const tabs = this.listTabs();
        return (
            <AppBar position='static'>
                <Tabs value={props.tabIndex} onChange={this.handleChange}>
                    {tabs}
                </Tabs>
            </AppBar>
        );
    }
}
export default PKAppBar;
