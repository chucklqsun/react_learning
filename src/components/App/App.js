import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import TabContainer from '../TabContainer';
import PKAppBar from "../PKAppBar";
import {tabsInfo} from "./Common";
import CodeBlock from "../CodeBlock";
const ReactMarkdown = require('react-markdown/with-html');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
        };
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(e, value) {
        this.setState({
            tabIndex: value
        });
    }

    getContent(tabs, tabIndex){
        let content = "Unknown";
        tabs.forEach(function (value,idx) {
            if(tabIndex === idx) {
                content =
                    <TabContainer>
                        {value.component}
                        <ReactMarkdown
                            source={value.note}
                            escapeHtml={false}
                            renderers={{ code: CodeBlock }}
                        />
                    </TabContainer>
            }
        });
        return content;
    }

    render() {
        const {tabIndex} = this.state;
        return (
            <div>
                <PKAppBar tabIndex={tabIndex} handleChange={this.handleTabChange}/>
                <Container maxWidth="xl">
                    {this.getContent(tabsInfo, tabIndex)}
                </Container>
            </div>
        )
    }
}

export default App;
