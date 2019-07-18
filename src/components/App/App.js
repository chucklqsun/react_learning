import React from 'react';
import './App.css';
import Toggle from '../Toggle';
import FilterableProductTable from "../FilterableProductTable";
import Container from '@material-ui/core/Container';
import TabContainer from '../TabContainer';
import ContextExample from "../ContextExample/ContextExample";
import PKAppBar from "../PKAppBar";
import ReduxExample from "../ReduxExample";

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1,
            error: null,
            isLoaded: false,
            items: []
        };
        this.handleTabChange = this.handleTabChange.bind(this);
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

    handleTabChange(e, value) {
        this.setState({
            tabIndex: value
        });
    }

    render() {
        const { error, isLoaded, items, tabIndex} = this.state;
        let app_content = '';
        if (error) {
            app_content = (
                <div className="App">
                    <div>
                    Error: {error.message}, using dummy data
                    </div>
                    <FilterableProductTable products={PRODUCTS} isLoaded={isLoaded}/>
                    <Toggle/>
                </div>
            );
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
                <PKAppBar tabIndex={tabIndex} handleChange={this.handleTabChange}/>
                <Container maxWidth="sm">
                {tabIndex === 0 &&
                    <TabContainer>
                        {app_content}
                    </TabContainer>
                }
                {tabIndex === 1 &&
                    <TabContainer>
                        <ContextExample />
                    </TabContainer>
                }
                {tabIndex === 2 &&
                    <TabContainer>
                       <ReduxExample />
                    </TabContainer>
                }
                {tabIndex === 3 &&
                    <TabContainer>
                        International
                    </TabContainer>
                }
                </Container>
            </div>
        )
    }
}

export default App;
