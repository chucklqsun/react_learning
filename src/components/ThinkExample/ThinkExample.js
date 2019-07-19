import React from 'react';
import FilterableProductTable from "./FilterableProductTable/FilterableProductTable";
import Toggle from "../Toggle/Toggle";

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ThinkExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
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

    render() {
        let app_content = '';
        const {error,isLoaded,items} = this.state;
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
                {app_content}
            </div>
        );
    }
}
export default ThinkExample;
