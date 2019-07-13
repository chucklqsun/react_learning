import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class ProductCategoryRow extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const category = this.props.category;
        return (
            <TableRow>
                <TableCell colSpan={2} align="center">{category}</TableCell>
            </TableRow>
        );
    }
}
export default ProductCategoryRow;