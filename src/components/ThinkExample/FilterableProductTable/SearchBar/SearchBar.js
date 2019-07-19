import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }


    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
            <form>
                <TextField
                    label="Search..."
                    value={filterText}
                    onChange={this.handleFilterTextChange}
                    margin="normal"
                />
                <p>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={inStockOnly}
                                onChange={this.handleInStockChange}
                                />
                        }
                        label="Only show products in stock"
                    />
                </p>
            </form>
        );
    }
}
export default SearchBar;