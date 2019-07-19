import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import TabContainer from '../TabContainer';
import ContextExample from "../ContextExample/ContextExample";
import PKAppBar from "../PKAppBar";
import ReduxExample from "../ReduxExample";
import ReactReduxExample from "../ReactReduxEample/ReactReduxExample";
import ThinkExample from "../ThinkExample/ThinkExample";



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

    render() {
        const {tabIndex} = this.state;
        return (
            <div>
                <PKAppBar tabIndex={tabIndex} handleChange={this.handleTabChange}/>
                <Container maxWidth="sm">
                {tabIndex === 0 &&
                    <TabContainer>
                        <ContextExample />
                    </TabContainer>
                }
                {tabIndex === 1 &&
                    <TabContainer>
                        <ThinkExample/>
                    </TabContainer>
                }
                {tabIndex === 2 &&
                    <TabContainer>
                       <ReduxExample />
                    </TabContainer>
                }
                {tabIndex === 3 &&
                    <TabContainer>
                        <ReactReduxExample/>
                    </TabContainer>
                }
                {tabIndex === 4 &&
                    <TabContainer>
                        UI Element
                    </TabContainer>
                }
                </Container>
            </div>
        )
    }
}

export default App;
