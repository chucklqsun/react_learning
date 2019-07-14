import React from 'react';
import './App.css';
import Toggle from '../Toggle';
import FilterableProductTable from "../FilterableProductTable";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

// const PRODUCTS = [
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
// ];
class TabContainer extends React.Component {
    render() {
        return (
            <Typography component="div" style={{ padding: 8 * 3 }}>
                {this.props.children}
            </Typography>
        );
    }
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class App extends React.Component {
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

    componentDidMount() {
        fetch("http://localhost:3001/product_list")
        // fetch("http://localhost:3001/product_list_nothing")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleChange(e, value) {
        this.setState({
            tabIndex: value
        });
    }

    render() {
        const { error, isLoaded, items, tabIndex} = this.state;
        let app_content = '';
        if (error) {
            app_content = <div>Error: {error.message}</div>;
        } else {
            app_content = (
                <div className="App">
                    <FilterableProductTable products={items} isLoaded={isLoaded}/>
                    <Toggle/>
                </div>
            )
        }
        return (
            <div>
                <AppBar position='static'>
                    <Tabs value={tabIndex} onChange={this.handleChange}>
                        <Tab label="Thinking in React" />
                        <Tab label="Context" />
                        <Tab label="Route" />
                    </Tabs>
                </AppBar>
                <Container maxWidth="sm">
                {tabIndex === 0 &&
                    <TabContainer>
                        {app_content}
                    </TabContainer>
                }
                {tabIndex === 1 &&
                    <TabContainer>
                        Context
                    </TabContainer>
                }
                {tabIndex === 2 &&
                    <TabContainer>
                        Route
                    </TabContainer>
                }
                </Container>
            </div>
        )
    }
}

export default App;
